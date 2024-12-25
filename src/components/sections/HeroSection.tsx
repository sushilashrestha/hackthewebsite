// import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Rocket, Code } from "lucide-react";
import ScrollDownButton from '../ui/scrolldown';
import Marquee from "react-fast-marquee";
import TeamCard from "../TeamCard";
import { teams } from "@/data";

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

// Define a component for when isTimeOut is true
function EventStarted() {
  return (
    <>
      <motion.h3
        className="text-xl sm:text-2xl text-primary font-extrabold mb-4 drop-shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <span className="text-secondary">Meet Our Participants</span>
      </motion.h3>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Marquee
          gradient={true}
          gradientColor="#dddfe9"
          gradientWidth={100}
          speed={120}
          className="w-full"
        >
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </Marquee>
      </motion.div>
    </>
  );
}

// Define a component for when isTimeOut is false
// function ActiveCountdown({
//   timeLeft,
//   registrationLink,
//   learnMoreLink,
// }: {
//   timeLeft: { days: number; hours: number; minutes: number; seconds: number };
//   registrationLink: string;
//   learnMoreLink: string;
// }) {
//   return (
//     <>
//       <motion.div
//         className="backdrop-blur-sm bg-muted bg-opacity-20 rounded-lg p-4 sm:p-6 mb-8 inline-block w-full max-w-3xl hover:ring-2 hover:ring-secondary hover:shadow-lg hover:shadow-cyan-400/20"
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//       >
//         <h3 className="text-2xl sm:text-4xl font-bold py-4 mb-4 text-primary">
//           Countdown to Hack Submission
//         </h3>
//         <div className="flex justify-between gap-2 sm:gap-4">
//           {Object.entries(timeLeft).map(([unit, value]) => (
//             <CountdownItem key={unit} value={value} unit={unit} />
//           ))}
//         </div>
//       </motion.div>
//       <motion.div
//         className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row items-center justify-center"
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.8 }}
//       >
//         <div className="flex gap-6 justify-center flex-wrap">
//           <a href={registrationLink} target="_blank">
//             <Button
//               size="lg"
//               className="text-xl py-8 rounded-lg hover:scale-105 hover-ring-2 hover:ring-secondary hover:shadow-lg hover:shadow-cyan-400/20"
//             >
//               Register Now
//               <Rocket className="ml-2 h-6 w-6" />
//             </Button>
//           </a>
//           <a href={learnMoreLink} target="_blank">
//             <Button
//               size="lg"
//               variant="outline"
//               className="text-xl py-8 rounded-lg hover:scale-105 hover-ring-2 hover:ring-secondary hover:shadow-lg hover:shadow-cyan-400/20 border-secondary border-2"
//             >
//               Learn More
//               <Code className="ml-2 h-6 w-6" />
//             </Button>
//           </a>
//         </div>
//       </motion.div>
//     </>
//   );
// }

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

  // const [isTimeOut, setIsTimeOut] = useState(false);

  // useEffect(() => {
  //   const targetDateTime = new Date(targetDate).getTime();

  //   const interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const difference = targetDateTime - now;


  //     if (difference <= 0) {
  //       setIsTimeOut(true);
  //       setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  //       clearInterval(interval);
  //     } else {
  //       setTimeLeft({
  //         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //         hours: Math.floor(
  //           (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //         ),
  //         minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
  //         seconds: Math.floor((difference % (1000 * 60)) / 1000),
  //       });
  //     }

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

        {/* {isTimeOut ? (
         
        ) : (
          <ActiveCountdown
            timeLeft={timeLeft}
            registrationLink={registrationLink}
            learnMoreLink={learnMoreLink}
          />
        )} */}
         <EventStarted />
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col justify-center items-center">
      <ScrollDownButton />
      </div>
    </section>
  );
}