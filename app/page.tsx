import About from "@/features/about/components/About";
import StackList from "@/features/about/components/StackList";
import Contact from "@/features/contact/Contact";
import Headline from "@/features/headline/components/Headline";
import Projects from "@/features/projects/components/Projects";
import { getProjects } from "@/sanity/lib/queries/getProjects";
import { Project } from "@/shared/types/project";

export default async function Home() {
  const projects: Project[] = await getProjects();

  return (
    <div className="page">
      <Headline />
      <Projects projects={projects} />
      <About />
      <StackList />
      <Contact />
    </div>
  );
}
