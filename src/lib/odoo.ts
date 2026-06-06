export interface OdooConfig {
  url: string;
  db: string;
  username: string;
  apiKey: string;
}

const config: OdooConfig = {
  url: process.env.ODOO_URL || '',
  db: process.env.ODOO_DB || '',
  username: process.env.ODOO_USERNAME || '',
  apiKey: process.env.ODOO_API_KEY || '',
};

// Next.js Server Components will use this utility to fetch data directly from Odoo.
export async function getOdooUid(): Promise<number> {
  if (!config.url || !config.db || !config.username || !config.apiKey) {
    throw new Error('Odoo configuration is missing in environment variables.');
  }

  const response = await fetch(`${config.url}/jsonrpc`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'call',
      params: {
        service: 'common',
        method: 'authenticate',
        args: [config.db, config.username, config.apiKey, {}],
      },
      id: Math.floor(Math.random() * 1000000000),
    }),
    // Caching the authentication request for 1 hour to reduce load on Odoo
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  
  if (data.error) {
    throw new Error(`Odoo Auth Error: ${data.error.data?.message || data.error.message}`);
  }
  
  const uid = data.result;
  if (!uid) {
    throw new Error('Failed to authenticate with Odoo. Check your credentials.');
  }

  return uid;
}

/**
 * Generic function to make JSON-RPC calls to Odoo
 * 
 * @param model Odoo model name (e.g., 'product.template')
 * @param method Odoo method name (e.g., 'search_read')
 * @param args Positional arguments for the method
 * @param kwargs Keyword arguments for the method (e.g., { limit: 10 })
 * @returns Result from Odoo
 */
export async function callOdoo(model: string, method: string, args: any[], kwargs: any = {}) {
  const uid = await getOdooUid();

  const response = await fetch(`${config.url}/jsonrpc`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'call',
      params: {
        service: 'object',
        method: 'execute_kw',
        args: [config.db, uid, config.apiKey, model, method, args, kwargs],
      },
      id: Math.floor(Math.random() * 1000000000),
    }),
    // Disable Next.js aggressive caching for generic Odoo calls by default, 
    // we can add caching on the specific data-fetching functions where needed.
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  
  if (data.error) {
    console.error('Odoo API Error details:', data.error);
    throw new Error(`Odoo API Error: ${data.error.data?.message || data.error.message}`);
  }

  return data.result;
}
