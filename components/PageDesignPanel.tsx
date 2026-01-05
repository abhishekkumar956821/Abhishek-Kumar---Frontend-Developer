"use client";

interface Props {
  showHeader: boolean;
  setShowHeader: (v: boolean) => void;
  showFooter: boolean;
  setShowFooter: (v: boolean) => void;
  theme: string;
  setTheme: (v: string) => void;
}

export default function PageDesignPanel({
  showHeader,
  setShowHeader,
  showFooter,
  setShowFooter,
  theme,
  setTheme,
}: Props) {
  return (
    <div className="border rounded p-4 bg-white text-black mb-6">
      <h3 className="font-semibold mb-3">Page Design Options</h3>

      <div className="flex flex-wrap gap-6 items-center">
        {/* Header toggle */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showHeader}
            onChange={(e) => setShowHeader(e.target.checked)}
          />
          Show Header
        </label>

        {/* Footer toggle */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showFooter}
            onChange={(e) => setShowFooter(e.target.checked)}
          />
          Show Footer
        </label>

        {/* Theme select */}
        <div className="flex items-center gap-2">
          <span>Theme:</span>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    </div>
  );
}
