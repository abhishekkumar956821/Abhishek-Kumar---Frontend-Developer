"use client";

import { useState } from "react";
import FlowChart from "@/components/FlowChart";
import HomeSections from "@/components/HomeSections";
import ControlPanel from "@/components/ControlPanel";
import PageDesignPanel from "@/components/PageDesignPanel";

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [theme, setTheme] = useState("light");

  return (
    <main
      className={`p-6 space-y-6 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {showHeader && (
        <header className="p-4 bg-blue-600 text-white rounded">
          Header (Navigation / Logo)
        </header>
      )}

      <h1 className="text-2xl font-bold">
        Visual Page Hierarchy Editor
      </h1>

      <PageDesignPanel
        showHeader={showHeader}
        setShowHeader={setShowHeader}
        showFooter={showFooter}
        setShowFooter={setShowFooter}
        theme={theme}
        setTheme={setTheme}
      />

      <ControlPanel />
      <FlowChart />

      <div>
        <h2 className="text-xl font-semibold mb-2">
          Home Page Sections (Order Editable)
        </h2>
        <HomeSections />
      </div>

      {showFooter && (
        <footer className="p-4 bg-gray-800 text-white rounded">
          Footer (Links / Copyright)
        </footer>
      )}
    </main>
  );
}
