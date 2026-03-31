import { useState } from "react";
import Button from "../ui/button";
import { toast, Toaster } from "sonner";

const shareUrl = encodeURIComponent(window.location.href);
const shareText = encodeURIComponent(
  "🎶 The Encore — Melbourne's multi-genre music night! 25 April 2025, 6PM–11PM at Glenroy Billiards & Bar. Come through!",
);

const ShareLinks = [
  {
    variant: "amber",
    label: "WhatsApp",
    icon: <WhatsAppIcon color="#25d366" />,
    href: `https://wa.me/?text=${shareText}%20${shareUrl}`,
  },
  {
    variant: "blue",
    label: "Facebook",
    icon: <FacebookIcon color="#4a90d9" />,
    href: "https://www.facebook.com/sharer/sharer.php?u=${shareUrl}",
  },
  {
    variant: "offwhite",
    label: "X/Twitter",
    icon: <TwitterIcon color="#f0ebe3" />,
    href: "https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}",
  },
];

export default function ShareSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      setCopied(true);
      await navigator.clipboard.writeText(window.location.href);
      setTimeout(() => {
        setCopied(false);
        toast.success("Copied to clipboard");
      }, 2000);
    } catch (error) {
      console.error("Failed to copy link", error);
    }
  };

  return (
    <div className="flex flex-row gap-4 items-center justify-center bg-surface p-16">
      <span className="text-muted uppercase tracking-[0.2em] leading-none text-sm">
        Share the night →
      </span>
      {ShareLinks.map((link) => (
        <Button
          as="a"
          size="sm"
          color={
            link.variant as
              | "amber"
              | "hot"
              | "teal"
              | "blue"
              | "offwhite"
              | "muted"
          }
          variant="outline"
          startContent={link.icon}
          label={link.label}
          href={link.href}
        />
      ))}

      <Button
        onClick={handleCopy}
        disabled={copied}
        size="sm"
        color="muted"
        variant="outline"
        startContent={<CopyIcon color="#7a7167" />}
        label="Copy Link"
      />
      <Toaster />
    </div>
  );
}

export function WhatsAppIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.838.497 3.562 1.363 5.048L2 22l5.09-1.342A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  );
}

export function CopyIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={color}>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

export function TwitterIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={color}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function FacebookIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={color}>
      <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}
