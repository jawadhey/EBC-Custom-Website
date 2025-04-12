import uni1 from '../assets/universities/uni1/hero.jpg'
import uni2 from '../assets/universities/uni2/hero.jpg'
import uni3 from '../assets/universities/uni3/hero.jpg'
import uni4 from '../assets/universities/uni4/hero.jpg'
import uni5 from '../assets/universities/uni5/hero.png'


export const headerMenuItems = [
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "About Us",
    url: "/about-us",
  },
  {
    title: "Chatbot",
    url: "/chatbot",
  },
]

export const universities: any = [
  {
    id: 1,
    name: "Nakhchivan State University (NSU)",
    description: "Start Your Journey with Nakhchivan State University",
    location: "Nakhchivan, Azerbaijan",
    established: 1967,
    heroImage: uni1,
    stats: [
      {
        title: <strong>20+</strong>,
        subtitle: "Academic Programs",
        description: "Undergraduate and Postgraduate programs.",
      },
      {
        title: <strong>1,200+</strong>,
        subtitle: "International Students",
        description: "Global learning environment.",
      },
      {
        title: <strong>100%</strong>,
        subtitle: "MBBS Enrollment Support",
        description: "Complete assistance.",
      },
    ],
    programs: [
      {
        title: <strong>MBBS (Bachelor of Medicine, Bachelor of Surgery)</strong>,
        description: (
          <>
            The <strong>MBBS program</strong> at <strong>Nakhchivan University</strong> is designed for students beginning their
            journey into the world of medicine. This 5-year program combines <strong>theoretical learning</strong> with{" "}
            <strong>practical clinical training</strong>, preparing students to become competent, confident, and compassionate
            doctors. The curriculum follows <strong>international standards</strong> and is recognized by{" "}
            <strong>WHO and PMC</strong>, making graduates eligible for further licensing exams worldwide.
          </>
        ),
      },
      {
        title: <strong>MD (Doctor of Medicine)</strong>,
        description: (
          <>
            The <strong>MD program</strong> is a postgraduate-level degree focused on{" "}
            <strong>advanced clinical and research-based medical education</strong>. Ideal for students who have already completed
            a medical undergraduate degree, this program dives deeper into specialized medical fields, offering hands-on
            experience, modern laboratories, and expert mentorship. The MD degree from <strong>Nakhchivan University</strong> opens
            doors to <strong>global medical careers and further specialization</strong>.
          </>
        ),
      },
    ],
    about: {
      title: (<>
        <p>
          <strong>Discover World-Class Medical Education at Nakhchivan State University in Azerbaijan</strong>
        </p>
      </>),
      content: (
        <>
          <p>
            Nakhchivan State University (NSU), established in 1967, is a leading public university located in Nakhchivan, Azerbaijan,
            known for its commitment to academic excellence and international education standards. With a wide range of faculties
            including Medicine, Engineering, Economics, Law, and Humanities, NSU offers diverse academic opportunities for students
            around the globe.
          </p>
          <p>
            The university’s MD/MBBS program, taught entirely in English, is especially popular among international students aspiring
            to pursue medical education in Azerbaijan. By offering programs in English, NSU creates an inclusive environment for
            students from various linguistic and cultural backgrounds.
          </p>
          <p>
            Admission requirements for international applicants are straightforward, requiring essential academic documents and proof
            of English proficiency. With its strong reputation, modern facilities, and supportive campus life, NSU stands out as a top
            choice for students looking to study MBBS or MD in Azerbaijan.
          </p>
        </>
      ),
    },

    benefits: {
      title: 'Experience the true power of international education—gain global exposure, build a diverse network, enhance your career prospects, and grow personally and professionally in ways that go beyond the classroom.',
      content: [
        {
          title: "Global Exposure & Growth",
          description: "Experience the true power of international education—gain global exposure, build a diverse network, enhance your career prospects, and grow personally and professionally in ways that go beyond the classroom.",
        },
        {
          title: "Globally Recognized Degrees",
          description: "Degrees from NSU are recognized by major medical councils, including WHO and PMC, opening doors to global career opportunities.",
        },
        {
          title: "English-Taught MD/MBBS Programs",
          description: "The MD/MBBS programs are taught entirely in English, making it easier for international students to learn without language barriers.",
        },
        {
          title: "Diverse International Community",
          description: "Join a multicultural student body with peers from countries like Pakistan, India, Bangladesh, and more—building global friendships and networks.",
        },
        {
          title: "Affordable Tuition & Living Costs",
          description: "Studying at NSU through EBC means access to budget-friendly tuition fees and low-cost living in Azerbaijan.",
        },
        {
          title: "Full Admission & Visa Support",
          description: "EBC provides complete assistance with the admission process, documentation, and visa application, ensuring a stress-free experience.",
        },
        {
          title: "Modern Facilities & Clinical Training",
          description: "Students benefit from advanced labs, teaching hospitals, and hands-on clinical experience from the early years of study.",
        },
        {
          title: "High Student Success Rate",
          description: "NSU has a proven track record of helping students successfully complete their programs and pass international licensing exams.",
        },
        {
          title: "Personalized Counseling with EBC",
          description: "With EBC’s expert guidance, students get tailored university recommendations, career advice, and ongoing support throughout their academic journey.",
        },
      ],
    },

    faqs: {
      title: "Everything You Need to Know About Nakhchivan State University (NSU) ",
      description: "Find answers to common questions about programs, admissions, fees, and life at NSU.",
      content: [
        {
          id: 1,
          question: "What is Nakhchivan State University (NSU) known for?",
          answer:
            "NSU is known for offering high-quality education across multiple disciplines, especially its MD/MBBS program, which is taught in English and is affordable for international students.",
        },
        {
          id: 2,
          question: "What is the duration of the MD/MBBS program at NSU?",
          answer:
            "The MD/MBBS program lasts for 6 years and includes an internship, combining both theoretical knowledge and practical experience.",
        },
        {
          id: 3,
          question: "How can I apply for the MD/MBBS program at NSU?",
          answer:
            "Submit documents like SSC and HSSC mark sheets, passport, English proficiency certificate, and other required documents. Online interviews may be conducted for students from visa-required countries.",
        },
        {
          id: 4,
          question: "What are the eligibility criteria for the MD/MBBS program?",
          answer:
            "You need at least 50% in your Higher Secondary School Certificate or equivalent, and should be between 16 to 30 years old.",
        },
        {
          id: 5,
          question: "What is the tuition fee for the MD/MBBS program?",
          answer:
            "USD 4,050 for the first semester, followed by USD 1,950 for each semester from 2nd through 12th. Miscellaneous expenses are not included.",
        },
        {
          id: 6,
          question: "Is the program taught in English?",
          answer: "Yes, the entire MD/MBBS program at NSU is taught in English.",
        },
        {
          id: 7,
          question: "Does NSU provide accommodation for international students?",
          answer:
            "Yes, with separate dormitory sections for males and females, equipped with essential amenities like kitchens, bathrooms, and recreational spaces.",
        },
        {
          id: 8,
          question: "Why choose NSU for medical studies?",
          answer:
            "NSU offers affordable education, a multicultural environment, modern facilities, and degrees recognized by international medical bodies like PMDC and ECFMG.",
        },
      ],
    }
  },
  {
    id: 2,
    name: "North China University of Science & Technology (NCUST)",
    description: "A Leading Destination for International Medical Students",
    location: "Tangshan, Hebei Province, China",
    established: 1926,
    heroImage: uni2, // Replace with actual image URL
    stats: [
      {
        title: <strong>20+</strong>,
        subtitle: "Academic Programs",
        description: "Undergraduate and Postgraduate programs.",
      },
      {
        title: <strong>1,200+</strong>,
        subtitle: "International Students",
        description: "Global learning environment.",
      },
      {
        title: <strong>100%</strong>,
        subtitle: "MBBS Enrollment Support",
        description: "Complete assistance.",
      },
    ],
    programs: [
      {
        title: <strong>Clinical Medicine (MD/MBBS)</strong>,
        description: (
          <>
            The <strong>Clinical Medicine program</strong> at <strong>NCUST</strong> is taught in English and designed to equip students with in-depth medical knowledge and practical skills. This <strong>6-year program</strong> includes one year of internship and is recognized by <strong>PMDC and ECFMG</strong>, ensuring international credibility and opportunities for global practice.
          </>
        ),
      },
      {
        title: <strong>Bachelor's Degree Programs</strong>,
        description: (
          <>
            NCUST offers a wide range of bachelor's programs across multiple disciplines such as <strong>Engineering, Law, Economics, Management, Sciences, and Humanities</strong>. These programs are aimed at developing critical thinking, research capabilities, and professional competence in a global academic environment.
          </>
        ),
      },
      {
        title: <strong>Master's Degree Programs</strong>,
        description: (
          <>
            Master's degree programs at NCUST provide advanced academic training in fields like <strong>Engineering, Economics, Education, and more</strong>. These programs focus on specialized knowledge and practical skills, preparing students for leadership roles or further academic research.
          </>
        ),
      },
      {
        title: <strong>Doctoral Programs</strong>,
        description: (
          <>
            NCUST's <strong>PhD programs</strong> are ideal for students aiming to engage in high-level research and innovation. With access to expert faculty and research resources, these programs foster academic excellence and contribute to global knowledge development in various scientific and professional fields.
          </>
        ),
      },
      {
        title: <strong>Professional Training Programs</strong>,
        description: (
          <>
            In addition to degree programs, NCUST offers <strong>specialized professional training programs</strong> aimed at enhancing job-ready skills. These programs are tailored to meet industry needs, helping students gain certifications and practical experience in areas like engineering, healthcare, and management.
          </>
        ),
      },
    ],
    about: {
      title: (<>
        <p>
          <strong>Discover North China University of Science and Technology – A Leading Destination for International Medical Students</strong>
        </p>
      </>),
      content: (
        <>
          <p>
            Located in the heart of Tangshan, Hebei Province, North China University of Science and Technology (NCUST) is a prestigious public university with nearly a century of academic excellence. Established in 1926, NCUST has become a top choice for students from around the world, especially those who want to pursue MBBS in China in a supportive, international environment.
          </p>
          <p>
            With a beautiful campus spread over 745 acres, the university is home to over 48,000 students, including 400+ international students. NCUST offers a variety of academic programs in English, making it easier for international students to settle in and succeed. One of the most popular programs among international students is Clinical Medicine (MBBS), which is taught entirely in English and includes one year of hands-on internship.
          </p>
          <p>
            NCUST is officially recognized by PMDC and ECFMG, ensuring that medical degrees earned here are accepted globally. Students benefit from modern classrooms, advanced medical labs, and well-equipped hostels – all designed to create a comfortable and focused learning environment.
          </p>
          <p>
            Through its exclusive partnership with EBC Worldwide, the admission process is made smooth and stress-free. From document preparation to visa assistance and pre-departure support, students are guided at every step of their journey.
          </p>
          <p>
            Whether you're looking for affordable tuition, high-quality education, or an international learning experience, NCUST provides everything you need to succeed as a future medical professional.
          </p>
        </>
      ),
    },
    benefits: {
      title: 'Unlocking a world of opportunity, international education offers more than just a degree — it\'s a gateway to personal growth, career advancement, and cultural understanding.',
      content: [
        {
          title: "Global Exposure",
          description: "Gain firsthand experience in a new culture, environment, and education system, giving you a broader perspective on life and learning.",
        },
        {
          title: "Language and Communication Skills",
          description: "Studying in an English-speaking or bilingual environment helps improve your language skills and confidence in communicating with people from diverse backgrounds.",
        },
        {
          title: "Practical Medical Training",
          description: "For MBBS students, studying abroad often means access to top-notch hospitals and hands-on clinical experience that prepares you for real-world healthcare settings.",
        },
        {
          title: "International Recognition",
          description: "Degrees from internationally recognized universities like NCUST are widely accepted, increasing your chances of working or pursuing further education anywhere in the world.",
        },
        {
          title: "Better Career Opportunities",
          description: "Employers value candidates with international experience, as it shows adaptability, independence, and a strong understanding of global practices.",
        },
        {
          title: "Cultural Diversity",
          description: "Interact with peers from all over the world, broadening your understanding of different cultures and building lifelong friendships and global networks.",
        },
        {
          title: "Personal Growth and Independence",
          description: "Living and studying in a foreign country pushes you out of your comfort zone, helping you become more self-reliant, confident, and resourceful.",
        },
        {
          title: "Competitive Advantage",
          description: "International graduates often stand out in the job market due to their global exposure, advanced skill sets, and the ability to adapt to different work environments.",
        },
      ],
    },
    faqs: {
      title: "Everything You Need to Know About North China University of Science & Technology",
      description: "Find answers to common questions about programs, admissions, fees, and life at NCUST.",
      content: [
        {
          id: 1,
          question: "What is the duration of the MBBS/Clinical Medicine program at NCUST?",
          answer: "The program lasts for 6 years in total, which includes 5 years of academic study and 1 year of internship.",
        },
        {
          id: 2,
          question: "What language is the program taught in?",
          answer: "The Clinical Medicine (MBBS) program at NCUST is taught in English, making it suitable for international students.",
        },
        {
          id: 3,
          question: "What are the eligibility requirements for the MBBS program?",
          answer: "Students need a minimum of 60% marks in Biology and English, and at least 50% in Physics and Chemistry. The age requirement is between 18–25 years.",
        },
        {
          id: 4,
          question: "Is there a language test requirement?",
          answer: "Yes, international students must pass HSK3 in the first year, HSK4 before internship, and HSK5 to graduate.",
        },
        {
          id: 5,
          question: "How much is the tuition fee at NCUST?",
          answer: "The first year's tuition fee is 10,500 RMB. From the second year onwards, it is 18,000 RMB annually.",
        },
        {
          id: 6,
          question: "What documents are needed for the application process?",
          answer: "Applicants must submit their high school transcripts, passport, physical examination certificate, police character certificate, resume, self-introductory video, and bank statement of 5,000 USD.",
        },
        {
          id: 7,
          question: "Is accommodation available for international students?",
          answer: "Yes, NCUST offers on-campus housing with essential amenities to ensure a safe and comfortable stay.",
        },
        {
          id: 8,
          question: "How can EBC Worldwide help with my application?",
          answer: "EBC Worldwide provides complete assistance — from application submission and visa process to pre-departure guidance — making your study abroad journey simple and stress-free.",
        },
      ],
    }
  },
  {
    id: 3,
    name: "Kunming University of Science & Technology (KUST)",
    description: "A Leading Hub for Innovation, Medicine, and Global Education in China",
    location: "Kunming, Yunnan Province, China",
    established: 1954,
    heroImage: uni3, // Replace with actual image URL
    stats: [
      {
        title: <strong>20+</strong>,
        subtitle: "Academic Programs",
        description: "Undergraduate and Postgraduate programs.",
      },
      {
        title: <strong>1,200+</strong>,
        subtitle: "International Students",
        description: "Global learning environment.",
      },
      {
        title: <strong>100%</strong>,
        subtitle: "MBBS Enrollment Support",
        description: "Complete assistance.",
      },
    ],
    programs: [
      {
        title: <strong>Clinical Medicine (MBBS)</strong>,
        description: (
          <>
            <strong>KUST's Clinical Medicine program</strong> is a six-year degree, including a one-year internship, taught entirely in English. Designed with international standards in mind, the MBBS program equips students with <strong>essential medical knowledge, practical skills, and global perspectives</strong>. With <strong>affordable tuition</strong> and strong academic support, it's a top choice for students seeking <strong>quality medical education in China</strong>.
          </>
        ),
      }
    ],
    about: {
      title: (<>
        <p>
          <strong>A Leading Hub for Innovation, Medicine, and Global Education in China</strong>
        </p>
      </>),
      content: (
        <>
          <p>
            Kunming University of Science and Technology (KUST) offers a world-class learning experience rooted in academic excellence, global connections, and a vibrant student life. Located in the scenic city of Kunming, Yunnan Province, KUST has been a powerhouse of education and research since its establishment in 1954. As one of China's top-ranking universities, it blends traditional values with modern innovation, offering international students a dynamic environment to thrive in.
          </p>
          <p>
            KUST is home to over 49,000 students, including hundreds of international learners. The university operates across three major campuses—Chenggong, Lianhua, and Xinying—spanning more than 120 hectares. Its well-established MBBS program is taught entirely in English, ensuring ease of learning for global students without language barriers.
          </p>
          <p>
            With affordable tuition, state-of-the-art labs, modern dormitories, and a warm multicultural community, KUST is the perfect gateway for students who want to pursue medicine in China while experiencing the cultural richness and beauty of Yunnan.
          </p>
          <p>
            Whether you're seeking academic excellence, hands-on training, or a chance to explore a new culture, KUST provides the full package to help you succeed globally.
          </p>
        </>
      ),
    },
    benefits: {
      title: 'From quality education to global exposure, studying abroad at Kunming University of Science and Technology offers students a life-changing academic experience in one of China\'s most vibrant cities.',
      content: [
        {
          title: "Top-Notch Academics",
          description: "KUST is widely regarded as one of the top universities in China, known for its academic excellence and student-focused learning environment. It ensures students receive the theoretical and practical knowledge needed to excel in their careers.",
        },
        {
          title: "Affordable Education",
          description: "KUST stands out among affordable universities in China, offering competitive tuition fees that make international education accessible without compromising quality.",
        },
        {
          title: "Strong Student Support",
          description: "The university provides international students with comprehensive support—ranging from furnished on-campus housing to scholarships and orientation services—ensuring a smooth transition and fulfilling academic journey.",
        },
        {
          title: "Exciting Research Opportunities",
          description: "With a strong emphasis on innovation, KUST offers state-of-the-art research facilities and opportunities for students to work alongside experts on meaningful scientific and medical projects.",
        },
        {
          title: "A Culturally Rich Experience",
          description: "Located in Kunming, a city known for its rich heritage and diversity, KUST gives students the chance to immerse themselves in Chinese culture while enjoying a modern, urban lifestyle.",
        },
        {
          title: "English-Taught Programs",
          description: "International students can easily integrate into the academic system with English-medium instruction for key programs like Clinical Medicine (MBBS), eliminating language barriers during the learning process.",
        },
        {
          title: "Recognized and Accredited Programs",
          description: "KUST is recognized by the Ministry of Education of China and is internationally acknowledged, with its medical programs eligible for recognition by various global medical councils.",
        },
        {
          title: "Exclusive Partnership with EBC Worldwide",
          description: "With EBC Worldwide's exclusive partnership, students benefit from a seamless application process, expert consultation, and continuous support—from document submission to pre-departure guidance—ensuring peace of mind at every stage.",
        },
      ],
    },
    faqs: {
      title: "Everything You Need to Know About Kunming University of Science and Technology",
      description: "Find answers to common questions about programs, admissions, fees, and life at KUST.",
      content: [
        {
          id: 1,
          question: "What programs does KUST offer for international students?",
          answer: "KUST offers a Clinical Medicine (MBBS) program taught in English, specifically designed to meet the academic and professional needs of international students.",
        },
        {
          id: 2,
          question: "What is the duration of the MBBS program?",
          answer: "The MBBS program at KUST spans 6 years, which includes 1 year of internship to provide students with hands-on medical training.",
        },
        {
          id: 3,
          question: "When can I apply to KUST?",
          answer: "Admissions for international students typically open for the September/October 2024 intake. It's best to start your application process early.",
        },
        {
          id: 4,
          question: "Is the program taught in English?",
          answer: "Yes! The Clinical Medicine (MBBS) program at KUST is fully taught in English, making it easier for international students to study without language barriers.",
        },
        {
          id: 5,
          question: "What documents are required for admission?",
          answer: "You'll need your passport, 10th and 12th grade mark sheets, a medical report, police certificate, financial support form, CV, and a white background picture. Students under 18 also need an affidavit.",
        },
        {
          id: 6,
          question: "What are the tuition fees for the MBBS program?",
          answer: "Tuition fees are RMB 10,000 for the first year, and RMB 18,500 from the second year onwards, making KUST one of the affordable universities in China.",
        },
        {
          id: 7,
          question: "What accommodation options are available?",
          answer: "KUST offers on-campus housing for international students, including furnished dormitories with internet, kitchens, and study areas to ensure a comfortable stay.",
        },
        {
          id: 8,
          question: "How does EBC Worldwide support my application?",
          answer: "Through its exclusive partnership with KUST, EBC Worldwide provides complete support—from guiding you through the application process and handling documentation to assisting with visas and pre-departure advice.",
        },
      ],
    }
  },
  {
    id: 4,
    name: "Guangxi Medical University (GXMU)",
    description: "A Top Choice for International Medical Students in China",
    location: "Nanning, Guangxi, China",
    established: 1934,
    heroImage: uni4, // Replace with actual image URL
    stats: [
      {
        title: <strong>20+</strong>,
        subtitle: "Academic Programs",
        description: "Undergraduate and Postgraduate programs.",
      },
      {
        title: <strong>1,200+</strong>,
        subtitle: "International Students",
        description: "Global learning environment.",
      },
      {
        title: <strong>100%</strong>,
        subtitle: "MBBS Enrollment Support",
        description: "Complete assistance.",
      },
    ],
    programs: [
      {
        title: <strong>Clinical Medicine (MBBS)</strong>,
        description: (
          <>
            <strong>GXMU's Clinical Medicine program</strong> is a 6-year MBBS course that includes an internship for practical training. Taught entirely in English, this program prepares international students with <strong>strong theoretical knowledge and clinical experience</strong> through GXMU's <strong>12 affiliated hospitals and 81 practice bases</strong>. The MBBS degree is <strong>globally recognized</strong>, helping students build successful medical careers worldwide.
          </>
        ),
      },
      {
        title: <strong>Public Health</strong>,
        description: (
          <>
            The <strong>Public Health program</strong> at GXMU focuses on developing students' understanding of <strong>global health issues, epidemiology, and disease prevention</strong>. With a duration of 4 years, this program equips students with the skills needed to contribute to healthcare systems and public policy, making a meaningful impact on communities around the world.
          </>
        ),
      },
      {
        title: <strong>Pharmacy</strong>,
        description: (
          <>
            GXMU's <strong>4-year Pharmacy program</strong> offers students a deep dive into the science of <strong>drug discovery, formulation, and safe usage</strong>. Students are trained in pharmaceutical sciences, pharmacology, and clinical pharmacy, preparing them for roles in hospitals, research, and the pharmaceutical industry, both in China and abroad.
          </>
        ),
      }
    ],
    about: {
      title: (<>
        <p>
          <strong>Discover Guangxi Medical University – A Top Choice for International Medical Students in China</strong>
        </p>
      </>),
      content: (
        <>
          <p>
            Guangxi Medical University (GXMU), located in the heart of Nanning city, is one of China's oldest and most reputable public medical institutions, offering high-quality English-medium programs for international students. Established in 1934, GXMU has built a strong reputation for <strong>academic excellence, advanced clinical training, and global recognition</strong>.
          </p>
          <p>
            With over 9,000 students, including 2,000 international learners from around the world, the university offers a <strong>multicultural environment</strong> perfect for students who aspire to study medicine abroad. GXMU is widely known for its modern campus, cutting-edge medical facilities, and a robust support system for international students.
          </p>
          <p>
            Whether you're pursuing an MBBS, Public Health, or Pharmacy degree, GXMU offers a solid foundation for your future in healthcare. With <strong>12 affiliated hospitals and 81 medical practice bases</strong>, students receive hands-on clinical exposure throughout their studies. Recognized by the <strong>World Health Organization (WHO)</strong> and listed in the <strong>International Medical Education Directory (IMED)</strong>, Guangxi Medical University provides a gateway to a successful medical career globally.
          </p>
        </>
      ),
    },
    benefits: {
      title: 'Studying abroad opens doors to global opportunities, personal growth, and world-class education. Discover how international education can shape your future.',
      content: [
        {
          title: "Global Exposure",
          description: "Experience new cultures, languages, and perspectives that enhance your global understanding and adaptability in any professional environment.",
        },
        {
          title: "High-Quality Education",
          description: "Access top-tier academic programs and advanced learning environments that boost your knowledge and practical skills.",
        },
        {
          title: "Career Advancement",
          description: "International degrees are highly valued by employers, giving you a competitive edge in the global job market.",
        },
        {
          title: "Language Proficiency",
          description: "Improve your English or learn a new language, an essential skill for career growth and international collaboration.",
        },
        {
          title: "Diverse Learning Environment",
          description: "Study alongside peers from around the world and gain insights through diverse viewpoints and collaborative learning.",
        },
        {
          title: "Personal Growth",
          description: "Living abroad builds confidence, independence, and resilience—traits that help you succeed in every aspect of life.",
        },
        {
          title: "Networking Opportunities",
          description: "Connect with students, faculty, and professionals globally, opening doors for future collaborations and opportunities.",
        },
        {
          title: "Pathway to Global Careers",
          description: "Studying internationally often leads to post-study work opportunities or pathways to long-term global careers.",
        },
      ],
    },
    faqs: {
      title: "Everything You Need to Know About Guangxi Medical University",
      description: "Find answers to common questions about programs, admissions, fees, and life at GXMU.",
      content: [
        {
          id: 1,
          question: "What is the duration of the MBBS program at Guangxi Medical University?",
          answer: "The MBBS program at GXMU spans 6 years in total, which includes 5 years of academic education and 1 year of internship for practical training.",
        },
        {
          id: 2,
          question: "Is the MBBS program taught in English?",
          answer: "Yes, GXMU offers several programs, including MBBS, that are fully taught in English, specifically designed for international students.",
        },
        {
          id: 3,
          question: "When does the intake period begin?",
          answer: "The intake for international students begins in September 2024. It's advised to start your application process early for timely admission.",
        },
        {
          id: 4,
          question: "What is the total tuition fee for international students?",
          answer: "For the first year, the tuition is 12,000 RMB. From the second year onward, it is 13,500 RMB annually. Hostel and other fees apply separately.",
        },
        {
          id: 5,
          question: "What documents are required for admission?",
          answer: "You'll need a high school transcript, passport copy, police character certificate, physical exam form, passport photos, study plan, and a few other documents to complete your JW202 application.",
        },
        {
          id: 6,
          question: "Is there on-campus accommodation for international students?",
          answer: "Yes, GXMU offers on-campus hostel facilities for international students, with quad-sharing rooms available at affordable rates.",
        },
        {
          id: 7,
          question: "Is Guangxi Medical University recognized globally?",
          answer: "Absolutely. GXMU is recognized by the World Health Organization (WHO) and is listed in the International Medical Education Directory (IMED).",
        },
        {
          id: 8,
          question: "Can I work after completing my studies at GXMU?",
          answer: "Graduates of GXMU's internationally recognized programs are eligible to pursue further education or apply for licensing and work opportunities in many countries, depending on local regulations.",
        },
      ],
    }
  },
  {
    id: 5,
    name: "Wuhan University of Science & Technology (WUST)",
    description: "A Beacon of Academic Excellence and Research Innovation in China",
    location: "Wuhan, Hubei Province, China",
    established: 1898,
    heroImage: uni5, // Replace with actual image URL
    stats: [
      {
        title: <strong>20+</strong>,
        subtitle: "Academic Programs",
        description: "Undergraduate and Postgraduate programs.",
      },
      {
        title: <strong>1,200+</strong>,
        subtitle: "International Students",
        description: "Global learning environment.",
      },
      {
        title: <strong>100%</strong>,
        subtitle: "MBBS Enrollment Support",
        description: "Complete assistance.",
      },
    ],
    programs: [
      {
        title: <strong>MBBS in Clinical Medicine 临床医学</strong>,
        description: (
          <>
            A <strong>6-year internationally recognized program</strong> taught in English, including one year of clinical internship. It offers <strong>global-standard education</strong> and hands-on medical training in affiliated hospitals.
          </>
        ),
      },
      {
        title: <strong>Bachelor's in Biomedical Engineering</strong>,
        description: (
          <>
            A <strong>cross-disciplinary program</strong> that blends medical science with engineering, focusing on the development of medical devices and healthcare technologies.
          </>
        ),
      },
      {
        title: <strong>Master's in Public Health (MPH)</strong>,
        description: (
          <>
            This postgraduate program prepares students to <strong>lead in global health</strong>, focusing on disease prevention, health policy, and community wellness.
          </>
        ),
      },
      {
        title: <strong>Master's in Medical Imaging</strong>,
        description: (
          <>
            Specialized in <strong>advanced imaging technologies and diagnostics</strong>, this program is ideal for students pursuing careers in radiology and diagnostic healthcare services.
          </>
        ),
      },
      {
        title: <strong>Doctor of Medicine (PhD Track)</strong>,
        description: (
          <>
            For students looking to further their research and academic careers in medicine, this <strong>PhD-level program</strong> offers deep research opportunities with expert faculty and international exposure.
          </>
        ),
      },
      {
        title: <strong>Nursing (Undergraduate)</strong>,
        description: (
          <>
            Designed to prepare students for roles in <strong>global healthcare systems</strong>, this program includes theoretical knowledge and practical nursing skills taught in English.
          </>
        ),
      },
      {
        title: <strong>Master's in Health Management</strong>,
        description: (
          <>
            A <strong>leadership-focused program</strong> that equips students with knowledge in healthcare policy, administration, and hospital operations tailored for international healthcare systems.
          </>
        ),
      },
      {
        title: <strong>Chinese Language Program (Preparatory)</strong>,
        description: (
          <>
            Before entering their major, international students can opt for this <strong>one-year language program</strong> that helps them gain the required HSK4 level proficiency to start their degree.
          </>
        ),
      }
    ],
    about: {
      title: (<>
        <p>
          <strong>Discover the Legacy, Excellence, and Global Recognition of Wuhan University of Science and Technology</strong>
        </p>
      </>),
      content: (
        <>
          <p>
            Wuhan University of Science and Technology (WUST), established in 1898, stands as a <strong>beacon of academic excellence and research innovation</strong> in China. Located in the vibrant city of Wuhan, this public university offers a rich legacy of over a century, attracting students from around the globe. WUST is nationally ranked and internationally recognized, especially for its <strong>Clinical Medicine program</strong>, which is designed to meet global medical standards.
          </p>
          <p>
            Home to over 30,000 students, including more than 200 from Pakistan alone, WUST provides a <strong>multicultural environment</strong> with modern learning facilities, English-taught programs, and strong global partnerships. The university's emphasis on <strong>hands-on learning, world-class faculty, and affordable tuition</strong> makes it a popular choice for international students pursuing MBBS and other health science programs in China.
          </p>
          <p>
            With accreditations from <strong>PM&DC, WFME, and ECFMG</strong>, and a wide range of undergraduate, master's, and doctoral programs, WUST is committed to producing skilled professionals who are ready to lead in the international healthcare and research sectors. Whether you're seeking a strong academic foundation or a global career launchpad, WUST is your gateway to success.
          </p>
        </>
      ),
    },
    benefits: {
      title: 'Studying abroad opens the door to a world of opportunities beyond the classroom. It helps students grow academically, professionally, and personally in a global environment.',
      content: [
        {
          title: "Global Exposure",
          description: "Experience different cultures, languages, and perspectives that broaden your worldview and enhance your global awareness.",
        },
        {
          title: "High-Quality Education",
          description: "Access advanced teaching methods, top-ranked institutions, and programs that meet international academic standards.",
        },
        {
          title: "Personal Growth",
          description: "Living independently in a new country builds confidence, maturity, and problem-solving skills.",
        },
        {
          title: "Career Advancement",
          description: "An international degree stands out to employers and opens up global job opportunities in your field.",
        },
        {
          title: "Language Skills",
          description: "Improve your English and even pick up a new language, giving you an edge in today's competitive job market.",
        },
        {
          title: "Networking Opportunities",
          description: "Build a global network of friends, professors, and professionals that can support your future career.",
        },
        {
          title: "Scholarships and Funding",
          description: "Many countries offer scholarships and financial aid for international students to help ease tuition costs.",
        },
        {
          title: "Cultural Understanding",
          description: "Gain a deeper appreciation for different customs and traditions, making you more adaptable and inclusive.",
        },
      ],
    },
    faqs: {
      title: "Everything You Need to Know About Wuhan University of Science & Technology",
      description: "Find answers to common questions about programs, admissions, fees, and life at WUST.",
      content: [
        {
          id: 1,
          question: "What is the medium of instruction at WUST for international students?",
          answer: "The MBBS program for international students is taught entirely in English. However, students are encouraged to learn Chinese to better interact during clinical practice and daily life in China.",
        },
        {
          id: 2,
          question: "Do I need to know Chinese before applying?",
          answer: "No, prior knowledge of Chinese is not mandatory for admission. The first year includes language learning, and students must pass HSK4 before entering the medical program.",
        },
        {
          id: 3,
          question: "Is WUST recognized internationally?",
          answer: "Yes, WUST is recognized by PM&DC, WFME, and ECFMG, which means graduates can pursue medical licensing in countries like Pakistan and the United States.",
        },
        {
          id: 4,
          question: "What is the total duration of the MBBS program?",
          answer: "The MBBS program at WUST lasts 6 years, which includes a 1-year internship in affiliated hospitals in China.",
        },
        {
          id: 5,
          question: "What are the tuition fees for the MBBS program?",
          answer: "Tuition is 6,500 RMB per year for the first two years, and 18,000 RMB annually from the third year onward. Additional costs include accommodation, food, and miscellaneous expenses.",
        },
        {
          id: 6,
          question: "Is on-campus accommodation available?",
          answer: "Yes, international students are offered on-campus housing with shared rooms. The dorms are safe, well-maintained, and equipped with necessary facilities.",
        },
        {
          id: 7,
          question: "What is the admission criteria for Pakistani students?",
          answer: "Students must have a minimum of 60% in FSC, at least 55% in English and Biology, and must be between 16-24 years old.",
        },
        {
          id: 8,
          question: "Can I get a scholarship at WUST?",
          answer: "Yes, WUST offers various scholarships for international students based on academic performance and financial need, making education more affordable.",
        },
      ],
    }
  }
];
