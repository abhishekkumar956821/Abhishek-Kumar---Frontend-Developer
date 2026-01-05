import dagre from "dagre";
import type { Node, Edge } from "reactflow";

export function getLayoutedElements(nodes: Node[], edges: Edge[]) {
  const graph = new dagre.graphlib.Graph();
  graph.setDefaultEdgeLabel(() => ({}));
  graph.setGraph({ rankdir: "TB" });

  nodes.forEach((node) => {
    graph.setNode(node.id, { width: 180, height: 60 });
  });

  edges.forEach((edge) => {
    graph.setEdge(edge.source, edge.target);
  });

  dagre.layout(graph);

  const layoutedNodes = nodes.map((node) => {
    const pos = graph.node(node.id);
    return {
      ...node,
      position: {
        x: pos.x - 90,
        y: pos.y - 30,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
}
