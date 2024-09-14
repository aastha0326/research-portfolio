"use client";
import { Award, Calendar, Users, Code, Book } from "lucide-react";

const achievements = [
  {
    icon: <Award className="w-6 h-6 text-yellow-500" />,
    title: "Dan Kohn Scholarship",
    organization: "The Linux Foundation",
    date: "September, 2022",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-500" />,
    title: "Google Women Engineers Program Scholar",
    organization: "TalentSprint",
    description: "Selected as top 200 out of 37,000 applicants",
    date: "April, 2021",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-500" />,
    title: "LinkedIn CoachIn Mentorship",
    description: "Selected as one of the top 60 mentees",
    date: "April, 2022",
  },
  {
    icon: <Award className="w-6 h-6 text-yellow-500" />,
    title: "9th Amir Fatima UG Scholarship Award",
    description:
      "For academic excellence & exceptional extracurricular contributions",
    date: "December, 2022",
  },
  {
    icon: <Book className="w-6 h-6 text-green-500" />,
    title: "FOSS Overflow Mentee",
    organization: "IIT Bhilai",
    description: "Selected as one of 13 mentees out of 250 applicants",
    date: "December, 2021",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-500" />,
    title: "Google Developer Student Club Lead",
    organization: "IET Lucknow",
    description: "Selected as founder and lead",
    date: "April, 2021",
  },
  {
    icon: <Code className="w-6 h-6 text-purple-500" />,
    title: "CodeChef Snackdown",
    description: "Ranked 115th out of 3,820 participants in Round 1B",
    date: "October, 2021",
  },
  {
    icon: <Code className="w-6 h-6 text-purple-500" />,
    title: "ACM International Collegiate Programming Contest",
    description: "Team ranked 208th in Kanpur regionals",
    date: "August, 2021",
  },
];

export default function Achievements() {
  return (
    <section id="achievements">
      <h2 className="text-3xl font-bold mb-6">Achievements</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item relative pl-8">
              <div className="achievement-icon absolute left-0 top-0">
                {achievement.icon}
              </div>
              <div className="achievement-content pb-8">
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
                {achievement.organization && (
                  <p className="text-sm text-muted-foreground">
                    {achievement.organization}
                  </p>
                )}
                {achievement.description && (
                  <p className="mt-2 text-muted-foreground">
                    {achievement.description}
                  </p>
                )}
                <div className="flex items-center mt-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {achievement.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .achievement-item {
          position: relative;
        }
        .achievement-item::before {
          content: "";
          position: absolute;
          left: 12px;
          top: 24px;
          bottom: 0;
          width: 1px;
          background: orange;
        }
        .achievement-icon {
          background: white;
          border-radius: 50%;
          padding: 2px;
          z-index: 10;
        }
      `}</style>
    </section>
  );
}
