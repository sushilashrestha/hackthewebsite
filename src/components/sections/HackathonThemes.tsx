import { Theme } from "@/types";
import Section from "../Section";

const ThemeCard = ({ title, description, icon }: Theme) => {
  return (
    <div className="bg-muted bg-opacity-20 backdrop-blur-lg rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:ring-2 hover:ring-secondary hover:shadow-lg hover:shadow-cyan-400/20">
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default function HackathonThemes({ themes }: { themes: Theme[] }) {
  return (
    <Section title="Hackathon Themes">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {themes.map((theme) => (
          <ThemeCard key={theme.title} {...theme} />
        ))}
      </div>
    </Section>
  );
}