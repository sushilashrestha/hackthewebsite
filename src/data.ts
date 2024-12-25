import { Theme, Event, FAQ, Links, Info, Team } from "@/types";

export const title = "Hack the Circle: Khwopa 2024";
export const caption =
  "Join us for 32 hours of innovation, collaboration, and code!";
  export const targetDate = "2024-12-07T12:00:00";
export const registrationLink = "https://tally.so/r/nrdZLo";
export const learnMoreLink = "https://hackthecircle.super.site";


export const themes: Theme[] = [
  {
    title: "Tourism Enhancement",
    description:
      "Create tech solutions to enhance the tourism experience in Bhaktapur, from guiding tourists to exploring the cultural landmarks digitally.",
    icon: "✈️", 
  },
  {
    title: "Disaster Risk Management",
    description:
      "Develop tools and systems to mitigate and manage disasters, helping to protect Bhaktapur's residents and its cultural heritage.",
    icon: "⚠️", 
  },
  {
    title: "Cultural Preservation",
    description:
      "Innovate solutions to preserve and promote Bhaktapur's centuries-old culture, traditions, and monuments through technology.",
    icon: "🛕",
  },
  {
    title: "Local Business Support",
    description:
      "Create platforms or tools that empower local businesses, promote their products, and help them thrive in a modern digital economy.",
    icon:"🏪", 
  },
];
export const events: Event[] = [
  {
    date: "Nov 20",
    title: "Design Thinking Workshop",
    description:
      "A deep dive into problem-solving techniques using the Design Thinking approach. Participants will learn how to empathize with users, define problems, ideate solutions, prototype, and test their ideas.",
  },
  {
    date:"Nov 25",
    title:"Presentation Excellence Workshop",
    description:
      "Learn how to craft a compelling pitch for your project. This workshop will cover essential elements of a pitch, including problem identification, solution, market analysis, and impact.",
  },
  // {
  //   date: "Dec 2",
  //   title: "Git & Github Workshop",
  //   description:
  //     "An introduction to version control using Git and Github. Participants will learn how to create repositories, manage branches, commit changes, and collaborate with others on projects.",
  // },
  {
    date: "Dec 1",
    title: "Ideathon",
    description:
    "An idea pitching session where participants present their project concepts to a jury of experts, competing for a spot in the main hackathon. Only the top 10 teams will advance, gaining the chance to bring their ideas to life in a dynamic, hands-on environment."
  },
  {
    date: "Dec 4",
    title: "Participant Orientation",
    description:
      "Final preparation session before the hackathon. Participants will get an overview of the event schedule, rules, and resources available, along with important instructions for the hackathon.",
  },
  {
    date: "Dec 6-7",
    title: "Hack The Circle: Khwopa 2024",
    description:
      "A 32-hour hackathon where participants will work in teams to develop innovative tech solutions to address challenges related to Bhaktapur's tourism, disaster risk management, cultural preservation, and local business support.",
  },

];

export const faqs: FAQ[] = [
  {
    question: "When is Hack The Circle: Khwopa 2024 happening?",
    answer:
      "Hack The Circle: Khwopa 2024 will take place on December 6 and 7, 2024.",
    category: "Event Details",
  },
  {
    question: "Who can participate in Hack The Circle: Khwopa 2024?",
    answer:
      "Students from Khwopa Circle are eligible to participate, regardless of their department or year of study.",
    category: "Event Details",
  },
  {
    question: "What is the team composition requirement?",
    answer:
      "Teams must consist of 3-4 elligible members.",
    category: "Event Details",
  },
  {
    question:
      "What resources and technical infrastructure will be provided at the hackathon?",
    answer:
      "Participants will have access to high-speed Wi-Fi, multi plugs for devices, projectors for presentations, and others for smooth communication and demonstrations.",
    category: "Event Logistics",
  },
  {
    question:
      "What meals and refreshments will be provided during the hackathon?",
    answer:
      "Meals and snacks will be provided, including lunch, snacks, and dinner on Day 1, and breakfast, lunch, and snacks on Day 2.",
    category: "Event Logistics",
  },
  {
    question: "What should I bring to the hackathon?",
    answer:
      "You should bring your laptops, chargers, and any other necessary devices for your project development.",
    category: "Event Logistics",
  },
  {
    question: "What is the judging criteria for projects?",
    answer:
      "Projects will be judged based on creativity, technical complexity, relevance to the theme, and potential impact on the community.",
    category: "Hackathon",
  },
  {
    question: "What kind of projects are expected at the hackathon?",
    answer:
      "Projects should address challenges related to our theme. All projects must be started from scratch during the hackathon, and participants can use any programming language, framework, or technology stack.",
    category: "Hackathon",
  },
  {
    question: "Can we use pre-existing projects or code?",
    answer:
      "No, all projects must be developed from scratch during the hackathon. Pre-existing projects are not allowed.",
    category: "Hackathon",
  },
];

