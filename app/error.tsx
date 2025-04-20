"use client";

import Button from "@/shared/components/ui/Button";
import { MdError } from "react-icons/md";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log("Error: ", error);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        height: "100vh",
      }}
    >
      <MdError size={100} color="red" />
      <h2>Something went wrong!</h2>
      <p>Failed to load project data. Please try again later.</p>
      <pre>{error.message}</pre>
      <Button variant="primary" text="Try again" onClick={() => reset()} />
    </div>
  );
}
