"use client";

import type { Node, Edge } from "reactflow";

interface Props {
  nodes: Node[];
  setNodes: (nodes: Node[]) => void;
  edges: Edge[];
  setEdges: (edges: Edge[]) => void;
}

export default function DeletePagePanel({
  nodes,
  setNodes,
  edges,
  setEdges,
}: Props) {
  function handleDelete(id: string) {
    if (id === "home") {
      alert("Home page cannot be deleted");
      return;
    }

    const confirmDelete = confirm(
      "Are you sure you want to delete this page?"
    );
    if (!confirmDelete) return;

    // Remove node
    const updatedNodes = nodes.filter((n) => n.id !== id);

    // Remove related edges
    const updatedEdges = edges.filter(
      (e) => e.source !== id && e.target !== id
    );

    setNodes(updatedNodes);
    setEdges(updatedEdges);
  }

  return (
    <div className="border rounded p-4 bg-white text-black mb-4">
      <h3 className="font-semibold mb-3">Delete Page</h3>

      <div className="space-y-2">
        {nodes.map((node) => (
          <div
            key={node.id}
            className="flex items-center justify-between border p-2 rounded"
          >
            <span>{node.data?.label}</span>

            <button
              onClick={() => handleDelete(node.id)}
              className="px-2 py-1 bg-red-600 text-white rounded text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