export const links: Links = {
  facebook: "https://www.facebook.com/hackthecircle",
  instagram: "https://www.instagram.com/hackthecircle",
  discord: "https://discord.gg/TCWhDg7Rby",
};

export const info: Info = {
  name: "Abi Shrestha",
  role: "Event Lead",
  email: "hackthecircle@gmail.com", 
  phone: "(+977) 9863476900"
 };



export const teams: Team[] = [
  {
    id: "1",
    name: "Team HAHA",
    imageUrl: "Team_HAHA.png",
    members: [
      { name: "Ayusha Shrestha" },
      { name: "Arpita Rimal" },
      { name: "Sneha Chaulagain" },
    ],
    institution: "Khwopa College of Engineering",
    ideaDescription:
      "Our web-based platform bridges the gap between Bhaktapur's rich cultural heritage and modern technology by empowering both locals and tourists. Locals can list their unique skills, activities, or products, while tourists and other users can discover, book, and learn from these experiences. Beyond connecting individuals, the platform supports local businesses, promotes cultural preservation, and fosters a sense of community. Join us in celebrating and sharing skills, traditions, and stories through a modern, user-friendly platform!",
  },
  {
    id: "2",
    name: "Syntax Error",
    imageUrl: "Syntax_Error.png",
    members: [
      { name: "Jeeni Shrestha" },
      { name: "Jenisha Shrestha" },
      { name: "Isha Bhattarai" },
      { name: "Sejal Dahal" },
    ],
    institution: "Khwopa College of Engineering",
    ideaDescription:
      "Our idea is to develop an immersive AR app that revolutionizes tourism in Bhaktapur by blending technology with culture. The app will provide captivating storytelling experiences through augmented reality, allowing users to see and hear the history of landmarks come alive. It includes search feature for attractions, food, and events, making exploration seamless. An interactive map offers flexibility, while a profile section stores user preferences and past visits. Designed to enhance cultural appreciation and support local businesses, this app promises to modernize tourism while preserving Bhaktapur's rich heritage.",
  },
  {
    id: "3",
    name: "Rat",
    imageUrl: "Rat.png",
    members: [
      { name: "Sajal Poudel" },
      { name: "Sachin Koirala" },
      { name: "Prashamsa Karki" },
      { name: "Utsav Kayastha" },
    ],
    institution: "Khwopa College of Engineering",
    ideaDescription:
      "Develop a platform to preserve culture and promote local businesses. Encourage young volunteers to participate and learn about the culture and traditions while earning incentives by doing so. An integrated calendar provides updates on local festivals with push notifications. Additionally, it offers folklore to reflect the main reason behind each festival, keeping participants interested and motivated to preserve it. It also includes map integration to locate local shops, which could be shown as recommendations to visit during festivals to promote local business.",
  },
  {
    id: "4",
    name: "Xception",
    imageUrl: "Xception.png",
    members: [
      { name: "Trijan Koju" },
      { name: "Bastav Khatiwada" },
      { name: "Nirbhaya Sah" },
    ],
    institution: "Khwopa Secondary School",
    ideaDescription:
      "Detection of parked vehicles in no parking zones. We will detect the vehicles and crop out the number plate to read it. Then, we will compare it to a database and retrieve the contact number associated with the number plate. Initially, we will send an SMS warning with a 10-minute ultimatum to remove the vehicle, and if it remains, further actions will be taken. We will showcase a demo of the system with a custom database and upload videos for detection.",
  },
  {
    id: "5",
    name: "Clueless Coders",
    imageUrl: "Clueless_Coders.png",
    members: [
      { name: "Supriya Poudel" },
      { name: "Rohan Singh" },
      { name: "Anjana Silinchhe Shrestha" },
      { name: "Niraj Nath" },
    ],
    institution: "Khwopa College of Engineering",
    ideaDescription:
      "The web application acts as an itinerary provider for tourists to help bridge the information gap, guide them through overwhelming choices, and ensure they experience the best of Bhaktapur based on real-time interests. The itinerary includes services, travel places, and dark or fun myths about Bhaktapur, which can be selected according to preference. Additionally, a blog section is provided for tourists to share their favorite itineraries, which others can use.",
  },
  {
    id: "6",
    name: "Code Rangers",
    imageUrl: "Code_Rangers.png",
    members: [
      { name: "Rachit Khadka" },
      { name: "Prasanna Neupane" },
      { name: "Roshan Bist" },
      { name: "Pratishthit Raj Baral" },
    ],
    institution: "Khwopa College of Engineering",
    ideaDescription:
      "A detailed, interactive map featuring businesses of all sizes in Bhaktapur. It includes images of the businesses for easier recognition and has a user-friendly interface accessible to everyone.",
  },
  {
    id: "7",
    name: "justCodin'",
    imageUrl: "justCodin'.png",
    members: [
      { name: "Chandish Sipai" },
      { name: "Bishal Gautam" },
      { name: "Sujan Suwal" },
    ],
    institution: "Khwopa College of Engineering",
    ideaDescription:
      "We plan to make festivals more accessible through an AR-powered map and timeline-driven calendar. We also want to enhance festival experiences by integrating an emergency button feature in our PWA to facilitate faster access to help. Our goal is to let people enjoy festivals with fewer worries. The platform will also promote local businesses through mall highlights and BLE signals.",
  },
  {
    id: "8",
    name: "Team Curious",
    imageUrl: "Team_Curious.png",
    members: [
      { name: "Sulav Sapkota" },
      { name: "Kismat Poudel" },
      { name: "Deepa Gyawali" },
      { name: "Aashish Khatri" },
    ],
    institution: "Khwopa College of Engineering",
    ideaDescription:
      "Our platform bridges the gap between Bhaktapur's rich cultural heritage and modern technology by empowering locals and tourists alike. Locals can list their unique skills, activities, or products, while tourists and other users can discover, book, and learn from these experiences. Beyond connecting individuals, the platform supports local businesses, promotes cultural preservation, and fosters a sense of community. Join us in celebrating and sharing skills, traditions, and stories through a modern, user-friendly platform.",
  },
  {
    id: "9",
    name: "Team Lakhamari",
    imageUrl: "Team_Lakhamari.png",
    members: [
      { name: "Unik Dhungel" },
      { name: "Manee Das Shrestha" },
      { name: "Laxman Twayana" },
      { name: "Pradipta Joshi" },
    ],
    institution: "Khwopa College of Engineering",
    ideaDescription:
      "Our web app 'Bhakta-Tour' enhances tourism in Bhaktapur by integrating QR codes at attractions to provide voice-guided cultural and historical insights. Visitors are accompanied by Pasa, an AI chatbot that offers personalized recommendations, answers queries, and creates tailored experiences, blending technology with tradition for an engaging and memorable journey.",
  },
  {
    id: "10",
    name: "Technovert",
    imageUrl: "Technovert.png",
    members: [
      { name: "Salin Bade" },
      { name: "Sampada Shrestha" },
      { name: "Shrijan Sainju" },
      { name: "Dristi Shrestha" },
    ],
    institution: "Khwopa Engineering College",
    ideaDescription:
      "We'll be building a dedicated website to preserve the food culture by documenting recipes, tutorial videos, historical essence, nutrients, and timing. While sharing recipes, the platform will suggest shops to buy specific ingredients and restaurants specializing in the dish for those who wish to taste it. The platform aims to digitally monetize through affiliate marketing with promo codes and discounts. It requires calendar and map integration.",
  },
];

