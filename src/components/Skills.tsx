'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const skills = [
  {
    category: 'Programming',
    icon: '💻',
    items: [
      { name: 'Python', icon: '/skills/python.svg' },
      { name: 'SQL', icon: '/skills/sql.svg' },
    ]
  },
  {
    category: 'Libraries',
    icon: '📚',
    items: [
      { name: 'Pandas', icon: '/skills/pandas.svg' },
      { name: 'NumPy', icon: '/skills/numpy.svg' },
      { name: 'Scikit-Learn', icon: '/skills/scikit.svg' },
      { name: 'Matplotlib', icon: '/skills/matplotlib.svg' },
      { name: 'Seaborn', icon: '/skills/seaborn.svg' },
      { name: 'TensorFlow', icon: '/skills/tensorflow.svg' },
      { name: 'PyTorch', icon: '/skills/pytorch.svg' },
      { name: 'Plotly', icon: '/skills/plotly.svg' },
    ]
  },
  {
    category: 'Technical Skills',
    icon: '⚙️',
    items: [
      { name: 'Machine Learning', icon: '/skills/ml.svg' },
      { name: 'Data Analysis', icon: '/skills/analysis.svg' },
      { name: 'Data Automation', icon: '/skills/automation.svg' },
      { name: 'Statistical Analysis', icon: '/skills/stats.svg' },
      { name: 'Data Visualization', icon: '/skills/visualization.svg' },
      { name: 'Data Cleaning', icon: '/skills/cleaning.svg' },
    ]
  },
  {
    category: 'Tools',
    icon: '🛠️',
    items: [
      { name: 'Power BI', icon: '/skills/powerbi.svg' },
      { name: 'Excel', icon: '/skills/excel.svg' },
      { name: 'Jupyter Notebook', icon: '/skills/jupyter.svg' },
      { name: 'Git', icon: '/skills/git.svg' },
      { name: 'MySQL', icon: '/skills/mysql.svg' },
      { name: 'PostgreSQL', icon: '/skills/postgresql.svg' },
    ]
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/simple-shiny.svg')] bg-center opacity-60" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6 space-x-3">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium inline-flex items-center gap-1.5 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-4 h-4 object-contain"
                    />
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
