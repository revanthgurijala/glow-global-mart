"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";
import { useEffect, useState } from "react";

export default function Studio() {
  const [isMounted, setIsMounted] = useState(false);

  // This ensures the component only renders AFTER the browser has loaded it
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return a blank screen while loading on the server
  }

  return <NextStudio config={config} />;
}
