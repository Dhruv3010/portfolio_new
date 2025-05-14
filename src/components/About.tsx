'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert mx-auto"
        >
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Detail-oriented and aspiring Data Analyst & Data Scientist with experience in data validation, 
            machine learning, and real-time AI systems. Proficient in Python, SQL, and Power BI with a 
            strong foundation in statistical analysis, predictive modeling, and visualization.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            Adept at solving real-world business problems using data insights and automation. 
            Passionate about leveraging data to improve decision-making and efficiency.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
