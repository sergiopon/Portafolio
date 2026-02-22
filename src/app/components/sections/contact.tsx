import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    toast.success("Mensaje enviado correctamente. ¡Gracias por contactarme!");
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hablemos</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Me encantaría escucharlo!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Email</h3>
                <p className="text-neutral-600 dark:text-neutral-400">sergioponceasprilla@hotmail.com</p>
              </div>
            </div>
            
             <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg text-purple-600 dark:text-purple-300">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Teléfono</h3>
                <p className="text-neutral-600 dark:text-neutral-400">+57 3133772668</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg text-green-600 dark:text-green-300">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Ubicación</h3>
                <p className="text-neutral-600 dark:text-neutral-400">Cali, Colombia</p>
                <p className="text-sm text-neutral-500 mt-1">Disponible para trabajo remoto</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                Nombre
              </label>
              <input
                id="name"
                {...register("name", { required: "El nombre es requerido" })}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-neutral-900 dark:text-white"
                placeholder="Tu nombre"
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { 
                  required: "El email es requerido",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido"
                  }
                })}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-neutral-900 dark:text-white"
                placeholder="tu@email.com"
              />
               {errors.email && (
                <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message", { required: "El mensaje es requerido" })}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none text-neutral-900 dark:text-white"
                placeholder="Cuéntame sobre tu proyecto..."
              />
               {errors.message && (
                <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 text-lg font-medium bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors rounded-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Enviando..." : (
                <>
                  Enviar Mensaje <Send className="w-5 h-5" />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
