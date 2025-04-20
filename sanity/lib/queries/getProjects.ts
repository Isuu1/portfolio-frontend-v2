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
images[]{
  asset->{
    _id,
    url
  }
},
short_description[],
description[],
projectUrl,
repoUrl,
technologies[],
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
    const projects = await client.fetch<Project[]>(query);
    if (!projects || projects.length === 0) {
      throw new Error("Failed to fetch projects");
    }
    return projects;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
