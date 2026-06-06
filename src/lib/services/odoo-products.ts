import { callOdoo } from "../odoo";

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

// Fallback Mock Data
const MOCK_BEST_SELLERS: Product[] = [
  {
    id: "bs1",
    name: "Imperial Diamond Bangle",
    price: "₹ 4,50,000",
    image: "/images/products/diamond_bangle.png",
    category: "Diamonds"
  },
  {
    id: "bs2",
    name: "Royal 22K Men's Ring",
    price: "₹ 1,25,000",
    image: "/images/products/gold_ring.png",
    category: "Gold"
  },
  {
    id: "bs3",
    name: "Eternity Diamond Pendant",
    price: "₹ 2,80,000",
    image: "/images/products/diamond_pendant.png",
    category: "Diamonds"
  },
  {
    id: "bs4",
    name: "Heritage Bridal Set",
    price: "₹ 12,80,000",
    image: "/images/products/bridal_set.png",
    category: "Bridal"
  },
];

export async function getBestSellers(): Promise<Product[]> {
  try {
    if (!process.env.ODOO_URL || !process.env.ODOO_DB) {
      // If no config, return mock data
      return MOCK_BEST_SELLERS;
    }

    // Fetch from Odoo product.template
    // Adjust fields based on actual Odoo setup
    const odooProducts = await callOdoo(
      'product.template',
      'search_read',
      [[['sale_ok', '=', true]]], // Domain / Filter
      {
        fields: ['id', 'name', 'list_price', 'categ_id', 'image_1920'],
        limit: 8,
        order: 'sales_count desc' // Example order for best sellers
      }
    );

    return odooProducts.map((p: any) => ({
      id: p.id.toString(),
      name: p.name,
      price: `₹ ${p.list_price?.toLocaleString() || '0'}`, // Format price
      // In Odoo, images are base64 encoded strings
      // Or you can map it to an image endpoint if available
      image: p.image_1920 ? `data:image/jpeg;base64,${p.image_1920}` : "/images/placeholder.png",
      category: p.categ_id ? p.categ_id[1] : "Uncategorized"
    }));

  } catch (error) {
    console.error("Error fetching Best Sellers from Odoo:", error);
    // Fallback to mock data if Odoo fetch fails (e.g., during development)
    return MOCK_BEST_SELLERS;
  }
}
