
import { motion } from "framer-motion";
import { Code, Lightbulb, Users, Trophy } from "lucide-react";
import Section from "../Section";

export default function AboutSection() {
  const sections = [
    {
      title: "What is Hack The Circle: Khwopa 2024?",
      content:
        "Hack The Circle: Khwopa 2024 is Nepal's premier student-led hackathon, bringing together innovators, developers, and tech enthusiasts for a 48-hour coding marathon.",
      icon: Code,
    },
    {
      title: "Our Vision",
      content:
        "To foster a culture of creativity, collaboration, and innovation within the tech community, nurturing the next generation of problem solvers.",
      icon: Lightbulb,
    },
    {
      title: "Who Can Participate?",
      content:
        "Open to all university students in Nepal, from beginners to experienced coders. Form teams of 3-5 members and bring your ideas to life!",
      icon: Users,
    },
    {
      title: "What's in it for You?",
      content:
        "Win exciting prizes, network with industry leaders, gain valuable experience, and potentially turn your project into a real-world solution.",
      icon: Trophy,
    },
  ];

  return (
    <Section title="About Us">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:ring-2 hover:ring-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <section.icon className="w-12 h-12 mb-4 text-cyan-400" />
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-sm leading-relaxed">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}