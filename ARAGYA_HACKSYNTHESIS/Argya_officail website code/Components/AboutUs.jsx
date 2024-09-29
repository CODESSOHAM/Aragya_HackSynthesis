import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const teamMembers = [
  {
    name: 'Sandipan Dubey',
    role: 'Leader,Aragya',
    image: '/images/sandipan.jpg',
    description: 'Sandipan Dubey, leader of the Aragya project, is a visionary innovator and IoT enthusiast, driving impactful healthcare solutions.',
  },
  {
    name: 'Soham Aich',
    role: 'Co-Leader, Aragya',
    image: '/images/soham.jpg',
    description: 'Soham Aich, co-leader of Aragya, is a brilliant ideator and IoT enthusiast, contributing innovative ideas to healthcare solutions.',
  },
  {
    name: 'Shivraj Bhattacharya',
    role: 'Frontend Developer',
    image: '/images/shivraj.jpg',
    description: 'Shivraj, a skilled frontend and backend developer, plays a crucial role in building and optimizing the project infrastructure.',
  },
  
  {
    name: 'Srijeeta Das',
    role: 'Lead Designer',
    image: '/images/srijeeta.jpg',
    description: 'Srijeeta Das, the lead designer for Aragya, specializes in UI/UX and hardware design, creating intuitive interfaces and innovative hardware solutions. &nbsp; &nbsp; &nbsp; &nbsp; s   &nbsp;                         ',
  },
  {
    name: 'Simantini Das',
    role: 'Cybersecurity, Tech & Asst. Designer',
    image: '/images/simantini.jpg',
    description: 'Simantini Das, Cybersecurity Maverick and Assistant Designer, excels in tech and design, ensuring security and contributing creatively to Aragya.',
  },
  
];

const AboutUs = () => {
  return (
    <section
      className="py-12 min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #080316 0%, #150B2D 100%)',
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-50 mb-8 mt-20">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 sm:px-10">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
