'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SkillCardProps {
  name: string;
  icon: string;

  index: number;
}

export default function SkillCard({ name, icon, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative w-16 h-16 p-2 bg-white dark:bg-gray-700 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300">
          <Image
            src={icon}
            alt={name}
            fill
            className="object-contain p-2 filter group-hover:brightness-110 transition-all"
          />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {name}
        </h3>
      </div>
      <div className="absolute top-2 right-2">
        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}
