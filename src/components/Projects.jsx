import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Jewelry Shop Management System',
      description: 'Web-based system with admin and user roles. Features inventory management, sales tracking, and a chatbot for user queries.',
      technologies: ['Node.js', 'Express.js', 'MySQL', 'React'],
      github: '#',
      image: '💎'
    },
    {
      title: 'E-commerce Website',
      description: 'Full-stack app with authentication and cart system. Built REST APIs using Node.js (Express) with MySQL database integration and responsive React frontend.',
      technologies: ['Node.js', 'Express.js', 'MySQL', 'React', 'Authentication'],
      github: '#',
      image: '🛍️'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden hover:scale-105 transition duration-300">
                <span className="text-7xl">{project.image}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition duration-300">
                  <FaGithub className="mr-2" /> View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;