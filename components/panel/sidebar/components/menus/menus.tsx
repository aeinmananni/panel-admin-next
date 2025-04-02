"use client";
import { ClassificationItem } from "./classification-item";
import { useScrollTop } from "../../../../../hooks/useScrollTop";
import { classificationItem, groupingItem } from "../../data";
import { GroupingItem } from "./grouping-item";
import { useAutoOpenMenuOnRoute } from "../../../../../hooks/useAutoOpenMenuOnRoute";
export default function Menus() {
  const { ref } = useScrollTop();
  const { openItems } = useAutoOpenMenuOnRoute();
  return (
    <div
      ref={ref}
      className={`scrollbar  transition-all duration-300 w-full h-full  overflow-y-auto flex-col gap-2 flex  bottom-0  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 overflow-x-hidden`}
    >
      <div className="w-full h-max p-1 flex flex-col gap-1 ">
        {classificationItem.map((cl, clIndex) => (
          <ClassificationItem
            key={cl.classificationId}
            title={cl.classificationName}
            icon={cl.icon}
            isOpen={openItems[clIndex]}
          >
            <div className="flex flex-col w-full gap-1 py-2">
              {groupingItem.map((gr) => (
                <>
                  {cl.classificationId === gr.classificationId && (
                    <GroupingItem
                      key={gr.groupingId}
                      title={gr.groupingName}
                      to={gr.link}
                    />
                  )}
                </>
              ))}
            </div>
          </ClassificationItem>
        ))}
      </div>
    </div>
  );
}
