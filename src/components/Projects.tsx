'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';
import { useState, useEffect} from 'react';

const projects = [
  {
    title: 'Driver Drowsiness Detection System',
    description: 'Built with OpenCV & Mediapipe, real-time alerts for blink/yawn detection.',
    tags: ['OpenCV', 'Mediapipe', 'Python', 'Machine Learning'],
    image: '/projects/drowsiness.jpg'
  },
  {
    title: 'Customer Segmentation for E-Commerce',
    description: 'K-Means clustering + Python visuals for marketing insights.',
    tags: ['Python', 'Scikit-Learn', 'K-Means', 'Data Visualization'],
    image: '/projects/segmentation.jpg'
  },
  {
    title: 'Sentiment Analysis for Product Reviews',
    description: 'NLP (NLTK/SpaCy + TensorFlow), Power BI dashboard for feedback tracking.',
    tags: ['NLP', 'TensorFlow', 'NLTK', 'Power BI'],
    image: '/projects/sentiment.jpg'
  },
  {
    title: 'Data Quality Assessment',
    description: 'SQL + Python automation, anomaly detection models, Power BI metrics.',
    tags: ['SQL', 'Python', 'Power BI', 'Automation'],
    image: '/projects/quality.jpg'
  },
  {
    title: 'Predictive Analytics for Asset Management',
    description: 'Time-series forecasting, maintenance prediction dashboards.',
    tags: ['Time Series', 'Python', 'Forecasting', 'Power BI'],
    image: '/projects/predictive.jpg'
  },
  {
    title: 'Power BI Dashboard for Accuracy Monitoring',
    description: 'Real-time ETL pipelines and KPIs on data health.',
    tags: ['Power BI', 'ETL', 'Data Pipeline', 'KPI'],
    image: '/projects/dashboard.jpg'
  }
];

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '300px 0px',
  });

    return (
    <section id="projects" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/simple-shiny.svg')] bg-center opacity-60" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: [0.48, 0.15, 0.25, 0.96]
              }}
              whileHover={{
                scale: 0.95,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-600 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJiEwLjYxLy0tLzE6PTVBNT47QTQ1RkU9TlRWV1VBRkhLUERDVkJWUFX/2wBDARUXFyAeIRohIUZFOjU6RVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  onLoadingComplete={() => setIsLoaded(true)}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end space-x-4">
                  <button className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
                    <FiGithub size={20} />
                  </button>
                  <button className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
                    <FiExternalLink size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
