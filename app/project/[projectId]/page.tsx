"use client";

import { useParams, useRouter } from "next/navigation";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { getProject } from "@/sanity/lib/queries/getProject";
import { Project } from "@/shared/types/project";
import ProjectDescription from "@/features/project-details/components/ProjectDescription";

const descriptionVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export default function Page() {
  const params = useParams();
  const projectId = params.projectId as string;

  const [isVisible, setIsVisible] = useState<boolean>(true);

  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  console.log("Project:", project);

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
        minHeight: "100vh",
      }}
    >
      <AnimatePresence onExitComplete={() => router.back()}>
        {isVisible && (
          <>
            <div>test</div>

            <motion.div
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "fit-content",
              }}
            >
              {project && (
                <ProjectDescription
                  project={project}
                  closeDescription={() => setIsVisible(false)}
                />
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
