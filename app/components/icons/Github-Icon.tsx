import { siGithub } from "simple-icons";

export default function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor" // This will allow you to set the color dynamically
      role="img"
      aria-label="GitHub icon">
      <title>GitHub</title>
      <path d={siGithub.path} />
    </svg>
  );
}
