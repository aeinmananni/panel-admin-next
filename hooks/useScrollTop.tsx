"use client";
import { usePanelAdminStore } from "@/store";
import { useEffect, useRef } from "react";

export const useScrollTop = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const setIsScroll = usePanelAdminStore((s) => s.setIsScroll);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setIsScroll(ref.current.scrollTop > 0);
      }
    };

    const currentRef = ref.current;

    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [setIsScroll]);

  return { ref };
};
