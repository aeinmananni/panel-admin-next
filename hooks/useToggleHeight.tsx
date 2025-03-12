"use client";
import { useEffect } from "react";

function useToggleHeight(
  open: boolean,
  containerDivRef: React.RefObject<HTMLDivElement>
) {
  useEffect(() => {
    if (containerDivRef.current) {
      if (open) {
        const linkHeight = containerDivRef.current.scrollHeight;
        containerDivRef.current.style.height = `${linkHeight}px`;
      } else {
        containerDivRef.current.style.height = `0px`;
      }
    }
  }, [open, containerDivRef]);
}

export default useToggleHeight;
