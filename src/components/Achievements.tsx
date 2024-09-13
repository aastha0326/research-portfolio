import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const achievements = [
  {
    title: "MyDaily: Health Behavior Change",
    description: "A digital intervention for multiple health behavior change, focusing on physical activity, fruit and vegetable consumption, and smoking cessation.",
    url: "#",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
              <Button variant="outline" size="sm" asChild>
                <a href={achievement.url} target="_blank" rel="noopener noreferrer">
                  Learn More <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}