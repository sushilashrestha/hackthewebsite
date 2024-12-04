import { Team } from '@/types'

interface TeamCardProps {
  team: Team
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <a 
      href={`/teams/2024/${team.id}`}
      className="group block bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:ring-2 hover:ring-secondary hover:shadow-lg hover:shadow-cyan-400/20 p-2 mx-2 my-3"
    >
      <div className="relative h-36 w-36 mx-auto mb-4">
        <img
          src={`${team.imageUrl}`}
          alt={`${team.name}`}
          className="object-cover h-full w-full rounded-lg transition-transform group-hover:scale-110"
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
