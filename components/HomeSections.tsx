"use client";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useEffect, useState } from "react";

const STORAGE_KEY = "home_page_sections";

const DEFAULT_SECTIONS = [
  "Hero",
  "Features",
  "Testimonials",
  "CTA",
  "Footer",
];

export default function HomeSections() {
  const [sections, setSections] = useState<string[]>(DEFAULT_SECTIONS);

  // Load saved order
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setSections(JSON.parse(saved));
    }
  }, []);

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setSections((items) => {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);
      const updated = arrayMove(items, oldIndex, newIndex);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={sections}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-3">
          {sections.map((section, index) => (
            <div
              key={section}
              id={section}
              className="
                flex items-center justify-between
                p-4
                bg-white
                text-black
                border border-gray-300
                rounded-lg
                shadow-sm
                cursor-move
              "
            >
              <span className="font-semibold">
                {index + 1}. {section}
              </span>

              <span className="text-xs text-gray-500">
                Drag
              </span>
            </div>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
