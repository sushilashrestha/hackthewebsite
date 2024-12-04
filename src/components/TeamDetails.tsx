import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { teams } from '@/data'

export default function TeamPage() {

  const { id } = useParams()
  const team = teams.find(t => t.id === id)

  if (!team) {
    return <div>Team not found</div>
  }

  return (
    <div className="container mx-auto flex flex-col p-6 items-center text-center">
      <div className="relative w-full max-w-xl">
        <div className="rounded-xl shadow-md overflow-hidden bg-card mt-8">
            <a href="/" className="p-4 ml-4 text-primary"><div className="flex">
                <ArrowLeft/> <p>Back to Home</p></div></a>

          <h1 className="text-3xl font-bold text-primary my-2">{team.name}</h1>
          <p className="text-secondary mb-4">{team.institution}</p>
          <img
            src={`/${team.imageUrl}`}
            alt={`${team.name}`}
            className="object-cover w-64 h-64 mx-auto mb-4"
          />
          <div className="p-4 pt-0">
            <h2 className="text-2xl font-semibold text-primary">Team Members:</h2>
            <ul className="mb-4">
              {team.members.map((member, index) => (
                <li key={index} className="text-gray-600">
                  {member.name} 
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-semibold text-primary mb-2">Idea Description:</h2>
            <p className="text-gray-700 text-sm">{team.ideaDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

