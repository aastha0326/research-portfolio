"use client";
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
                className="rounded-full w-48 h-48 object-cover mb-4 border border-lav dark:border-highlight"
                width={192}
                height={192}
              />
              <h1 className="text-3xl font-bold mb-2 text-center">
                Aastha Chauhan
              </h1>
              <p className="text-center text-muted-foreground mb-4">
                Sofware Engineer at{" "}
                <a
                  href="https://www.salesforce.com/in/"
                  className="text-lav dark:text-highlight"
                  target="_blank"
                >
                  Salesforce
                </a>
              </p>
              <p className="text-center text-muted-foreground mb-4">
                Research Assistant at <br />
                <a
                  href="https://www.uml.edu/"
                  className="text-lav dark:text-highlight"
                  target="_blank"
                >
                  University of Massachusetts Lowell
                </a>
              </p>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-4xl font-bold mb-4">About me</h2>
              <p className="mb-4 text-lg font-medium">
                I am a passionate researcher and software engineer with a love
                for solving real-world problems through technology. Currently, I
                work at{" "}
                <a
                  href="https://www.salesforce.com/in/"
                  className="text-lav dark:text-highlight"
                  target="_blank"
                >
                  Salesforce
                </a>{" "}
                and collaborate with esteemed research labs, including those led
                by Prof.{" "}
                <a
                  href="https://www.uml.edu/engineering/electrical-computer/faculty/tseng-lewis.aspx"
                  className="text-lav dark:text-highlight"
                  target="_blank"
                >
                  Lewis Tseng
                </a>{" "}
                at the{" "}
                <a
                  href="https://www.uml.edu/"
                  className="text-lav dark:text-highlight"
                  target="_blank"
                >
                  University of Massachusetts Lowell, USA
                </a>
                , Prof.{" "}
                <a
                  href="https://abhilash-jindal.com/"
                  className="text-lav dark:text-highlight"
                  target="_blank"
                >
                  Abhilash Jindal
                </a>{" "}
                at{" "}
                <a
                  href="https://home.iitd.ac.in/"
                  className="text-lav dark:text-highlight"
                  target="_blank"
                >
                  IIT Delhi
                </a>
                , Prof.{" "}
                <a
                  href="https://www.iitbhilai.ac.in/index.php?pid=subhajit"
                  className="text-lav dark:text-highlight"
                  target="_blank"
                >
                  Subhajit Sidhanta
                </a>{" "}
                at
                <a
                  href="https://www.iitkgp.ac.in/"
                  className="text-lav dark:text-highlight"
                  target="_blank"
                >
                  {" "}
                  IIT Kharagpur
                </a>
                , and Prof.{" "}
                <a
                  href="https://www.iitbhilai.ac.in/index.php?pid=dhiman"
                  className="text-lav dark:text-highlight"
                  target="_blank"
                >
                  Dhiman Saha
                </a>{" "}
                at{" "}
                <a
                  href="https://www.iitbhilai.ac.in/"
                  className="text-lav dark:text-highlight"
                  target="_blank"
                >
                  IIT Bhilai
                </a>
                . My areas of interest include software engineering, systems,
                machine learning, federated learning, video analytics, and
                security, all driven by curiosity and a desire to create impact.
              </p>
              <p className="mb-4 text-lg font-medium">
                I have been awarded the{" "}
                <a
                  href="https://we.talentsprint.com/"
                  className="text-lav dark:text-highlight"
                  target="_blank"
                >
                  Google Women Engineers Scholarship
                </a>
                . Additionally, I was selected as a{" "}
                <a
                  href="https://summerofcode.withgoogle.com/"
                  className="text-lav dark:text-highlight"
                  target="_blank"
                >
                  Google Summer of Code
                </a>{" "}
                student and received the Dan-Kohn Scholarship by{" "}
                <a
                  href="https://www.linuxfoundation.org/"
                  className="text-lav dark:text-highlight"
                  target="_blank"
                >
                  Linux Foundation
                </a>{" "}
                for my contributions to open-source softwares.
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
