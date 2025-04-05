import React from "react";
import PersonImage from "../assets/image2.jpg";
import Person2Image from "../assets/image3.jpg";
export default function AboutUs() {
  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      bio: "15+ years in enterprise SaaS solutions",
      img: Person2Image,
    },
    {
      name: "Maria Gonzalez",
      role: "CTO",
      bio: "Cloud infrastructure expert",
      img: PersonImage,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="flex justify-center text-4xl font-bold text-white mb-4">
          About <h2 className="text-amber-400 ml-2">Teamify</h2>
        </h2>
        <p className="text-xl text-white max-w-2xl mx-auto">
          Revolutionizing team collaboration since 2025. We believe in creating
          tools that empower teams to do their best work, anywhere.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="bg-white/5 backdrop-blur-lg border-b border-white/10 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
          <p className="text-white mb-6">
            To remove friction from team collaboration and create seamless
            workflows that adapt to modern work environments.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex-1 h-0.5 bg-white/5 backdrop-blur-lg border-b border-white/10"></div>
            <span className="text-amber-400 font-semibold">Since 2025</span>
            <div className="flex-1 h-0.5 bg-white/5 backdrop-blur-lg border-b border-white/10"></div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border-b border-white/10 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Core Values</h3>
          <ul className="space-y-4">
            {["Innovation", "Transparency", "User-Centric", "Security"].map(
              (value) => (
                <li key={value} className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  <span className="text-white">{value}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white mb-4">Leadership Team</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white/5 backdrop-blur-lg border-b border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
            />
            <h4 className="text-xl font-bold text-center mb-2">
              {member.name}
            </h4>
            <p className="text-amber-400 text-center mb-4">{member.role}</p>
            <p className="text-white text-center">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
