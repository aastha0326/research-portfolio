"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, StickyNote, Lightbulb } from "lucide-react";

const volunteerExperiences = [
  {
    organization: "Scaler By InterviewBit",
    role: "Data Structures & Algorithms, Teaching Assistant",
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
    <section id="volunteer-experience">
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
      <div className="flex justify-center flex-col items-center mt-10 mb-5">
        <div className="mt-6 flex flex-wrap gap-4 max-w-xl">
          <Button
            onClick={() => window.open("mailto:aastha.chauhan01@gmail.com")}
            className="border border-lav dark:border-highlight"
            variant="outline"
            size="sm"
            asChild
          >
            <a
              href="aastha.chauhan01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            className="border border-lav dark:border-highlight"
            size="sm"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/aastha-chauhan-b095661b5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            className="border border-lav dark:border-highlight"
            size="sm"
            asChild
          >
            <a
              href="https://github.com/aastha0326"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            className="border border-lav dark:border-highlight mr-1"
            size="sm"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/1NMLZ2yOrNunuc8Hnanq76ZwCIdl8f0j1/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StickyNote className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="mt-5 flex items-center">
          <Lightbulb className="h-4 w-4 text-lav dark:text-highlight" />
          <p className="text-sm">The best way to reach me is via email</p>
        </div>
      </div>
    </section>
  );
}
