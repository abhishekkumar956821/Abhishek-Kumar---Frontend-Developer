"use client";

import { useState } from "react";
import type { Node, Edge } from "reactflow";

interface Props {
  nodes: Node[];
  setNodes: (nodes: Node[]) => void;
  edges: Edge[];
  setEdges: (edges: Edge[]) => void;
}

export default function AddPagePanel({
  nodes,
  setNodes,
  edges,
  setEdges,
}: Props) {
  const [pageName, setPageName] = useState("");
  const [parentId, setParentId] = useState("home");

  function handleAddPage() {
    if (!pageName.trim()) {
      alert("Please enter page name");
      return;
    }

    const id = pageName.toLowerCase().replace(/\s+/g, "-");

    const newNode: Node = {
      id,
      data: { label: pageName, level: 2 },
      position: { x: 0, y: 0 },
    };

    const newEdge: Edge = {
      id: `e-${parentId}-${id}`,
      source: parentId,
      target: id,
    };

    setNodes([...nodes, newNode]);
    setEdges([...edges, newEdge]);

    setPageName("");
    alert("Page added successfully");
  }

  return (
    <div className="border rounded p-4 bg-white text-black mb-4">
      <h3 className="font-semibold mb-3">Add New Page</h3>

      <div className="flex gap-3 flex-wrap">
        <input
          value={pageName}
          onChange={(e) => setPageName(e.target.value)}
          placeholder="Page name (e.g. Blog)"
          className="border px-2 py-1 rounded"
        />

        <select
          value={parentId}
          onChange={(e) => setParentId(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          {nodes.map((node) => (
            <option key={node.id} value={node.id}>
              {node.data?.label}
            </option>
          ))}
        </select>

        <button
          onClick={handleAddPage}
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          Add Page
        </button>
      </div>
    </div>
  );
}
