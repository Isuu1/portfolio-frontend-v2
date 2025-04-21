import { client } from "@/sanity/lib/client";
import { Stack } from "@/shared/types/stack";

export async function getStack(): Promise<Stack[]> {
  const query = `
    *[_type == "stack"] {
      _id,
      title,
      icon {
        asset-> {
          _id,
          url
        }
      },
      category
    }
  `;
  try {
    const categories = await client.fetch<Stack[]>(query);
    if (!categories || categories.length === 0) {
      throw new Error("Failed to fetch categories");
    }
    return categories;
  } catch (error) {
    throw new Error(`Failed to fetch categories: ${error}`);
  }
}
