"use client";

import { useState } from "react";
import { Copy, Check, Loader2 } from "lucide-react";
import { getTemplateSource } from "@/app/template/actions";

export function CopyCodeButton({ filename, className = "" }: { filename: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopy = async () => {
    if (loading || !filename) return;
    setLoading(true);
    try {
      const code = await getTemplateSource(filename);
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
      alert("Gagal menyalin source code.");
    } finally {
      setLoading(false);
    }
  };

  if (!filename) return null;

  return (
    <button 
      onClick={handleCopy}
      disabled={loading}
      className={`flex items-center gap-2 px-4 py-2 bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/10 transition-all rounded-lg text-sm font-medium text-white shadow-lg focus:outline-hidden focus:ring-2 focus:ring-primary/50 ${className}`}
      title={`Copy source code for ${filename}`}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : copied ? (
        <Check className="w-4 h-4 text-green-400" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
      {copied ? "Copied!" : filename}
    </button>
  );
}
