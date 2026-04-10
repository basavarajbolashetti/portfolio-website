import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: 'Introduction to Artificial Intelligence',
      issuer: 'IBM'
    },
    {
      title: 'Data Analytics Simulation',
      issuer: 'Deloitte'
    },
    {
      title: 'Privacy and Security in Online Social Media',
      issuer: 'VTU'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
            >
              <FaCertificate className="text-blue-600 dark:text-blue-400 text-4xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                {cert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;