import { TrackedAnchor } from "./tracked-link";
import { FaInstagram } from "react-icons/fa";
import { FiGithub, FiGitlab, FiLinkedin } from "react-icons/fi";

const socials = [
  { href: "https://github.com/quintansc", label: "GitHub", Icon: FiGithub },
  { href: "https://gitlab.com/QuintansC", label: "GitLab", Icon: FiGitlab },
  {
    href: "https://www.instagram.com/quintansdev/",
    label: "Instagram",
    Icon: FaInstagram,
  },
  {
    href: "https://www.linkedin.com/in/gustavo-quintans-59206242/",
    label: "LinkedIn",
    Icon: FiLinkedin,
  },
];

export default function SocialLinks({ size = 20 }: { size?: number }) {
  return (
    <nav aria-label="Redes sociais" className="flex items-center gap-3">
      {socials.map(({ href, label, Icon }) => (
        <TrackedAnchor
          key={href}
          analyticsEvent={{ name: "social_click", properties: { network: label } }}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          data-testid="lateralElements"
          className="flex size-11 items-center justify-center rounded-lg border border-edge bg-transparent text-muted transition-colors hover:border-accent/40 hover:bg-panel hover:text-accent"
        >
          <Icon size={size} />
        </TrackedAnchor>
      ))}
    </nav>
  );
}
