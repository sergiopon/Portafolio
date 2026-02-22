import { motion } from "motion/react";
import { Code2, Database, Layout, Terminal, Server, Globe } from "lucide-react";

const skills = [
  {
    category: "Lenguajes & Lógica",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Python", "C++", "C", "Lógica Matemática", "TypeScript", "JavaScript"],
  },
  {
    category: "Data Science & Backend",
    icon: <Database className="w-6 h-6" />,
    items: ["Data Engineering", "Pandas", "NumPy", "SQL", "Node.js", "PostgreSQL"],
  },
  {
    category: "Frontend & Herramientas",
    icon: <Layout className="w-6 h-6" />,
    items: ["React", "Tailwind CSS", "Git", "Docker", "Next.js", "Figma"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Habilidades Técnicas</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Un conjunto de herramientas moderno para construir soluciones robustas y escalables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center mb-6 mx-auto">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-6 text-center">{skill.category}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
