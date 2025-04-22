"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

// const pageVariants = {
//   initial: {
//     opacity: 0,
//   },
//   in: {
//     opacity: 1,
//     transition: {
//       duration: 3,
//     },
//   },
//   exit: {
//     opacity: 0,
//   },
// };

// // Define the transition style
// const pageTransition = {
//   type: "tween", // Or "spring", "inertia", etc.
//   ease: "anticipate", // Example easing function
//   duration: 0.5,
// };

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // IMPORTANT: Use pathname as key to trigger animation on route change
        // initial="initial"
        // animate="in"
        // exit="exit"
        // variants={pageVariants}
        //transition={pageTransition}

        // Apply any necessary layout styles here if needed
        // className={styles.projectLayoutContainer}
      >
        {children}
        {/* This will render the content of app/project/[projectId]/page.tsx */}
      </motion.div>
    </AnimatePresence>
  );
}
