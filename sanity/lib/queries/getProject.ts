import { client } from "@/sanity/lib/client";
import { Project } from "@/shared/types/project";

export async function getProject(projectId: string): Promise<Project> {
  const query = `
    *[_type == "project" && _id == $projectId][0] {
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
    const project = await client.fetch<Project>(query, { projectId });
    if (!project) {
      throw new Error("Failed to fetch projects");
    }
    return project;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
