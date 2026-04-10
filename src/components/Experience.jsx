import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'Varuna Power & Infra',
      description: 'Built web modules (housekeeping, travel desk, restaurant). Integrated REST APIs and MySQL. Improved performance and fixed bugs.',
      technologies: ['Node.js', 'Express.js', 'MySQL', 'REST APIs']
    },
    {
      title: 'SQL Intern',
      company: 'HUBBLEMIND',
      description: 'Wrote and optimized SQL queries. Data cleaning and processing. Worked with real-world datasets.',
      technologies: ['SQL', 'Data Cleaning', 'Query Optimization']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <FaBriefcase className="text-blue-600 dark:text-blue-400 text-2xl mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {exp.description}
              </p>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;