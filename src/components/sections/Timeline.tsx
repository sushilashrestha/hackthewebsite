import { Card, CardContent } from "@/components/ui/card";
import { Event } from "@/types";
import Section from "@/components/Section";

const TimelineEvent = ({ event }: { event: Event }) => {
  return (
    <div className="mb-8 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-secondary">
      <div className="absolute left-0 top-2 w-3 h-3 bg-secondary rounded-full -translate-x-1/2" />
      <Card className="transition-all duration-300 backdrop-blur-lg bg-muted bg-opacity-20 hover:ring-2 hover:ring-secondary hover:shadow-lg hover:shadow-cyan-400/20">
        <CardContent className="p-4">
          <h4 className="text-lg font-semibold">{event.title}</h4>
          <p className="text-sm mb-2 text-primary">
            {event.date}
          </p>
          <p className="text-sm">{event.description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

const Timeline = ({ events }: { events: Event[] }) => {
  return (
    <Section title="Event Timeline">
      <div className="space-y-4">
        {events.map((event, index) => (
          <TimelineEvent key={index} event={event} />
        ))}
      </div>
    </Section>
  );
};

export default Timeline;
