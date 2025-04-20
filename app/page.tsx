import Headline from "@/features/headline/components/Headline";
import Projects from "@/features/projects/components/Projects";

export default function Home() {
  return (
    <div className="page">
      <Headline />
      <Projects />
    </div>
  );
}
