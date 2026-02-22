import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-neutral-500 dark:text-neutral-400 mb-4">
            Hola, soy <span className="text-neutral-900 dark:text-white font-bold">Sergio Ponce Asprilla</span>
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
            Programador <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Fullstack</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-10 leading-relaxed">
            Estudiante de Ingeniería de Sistemas y Computación con énfasis en Ingeniería de Datos.
            Transformo lógica matemática en código eficiente.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-lg flex items-center gap-2 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
              Ver Proyectos <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="/cv.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border-2 border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white font-medium text-lg flex items-center gap-2 hover:border-neutral-900 dark:hover:border-white transition-colors"
            >
              Descargar CV <Download className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-neutral-400 dark:border-neutral-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
