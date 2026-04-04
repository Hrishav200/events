import { useState } from "react";
import Button from "../ui/button";
import { toast, Toaster } from "sonner";
import { CopyIcon, FacebookIcon, TwitterIcon, WhatsAppIcon } from "../ui/icon";

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
    <div className="flex flex-row gap-4 items-center justify-center bg-surface p-16 flex-wrap">
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
