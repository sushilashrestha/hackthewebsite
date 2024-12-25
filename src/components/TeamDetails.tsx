import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Home } from 'lucide-react'
import { useParams } from "react-router-dom";
import {teams} from "@/data"


export default function TeamProfile() {

    const { id } = useParams();
    const team = teams.find(t => t.id === id);
  
    if (!team) {
      return <div>Team not found</div>;
    }
  
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="text-center space-y-2 relative">
          <a href="/" className="absolute left-4 top-4 text-muted-foreground hover:text-foreground transition-colors">
            <Home className="h-6 w-6" />
            <span className="sr-only">Return to home</span>
          </a>
          <h1 className="text-4xl font-bold tracking-tight">{team.name}</h1>
          <p className="text-lg text-muted-foreground">
            {team.institution}
          </p>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg">
          <img
          src={`/${team.imageUrl}`}
          alt={`${team.name}`}
              
              className="object-cover"
            />
            <div className="absolute inset-0" />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Team Members</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {team.members.map((member,index) => (
                  <Card key={index} className="bg-muted">
                    <CardContent className="p-4">
                      <p className="font-medium">{member.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Project Description</h2>
              <p className="text-muted-foreground leading-relaxed">
               {team.ideaDescription}
              </p>
              <div className="flex justify-center pt-4">
                <Button className="group" variant="outline">
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  )
}

