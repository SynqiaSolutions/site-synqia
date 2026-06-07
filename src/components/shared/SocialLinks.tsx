import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { companyData, type CompanySocial } from "@/data/companyData";
import { cn } from "@/lib/utils";

type SocialKey = keyof CompanySocial;

const socialConfig: Record<
  SocialKey,
  { icon: LucideIcon; name: string }
> = {
  instagram: { icon: Instagram, name: "Instagram" },
  youtube: { icon: Youtube, name: "YouTube" },
  facebook: { icon: Facebook, name: "Facebook" },
  linkedin: { icon: Linkedin, name: "LinkedIn" },
};

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  buttonClassName?: string;
  size?: "sm" | "md";
}

export default function SocialLinks({
  className,
  iconClassName,
  buttonClassName,
  size = "md",
}: SocialLinksProps) {
  const sizeClasses = size === "sm" ? "size-11" : "size-11";
  const iconSize = size === "sm" ? "size-4" : "size-5";

  const entries = (Object.keys(socialConfig) as SocialKey[]).filter(
    (key) => companyData.social[key]?.url
  );

  if (entries.length === 0) return null;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {entries.map((key) => {
        const social = companyData.social[key]!;
        const { icon: Icon, name } = socialConfig[key];

        return (
          <a
            key={key}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name}${social.label ? ` (${social.label})` : ""}`}
            className={cn(
              "inline-flex shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary",
              sizeClasses,
              buttonClassName
            )}
          >
            <Icon className={cn(iconSize, iconClassName)} aria-hidden />
          </a>
        );
      })}
    </div>
  );
}
