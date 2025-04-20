import { client } from "@/sanity/lib/client";
import { Project } from "@/shared/types/project";

export async function getProjects(): Promise<Project[]> {
  const query = `
    *[_type == "project"] {
_id,
name,
slug {
  current
},
categories[]-> {
  _id,
  title,
  slug {
    current
  }
},
thumbnail {
  asset->{
    _id,
    url
  }
},
short_description,
images[]{
  asset->{
    _id,
    url
  },
  ...
},
publishedAt
}
  `;
  try {
    const categories = await client.fetch<Project[]>(query);
    if (!categories || categories.length === 0) {
      throw new Error("Failed to fetch projects");
    }
    return categories;
  } catch (error) {
    throw new Error(`Failed to fetch projects: ${error}`);
  }
}
