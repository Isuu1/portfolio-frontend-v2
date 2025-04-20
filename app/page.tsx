import Headline from "@/features/headline/components/Headline";
import Projects from "@/features/projects/Projects";

export default function Home() {
  return (
    <div className="page">
      <Headline />
      <Projects />
    </div>
  );
}
