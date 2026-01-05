"use client";

import { useState } from "react";
import { saveToStorage, loadFromStorage } from "../utils/storage";

export default function ControlPanel() {
  const [text, setText] = useState("");
  const [history, setHistory] = useState<any[]>([]);

  // Save new data
  function handleSave() {
    if (!text.trim()) {
      alert("Please enter some data");
      return;
    }

    const newData = {
      message: text,
      savedAt: new Date().toLocaleString(),
    };

    saveToStorage(newData);
    alert("New data saved successfully");
    setText("");
  }

  // Show all saved data
  function handleShowAll() {
    const data = loadFromStorage();
    if (!data || data.length === 0) {
      alert("No saved data found");
      return;
    }
    setHistory(data);
  }

  // Clear all data
  function handleClearAll() {
    localStorage.removeItem("page_hierarchy_history");
    setHistory([]);
    alert("All saved data cleared");
  }

  return (
    <div className="mb-6">
      {/* Input + Buttons */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter new data"
          className="border px-3 py-1.5 rounded text-black bg-white"
        />

        <button
          onClick={handleSave}
          className="px-3 py-1.5 bg-black text-white rounded"
        >
          Save
        </button>

        <button
          onClick={handleShowAll}
          className="px-3 py-1.5 bg-blue-600 text-white rounded"
        >
          Show All Data
        </button>

        <button
          onClick={handleClearAll}
          className="px-3 py-1.5 bg-red-600 text-white rounded"
        >
          Clear All
        </button>
      </div>

      {/* Saved Data List */}
      {history.length > 0 && (
        <div className="border rounded-lg p-4 bg-white text-gray-900 shadow">
          <h3 className="font-semibold mb-3 text-black">
            Saved Data List
          </h3>

          <ul className="space-y-2 text-sm">
            {history.map((item, index) => (
              <li
                key={index}
                className="border-b pb-2 last:border-b-0 text-black"
              >
                <strong>
                  {index + 1 === 1
                    ? "First"
                    : index + 1 === 2
                    ? "Second"
                    : index + 1 === 3
                    ? "Third"
                    : `${index + 1}th`}
                  :
                </strong>{" "}
                {item.message}
                <span className="text-gray-600">
                  {" "}({item.savedAt})
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
