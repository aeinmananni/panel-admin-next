"use client";
import {
  classificationItem,
  groupingItem,
} from "@/components/panel/sidebar/data";
import { useEffect, useState } from "react";

export const useAutoOpenMenuOnRoute = () => {
  const [openItems, setOpenItems] = useState<boolean[]>([]);
  const location = window.location.pathname;
  useEffect(() => {
    const openIndexes: boolean[] = classificationItem.map(
      (cl: { classificationId: number }) => {
        return groupingItem.some(
          (gr) =>
            location.includes(String(gr.link)) &&
            gr.classificationId === cl.classificationId
        );
      }
    );
    setOpenItems(openIndexes);
  }, [location]);

  return { openItems };
};
