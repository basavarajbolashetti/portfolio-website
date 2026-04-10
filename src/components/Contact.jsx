import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhone className="text-blue-600 dark:text-blue-400 text-xl" />,
      label: 'Phone',
      value: '+91 7892601698',
      href: 'tel:+917892601698'
    },
    {
      icon: <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />,
      label: 'Email',
      value: 'bolshettibasavaraj@gmail.com',
      href: 'mailto:bolshettibasavaraj@gmail.com'
    },
    {
      icon: <FaLinkedin className="text-blue-600 dark:text-blue-400 text-xl" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/basavaraj',
      href: 'https://linkedin.com/in/basavaraj'
    },
    {
      icon: <FaGithub className="text-blue-600 dark:text-blue-400 text-xl" />,
      label: 'GitHub',
      value: 'github.com/basavaraj',
      href: 'https://github.com/basavaraj'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Contact Me
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : '_self'}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-300 hover:shadow-md cursor-pointer group"
              >
                <div className="text-2xl mr-4 group-hover:scale-125 transition duration-300">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{info.label}</p>
                  <p className="text-gray-700 dark:text-gray-200 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <a
              href="#"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition duration-300"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;