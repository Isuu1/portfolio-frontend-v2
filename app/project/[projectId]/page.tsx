"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

//Queries
import { getProject } from "@/sanity/lib/queries/getProject";
//Types
import { Project } from "@/shared/types/project";
//Components
import ProjectImages from "@/features/project-details/components/ProjectImages";
import ProjectDescription from "@/features/project-details/components/ProjectDescription";
//Animations
import { AnimatePresence } from "motion/react";

export default function Page() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const params = useParams();
  const projectId = params.projectId as string;
  const router = useRouter();

  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);
      try {
        const response = await getProject(projectId);
        if (!response) {
          console.error("No project found with the given ID");
          throw new Error("Failed to fetch stack");
        }

        setProject(response);
      } catch (error) {
        console.error("Error fetching stack:", error);
        throw new Error("Failed to fetch stack");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProject();
  }, [projectId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        height: "100vh",
      }}
    >
      <AnimatePresence onExitComplete={() => router.back()}>
        {isVisible && (
          <>
            {project && <ProjectImages project={project} />}

            {project && (
              <ProjectDescription
                project={project}
                closeDescription={() => setIsVisible(false)}
              />
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
