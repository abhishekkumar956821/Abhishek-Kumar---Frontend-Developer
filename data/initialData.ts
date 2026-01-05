import type { Node, Edge } from "reactflow";

export const nodes: Node[] = [
  {
    id: "home",
    data: { label: "Home", level: 1 },
    position: { x: 0, y: 0 },
  },
  {
    id: "about",
    data: { label: "About", level: 2 },
    position: { x: 0, y: 0 },
  },
  {
    id: "services",
    data: { label: "Services", level: 2 },
    position: { x: 0, y: 0 },
  },
];

export const edges: Edge[] = [
  { id: "e1", source: "home", target: "about" },
  { id: "e2", source: "home", target: "services" },
];
