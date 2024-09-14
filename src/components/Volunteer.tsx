import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const volunteerExperiences = [
  {
    organization: "Scaler By InterviewBit",
    role: "Data Structures & Algorithms intern, Teaching Assistant",
    startDate: "August 2022",
    endDate: "August 2023",
  },
  {
    organization: "Google Developer Students Club IET Lucknow",
    role: "Founder & Lead",
    startDate: "July 2021",
    endDate: "September 2023",
  },
  {
    organization: "IEEE IET Lucknow",
    role: "Secretary",
    startDate: "November 2022",
    endDate: "November 2023",
  },
];

export default function Volunteer() {
  return (
    <section id="volunteer-experience" className="py-12">
      <h2 className="text-3xl font-bold mb-6">Volunteer Experience</h2>
      <div className="space-y-6">
        {volunteerExperiences.map((experience, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">
                    {experience.organization}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {experience.role}
                  </p>
                </div>
                <Badge variant="default">
                  {experience.startDate} - {experience.endDate}
                </Badge>
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
