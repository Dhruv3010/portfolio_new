'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    company: 'Main Flow Services & Technologies',
    position: 'Data Science Intern',
    period: 'Jun–Aug 2024',
    description: [
      'Applied machine learning algorithms for data analysis and prediction',
      'Developed ETL pipelines for data processing',
      'Created interactive dashboards using Power BI',
      'Collaborated with cross-functional teams on data-driven projects'
    ]
  },
  {
    company: 'Curly Brackets',
    position: 'Database Intern',
    period: 'Dec 2024–Mar 2025',
    description: [
      'Performed Exploratory Data Analysis (EDA) on large datasets',
      'Optimized database queries for improved performance',
      'Implemented data validation processes',
      'Developed Python scripts for data automation tasks'
    ]
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-32"
            >
              <div className="flex flex-col sm:flex-row items-start mb-1">
                <div className="absolute left-0 sm:left-0 mt-1">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <FiBriefcase className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="sm:absolute sm:left-12 text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-0">
                  {exp.period}
                </div>
                <div className="sm:ml-32">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <div className="text-lg text-blue-600 dark:text-blue-500 mb-4">
                    {exp.company}
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-600 dark:text-gray-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < experiences.length - 1 && (
                <div className="absolute left-3 sm:left-3 top-0 h-full w-px bg-gray-200 dark:bg-gray-700"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
