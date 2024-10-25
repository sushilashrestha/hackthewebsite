# Hack the Circle: Khwopa 2024

Welcome to the Hack the Circle: Khwopa 2024 hackathon page! This project is designed to be composable and easily customizable. Below are the instructions on how to set up, configure, and customize the hackathon page.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Customization](#customization)
- [Email Integration](#email-integration)
- [Running the Project](#running-the-project)

## Installation

First, clone the repository and install the dependencies:

```sh
git clone https://github.com/scifisatan/hackwebsite.git
cd hackwebsite
npm install
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory of the project and add your MailerLite API key and group ID:

```txt
VITE_MAILERLITE_API_KEY=your_mailerlite_api_key
VITE_MAILERLITE_GROUP_ID=your_mailerlite_group_id
```

You can also create .env.local and .env.prod files for local and production environments, respectively.

## Customization

### Data File

The hackathon page is highly composable and can be customized by editing the `data.ts` file located in the `src` directory. This file contains all the configurable data for the hackathon, including themes, event details, FAQs, and social media links.

### Example

Here is an example of how to customize the themes in the `data.ts` file:

```tsx
import { Theme, Event, FAQ, Links } from "@/types";

export const targetDate = "2024-11-15T00:00:00";
export const registrationLink = "https://example.com/register";
export const learnMoreLink = "https://example.com/learn-more";

export const themes: Theme[] = [
  {
    title: "Transforming College Life",
    description:
      "Participants will develop innovative technological solutions to improve the quality of life for students, teachers, and administrators at our college. Projects may address challenges in areas such as campus communication, resource management, learning tools, administrative efficiency, or student services. This theme encourages participants to leverage their technical skills to create practical, impactful solutions that directly benefit our college ecosystem, fostering a more connected, efficient, and supportive academic environment for all.",
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    icon: "🏫",
  },
  {
    title: "Empowering Municipal Growth",
    description:
      "This hackathon invites passionate innovators, developers, and problem-solvers to come together and create technological solutions that drive positive change across the municipality. Participants will focus on addressing key challenges in areas such as public services, infrastructure, sustainability, communication, and citizen engagement. By leveraging modern technology and creativity, teams will develop practical solutions that enhance the quality of life for all residents, foster efficient governance, and build a more connected, resilient, and forward-thinking community.",
    color: "bg-gradient-to-br from-green-500 to-teal-400",
    icon: "🏘️",
  },
];
```

## Running the Project

To run the project locally, use the following command:

```sh
npm run dev
```

This will start the development server, and you can view the hackathon page at `http://localhost:5173`.
This will create a production-ready build in the `dist` directory

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

---

Happy hacking!
