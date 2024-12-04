import { Team } from '@/types';

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <a
      href={`/teams/2024/${team.id}`}
      className="group block bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md w-64 mx-4" // Set width and margin between cards
    >
      <div className="relative w-full mx-2">
        {/* Center the image and apply padding to the right */}
        <div className="flex justify-center pt-4 pr-4"> {/* pt-4: padding-top, pr-4: padding-right */}
          <img
            src={`${team.imageUrl}`}
            alt={`${team.name}`}
            className="object-cover h-auto w-full transition-transform group-hover:scale-105"
          />
        </div>
      </div>
      <div className="p-4"> {/* Padding for content */}
        <h2 className="text-base font-semibold text-gray-800 group-hover:text-gray-600 mb-1">
          {team.name}
        </h2>
        <p className="text-xs text-gray-600">{team.institution}</p>
      </div>
    </a>
  );
}
