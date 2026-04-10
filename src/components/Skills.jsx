import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <FaCode />,
      skills: ['JavaScript', 'Python', 'SQL']
    },
    {
      title: 'Frontend',
      icon: <FaCode />,
      skills: ['HTML', 'CSS', 'React.js']
    },
    {
      title: 'Backend',
      icon: <FaServer />,
      skills: ['Node.js (Express.js)', 'REST APIs']
    },
    {
      title: 'Frameworks/Libraries',
      icon: <FaTools />,
      skills: ['Spring Boot', 'Flask', 'Pandas', 'NumPy']
    },
    {
      title: 'Database',
      icon: <FaDatabase />,
      skills: ['MySQL']
    },
    {
      title: 'Tools',
      icon: <FaTools />,
      skills: ['Git', 'GitHub', 'VS Code', 'Eclipse']
    },
    {
      title: 'Concepts',
      icon: <FaCode />,
      skills: ['API integration', 'CRUD', 'HTTP/HTTPS', 'Database Design']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-600 dark:text-blue-400 text-2xl mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 dark:text-gray-300">
                    • {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;