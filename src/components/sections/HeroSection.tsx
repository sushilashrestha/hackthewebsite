// import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Rocket, Code } from "lucide-react";
import Marquee from "react-fast-marquee";
import ScrollDownButton from '../ui/scrolldown';
import { teams } from "@/data";
import TeamCard from "../TeamCard";

// const CountdownItem = ({ value, unit }: { value: number; unit: string }) => (
//   <motion.div
//     className="bg-secondary bg-opacity-20 rounded-lg p-2 sm:p-4 backdrop-blur-sm flex-1 min-w-fit "
//     whileHover={{ scale: 1.05 }}
//     transition={{ type: "spring", stiffness: 300 }}
//   >
//     <motion.div
//       className="text-2xl sm:text-4xl font-bold text-white "
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {value}
//     </motion.div>
//     <div className="text-xs sm:text-sm text-white">{unit}</div>
//   </motion.div>
// );

interface HeroSectionProps {
  title: string;
  caption: string;
  targetDate: string;
  registrationLink: string;
  learnMoreLink: string;
}

export default function HeroSection({
  title,
  caption,
  // targetDate,
  // registrationLink,
  // learnMoreLink,
}: HeroSectionProps) {
  const [firstPart, secondPart] = title.split(":");
  // const [timeLeft, setTimeLeft] = useState({
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0,
  // });

  // useEffect(() => {
  //   const targetDateTime = new Date(targetDate).getTime();

  //   const interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const difference = targetDateTime - now;

  //     setTimeLeft({
  //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor(
  //         (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //       ),
  //       minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
  //       seconds: Math.floor((difference % (1000 * 60)) / 1000),
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
      <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-6xl text-primary font-extrabold mb-4 drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-secondary"> {firstPart}</span> :{secondPart}
        </motion.h2>
        <motion.p
          className="text-xl sm:text-2xl mb-8 text-primary font-bold"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {caption}
        </motion.p>
        <Marquee gradient={false} speed={100}>
        
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </Marquee>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col justify-center items-center">
      <ScrollDownButton />
      </div>
    </section>
  );
}
