import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

function CodeBlock({ children }) {
  const [copied, setCopied] = useState(false);

  // Convert children to string safely
  const codeText = typeof children === 'string' ? children : String(children);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className="relative my-4 rounded-lg overflow-hidden border border-gray-700 bg-[#1e293b]/90 shadow-inner">
      <button
        onClick={handleCopy}
        aria-label="Copy code to clipboard"
        className="absolute top-2 right-2 text-xs text-gray-300 hover:text-cyan-400 transition flex items-center space-x-1 bg-[#0f172a]/80 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
        type="button"
      >
        {copied ? (
          <>
            <Check size={14} />
            <span>Copied</span>
          </>
        ) : (
          <>
            <Copy size={14} />
            <span>Copy</span>
          </>
        )}
      </button>

      <pre className="p-4 overflow-x-auto text-green-300 text-sm">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export default CodeBlock;