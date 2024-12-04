import { Team } from '@/types'

interface TeamCardProps {
  team: Team
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <a 
      href={`/teams/2024/${team.id}`}
      className="group block bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md"
    >
      <div className="relative h-32 mx-2 w-32">
        <img
          src={`${team.imageUrl}`}
          alt={`${team.name}`}

          className="object-cover h-auto w-full transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-3">
        <h2 className="text-base font-semibold text-gray-800 group-hover:text-gray-600 mb-1">
          {team.name}
        </h2>
        <p className="text-xs text-gray-600">{team.institution}</p>
      </div>
    </a>
  )
}

