"use client";

import { useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  type Node,
  type Edge,
} from "reactflow";
import "reactflow/dist/style.css";

import {
  nodes as initialNodes,
  edges as initialEdges,
} from "../data/initialData";
import { getLayoutedElements } from "../utils/dagreLayout";

import AddPagePanel from "./AddPagePanel";
import DeletePagePanel from "./DeletePagePanel";

export default function FlowChart() {
  // 🔹 Main hierarchy state
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  // 🔹 Auto layout
  const { nodes: layoutedNodes, edges: layoutedEdges } =
    getLayoutedElements([...nodes], [...edges]);

  // 🔹 Styling nodes (Home highlighted)
  const styledNodes: Node[] = layoutedNodes.map((node) => ({
    ...node,
    style: {
      border:
        node.data?.level === 1
          ? "2px solid #2563eb"
          : "1px solid #444",
      background:
        node.data?.level === 1
          ? "#e0e7ff"
          : "#ffffff",
      fontWeight:
        node.data?.level === 1 ? "bold" : "normal",
      padding: 10,
      borderRadius: 6,
    },
  }));

  return (
    <div className="space-y-4">
      {/* 🔹 ADD PAGE UI */}
      <AddPagePanel
        nodes={nodes}
        setNodes={setNodes}
        edges={edges}
        setEdges={setEdges}
      />

      {/* 🔹 DELETE PAGE UI */}
      <DeletePagePanel
        nodes={nodes}
        setNodes={setNodes}
        edges={edges}
        setEdges={setEdges}
      />

      {/* 🔹 PAGE HIERARCHY GRAPH */}
      <div className="h-[500px] border rounded-lg bg-white">
        <ReactFlow
          nodes={styledNodes}
          edges={layoutedEdges}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}
