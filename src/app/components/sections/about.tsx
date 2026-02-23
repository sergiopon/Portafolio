import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const features = [
    "Énfasis en Ingeniería de Datos",
    "Lógica Matemática Sólida",
    "Acreditación Internacional en CS",
    "Desarrollo Fullstack",
  ];

  return (
    <section id="about" className="py-20 bg-neutral-50 dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="../../public/images/imgSergio.jpg"
                alt="Imagen de sergio Ponce sosteniendo un celular"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-neutral-100 dark:bg-neutral-900 rounded-full blur-3xl -z-10" />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre Mí
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
              Soy Sergio Ponce Asprilla, estudiante de Ingeniería de Sistemas y Computación en la <span className="font-semibold text-neutral-900 dark:text-white">Pontificia Universidad Javeriana Cali</span>.
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
              Mi carrera tiene un énfasis especializado en <span className="font-semibold text-neutral-900 dark:text-white">Ingeniería de Datos</span> y cuenta con una certificación internacional en <span className="font-semibold text-neutral-900 dark:text-white">Ciencias de la Computación</span>. 
              Gracias a mi formación, poseo una fuerte lógica matemática que aplico para resolver problemas complejos de programación en C++, Python y desarrollo web.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
