import Headline from "@/features/headline/components/Headline";
import Projects from "@/features/projects/components/Projects";
import { getProjects } from "@/sanity/lib/queries/getProjects";
import { Project } from "@/shared/types/project";

export default async function Home() {
  const projects: Project[] = await getProjects();
  console.log("projects", projects);

  return (
    <div className="page">
      <Headline />
      <Projects />
    </div>
  );
}
