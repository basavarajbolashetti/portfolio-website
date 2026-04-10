import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          <p className="mb-6">
            I am an MCA student with hands-on experience in backend and web development using Node.js and MySQL. I specialize in building REST APIs, integrating systems, and working with real-world data.
          </p>
          <p className="mb-6">
            I also have a strong interest in cybersecurity, including secure application development and threat-aware systems. I am looking to contribute to scalable backend solutions in a fast-paced environment.
          </p>
          <p>
            Passionate about backend development and cybersecurity, I hold an MCA degree and continuously explore new technologies to enhance my skills in creating robust and secure applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;