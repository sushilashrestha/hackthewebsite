import Section from "@/components/Section";
import Card from "@/components/Card";
import { Calendar, Award, Users } from "lucide-react";

const EventHighlights = () => {
  return (
    <Section title="Event Highlights">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card
          icon={<Calendar className="h-12 w-12 mb-4 mx-auto" />}
          title="32-Hour Hackathon"
          description="November 15-16, 2024"
          align="center"
        />
        <Card
          icon={<Award className="h-12 w-12 mb-4 mx-auto" />}
          title="Prizes"
          description="Prize Pool of more than 50k"
          align="center"
        />
        <Card
          icon={<Users className="h-12 w-12 mb-4 mx-auto" />}
          title="Participants"
          description="50+ Expected"
          align="center"
        />
      </div>
    </Section>
  );
};

export default EventHighlights;
