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
    <nav className="flex items-center gap-3">
      {socials.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          data-testid="lateralElements"
          className="flex size-11 items-center justify-center rounded-lg bg-panel text-primary-light shadow transition-colors hover:bg-primary hover:text-white"
        >
          <Icon size={size} />
        </a>
      ))}
    </nav>
  );
}
