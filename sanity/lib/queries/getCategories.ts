import { client } from "@/sanity/lib/client";
import { Category } from "@/shared/types/category";

export async function getCategories(): Promise<Category[]> {
  const query = `
    *[_type == "category"] {
      _id,
      title,
      slug {
        current
      },
    }
  `;
  try {
    const categories = await client.fetch<Category[]>(query);
    if (!categories || categories.length === 0) {
      throw new Error("Failed to fetch categories");
    }
    return categories;
  } catch (error) {
    throw new Error(`Failed to fetch categories: ${error}`);
  }
}
