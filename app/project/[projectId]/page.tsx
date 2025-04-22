"use client";

import { useRouter } from "next/navigation";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface ProjectPageProps {
  params: {
    projectId: string; // The folder name [projectId] determines this key name
  };
}

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

export default function Page({ params }: ProjectPageProps) {
  const { projectId } = params;
  console.log("Project ID:", projectId);

  const [isVisible, setIsVisible] = useState<boolean>(true);

  const router = useRouter();

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
              <button onClick={() => setIsVisible(false)}>
                go back from this page
              </button>
              🎭 Gifinity A modern web application built with Next.js (App
              Router) that allows users to browse and discover GIFs and stickers
              via the Giphy API. Users can save their favorite items locally
              without needing to sign in, while also having the option to create
              an account to store favorites in personalized collections backed
              by a database. 🚀 Features 🎨 GIF & Sticker Search – Fetches
              results from the Giphy API. 💾 Favorites Without Login – Uses
              local storage to save favorites. 🔑 User Authentication – Sign
              up/log in to store favorites in a database. 🔄 Sync Local
              Favorites – Transfer saved GIFs from local storage to an online
              account after logging in. ⚡ Smooth UI/UX – Built with Framer
              Motion for animations.
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
