import Image from "next/image";
import logo from "../images/logo.webp";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export default function Logo({ className = "h-10", priority = false }: LogoProps) {
  return (
    <Image
      src={logo}
      alt="Sukh"
      className={`w-auto object-contain dark:mix-blend-screen ${className}`}
      priority={priority}
    />
  );
}
