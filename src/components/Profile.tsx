"use client";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, StickyNote } from "lucide-react";
import Image from "next/image";

export default function Profile() {
  return (
    <section className="mb-12">
      <div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex flex-col items-center">
              <Image
                src="/assets/aastha_pic.webp"
                alt="Aastha Chauhan"
                className="rounded-full w-48 h-48 object-cover mb-4 border border-orange "
                width={192}
                height={192}
              />
              <h1 className="text-3xl font-bold mb-2 text-center">
                Aastha Chauhan
              </h1>
              <p className="text-center text-muted-foreground mb-4">
                Sofware Engineer at Salesforce
              </p>
              <p className="text-center mb-4">
                Research Assistant at University of Massachusetts Lowell
              </p>
              <div className="mt-6 flex flex-wrap gap-4 max-w-xl">
                <Button
                  onClick={() =>
                    window.open("mailto:aastha.chauhan01@gmail.com")
                  }
                  className="border border-orange"
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
                  className="border border-orange"
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
                  className="border border-orange"
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
                  className="border border-orange mr-1"
                  size="sm"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <StickyNote className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-4xl font-bold mb-4">About me</h2>
              <p className="mb-4 text-lg font-medium">
                I am a passionate researcher and software engineer with a love
                for solving real-world problems through technology. Currently, I
                work at Salesforce and collaborate with esteemed research labs,
                including those led by Prof. Lewis Tseng at the{" "}
                <a
                  href="https://www.uml.edu/engineering/electrical-computer/faculty/tseng-lewis.aspx"
                  className="text-orange"
                >
                  University of Massachusetts Lowell USA
                </a>
                , Prof.{" "}
                <a href="https://abhilash-jindal.com/" className="text-orange">
                  Abhilash Jindal
                </a>{" "}
                at{" "}
                <a href="https://home.iitd.ac.in/" className="text-orange">
                  IIT Delhi
                </a>
                , Prof.{" "}
                <a
                  href="https://www.iitbhilai.ac.in/index.php?pid=subhajit"
                  className="text-orange"
                >
                  Subhajit Sidhanta
                </a>{" "}
                at
                <a href="https://www.iitkgp.ac.in/" className="text-orange">
                  {" "}
                  IIT Kharagpur
                </a>
                , and Prof.{" "}
                <a
                  href="https://www.iitbhilai.ac.in/index.php?pid=dhiman"
                  className="text-orange"
                >
                  Dhiman Saha
                </a>{" "}
                at{" "}
                <a href="https://www.iitbhilai.ac.in/" className="text-orange">
                  IIT Bhilai
                </a>
                . My areas of interest include software engineering, systems,
                machine learning, federated learning, video analytics, and
                security, all driven by curiosity and a desire to create impact.
              </p>
              <p className="mb-4 text-lg font-medium">
                I have been awarded the Google Women Engineers Scholarship.
                Additionally, I was selected as a Google Summer of Code student
                and received the Dan-Kohn Scholarship by Linux Foundation for my
                contributions to open-source software.
              </p>
              <p className="mb-4 text-lg font-medium">
                Outside of work, I enjoy mentoring individuals and leading
                initiatives focused on empowering women in technology. With a
                deep passion for learning and advancing technology, I am excited
                for the opportunities and challenges that lie ahead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
