import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showCopy?: boolean;
}

export const CodeBlock = ({
  code,
  language = "bash",
  className = "",
  showCopy = true,
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast({ title: "Copied to clipboard!" });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({ title: "Failed to copy", variant: "destructive" });
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <pre
        className="bg-gradient-code border border-border rounded-lg p-3 sm:p-4 overflow-x-auto cursor-pointer hover:bg-opacity-80 transition-colors"
        onClick={copyToClipboard}
      >
        <code className="text-foreground font-mono text-xs sm:text-sm leading-relaxed">
          {code}
        </code>
      </pre>
      {showCopy && (
        <Button
          variant="ghost"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            copyToClipboard();
          }}
          className="absolute top-1/2 -translate-y-1/2 right-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
        >
          {copied ? (
            <Check className="h-4 w-4 text-terminal" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      )}
    </div>
  );
};
