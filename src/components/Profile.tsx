"use client";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Linkedin } from "lucide-react";
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
                className="rounded-full w-48 h-48 object-cover mb-4 border border-orange"
                width={192}
                height={192}
              />
              <h1 className="text-3xl font-bold mb-2 text-center">
                Aastha Chauhan
              </h1>
              <p className="text-center text-muted-foreground mb-4">
                Expert in Paper Airplane Aerodynamics
              </p>
              <p className="text-center mb-4">Dunder Mifflin Paper Company</p>
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
                    <Mail className="mr-2 h-4 w-4" /> Email
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
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border border-orange"
                  size="sm"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Resume
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-4xl font-bold mb-4">About me</h2>
              <p className="mb-4 text-lg font-medium">
                I am Aastha Chauhan, the world&apos;s foremost expert on the
                aerodynamic properties of paper airplanes. It&apos;s a field
                that&apos;s been sorely neglected, if you ask me. But I&apos;m
                here to change that. I&apos;ve spent countless hours in my lab,
                crafting the perfect paper airplane. From the type of paper to
                the folding technique, I&apos;ve got it all figured out. My
                research has led to groundbreaking discoveries, like the
                revolutionary &apos;Scott Fold&apos; and the &apos;Michael
                Missile.&apos;
              </p>
              <p className="mb-4 text-lg font-medium">
                I&apos;m passionate about sharing my knowledge with the world.
                So whether you&apos;re a seasoned paper airplane enthusiast or
                just looking for a fun way to pass the time, I invite you to
                join me on my incredible journey of paper airplane research.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Interests</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Paper Airplane Design</li>
                    <li>Aerodynamics</li>
                    <li>Office Management</li>
                    <li>Improvisational Comedy</li>
                    <li>Team Building</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
