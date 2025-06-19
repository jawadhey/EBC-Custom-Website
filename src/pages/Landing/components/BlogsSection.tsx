import React from 'react';
import Container from '../../../components/Container';
import { Images } from '../../../assets/images';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const blogs = [
  {
    title: 'How to Choose the Right University Abroad',
    image: Images.Landing.Hero1,
    description: 'A step-by-step guide to help you select the best university for your goals, budget, and interests when studying overseas.',
    link: '/blog/choose-university',
  },
  {
    title: 'Visa Application Tips for International Students',
    image: Images.Landing.Hero2,
    description: 'Essential tips and common mistakes to avoid when applying for a student visa for your dream destination.',
    link: '/blog/visa-tips',
  },
  {
    title: 'Student Life: What to Expect When You Arrive',
    image: Images.Landing.Hero3,
    description: 'Get a glimpse of what student life is like abroad, from academics to making friends and exploring a new culture.',
    link: '/blog/student-life',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const headingVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const BlogsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="py-12 bg-gray-50" ref={ref}>
      <Container>
        <motion.div
          className="mx-auto"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8"
            variants={headingVariants}
          >
            Latest from Our Blog
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {blogs.map((blog, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
                variants={cardVariants}
                custom={idx}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                  boxShadow: '0 10px 20px -5px rgba(124, 58, 237, 0.08)',
                  transition: { duration: 0.3 },
                }}
              >
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">{blog.title}</h3>
                  <p className="text-gray-500 text-sm flex-1">{blog.description}</p>
                  <a
                    href={blog.link}
                    className="mt-4 inline-block bg-TwPrimaryPurple text-white px-4 py-2 rounded hover:bg-TwPrimaryPurpleBgHover transition-colors text-sm font-medium text-center"
                  >
                    Read More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default BlogsSection; 