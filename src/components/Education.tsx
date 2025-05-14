'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBookOpen, FiAward } from 'react-icons/fi';

const education = [
  {
    degree: 'B.Tech – Computer Science',
    institution: 'Parul University',
    period: '2021–2025',
    grade: 'CGPA: 7.61'
  },
  {
    degree: '12th – GSEB',
    institution: 'Alembic Vidyalaya',
    period: '2021',
    grade: 'Percentage: 80.76%'
  }
];

const certifications = [
  {
    title: 'Data Science with Python',
    issuer: 'Parul University'
  },
  {
    title: 'Data Analytics with Python',
    issuer: 'NPTEL'
  },
  {
    title: 'Data Visualization with Power BI',
    issuer: 'Great Learning'
  }
];

const publications = [
  {
    title: 'Automating Customer Inquiries in Vehicle Showrooms Using a WhatsApp Chatbot',
    journal: 'IJIRSET',
    date: 'March 2025'
  }
];

export default function Education() {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [certRef, certInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [pubRef, pubInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/simple-shiny.svg')] bg-center opacity-60" />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <FiBookOpen className="mr-2" />
              Academic Background
            </h3>
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h4>
                <p className="text-blue-600 dark:text-blue-400">{edu.institution}</p>
                <div className="flex justify-between mt-2 text-gray-600 dark:text-gray-300">
                  <span>{edu.period}</span>
                  <span>{edu.grade}</span>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="space-y-8">
            {/* Certifications Section */}
            <motion.div
              ref={certRef}
              initial={{ opacity: 0, y: 20 }}
              animate={certInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <FiAward className="mr-2" />
                Certifications
              </h3>
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                <ul className="space-y-4">
                  {certifications.map((cert) => (
                    <li key={cert.title} className="flex justify-between items-center">
                      <span className="text-gray-900 dark:text-white font-medium">
                        {cert.title}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {cert.issuer}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Publications Section */}
            <motion.div
              ref={pubRef}
              initial={{ opacity: 0, y: 20 }}
              animate={pubInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <FiBookOpen className="mr-2" />
                Publications
              </h3>
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                {publications.map((pub) => (
                  <div key={pub.title}>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      {pub.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Published in {pub.journal}, {pub.date}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
