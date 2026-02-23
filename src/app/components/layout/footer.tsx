import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-black border-t border-neutral-200 dark:border-neutral-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a
            href="https://github.com/sergiopon"
            className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sergioponcea"
            className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:sergioponceasprilla@hotmail.com"
            className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          © {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
