import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import { Images } from '../../assets/images';
import { motion } from 'motion/react';

const blogData = {
  'choose-university': {
    title: 'How to Choose the Right University Abroad',
    image: Images.Landing.Hero1,
    content: `Selecting the right university is a crucial step in your study abroad journey. Consider factors such as accreditation, location, tuition fees, available programs, and campus life. Research thoroughly, consult with education experts, and make a list of your priorities to find the best fit for your goals.`,
  },
  'visa-tips': {
    title: 'Visa Application Tips for International Students',
    image: Images.Landing.Hero2,
    content: `Applying for a student visa can be overwhelming. Start early, gather all required documents, and double-check your application for accuracy. Be honest in your interview, and seek guidance from your university or a trusted consultant to avoid common pitfalls.`,
  },
  'student-life': {
    title: 'Student Life: What to Expect When You Arrive',
    image: Images.Landing.Hero3,
    content: `Arriving in a new country is exciting! Expect a period of adjustment as you get used to new customs, food, and academic expectations. Join student groups, explore your city, and don't hesitate to ask for help. Embrace the experience and make the most of your time abroad!`,
  },
};

const SingleBlogPage = () => {
  const { id } = useParams();
  const blog = blogData[id as keyof typeof blogData];

  if (!blog) {
    return (
      <Container>
        <div className="py-20 text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Blog Not Found</h2>
          <p className="text-gray-500">The blog you are looking for does not exist.</p>
        </div>
      </Container>
    );
  }

  return (
    <div className="py-12 bg-white min-h-[60vh]">
      <Container>
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-xl mb-8" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
          <p className="text-gray-600 text-lg leading-relaxed">{blog.content}</p>
        </motion.div>
      </Container>
    </div>
  );
};

export default SingleBlogPage; 