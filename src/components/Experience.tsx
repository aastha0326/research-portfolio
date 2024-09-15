import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section id="experience" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Experiences</h2>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">Salesforce</h3>
                <p className="text-sm text-muted-foreground">
                  Software Engineer
                </p>
              </div>
              <Badge>July 2024 - Present</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              Serving as a Software Engineer 1 (AMTS) in Billing and Metering
              Team, Service Cloud.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">
                  University of Massachusetts Lowell
                </h3>
                <p className="text-sm text-muted-foreground">Research Assistant</p>
              </div>
              <Badge>April 2024 - Present</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Leading research efforts on developing federated learning system
              for Vehicular Networks with heterogeneous computation power and
              mmWave communication.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">
                  Systems Lab, Indian Institute of Technology Delhi
                </h3>
                <p className="text-sm text-muted-foreground">Research Intern</p>
              </div>
              <Badge>February 2023 - July 2024</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Contributed to projects such as{" "}
              <a
                href="https://abhilash-jindal.com/assets/popper"
                className="text-orange"
                target="_blank"
              >
                Popper
              </a>
              , and developing a Visual Data Analytics System that optimizes
              queries for processing video data, specifically targeting license
              plate recognition in real-time.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">
                  Edge Lab, Indian Institute of Technology Kharagpur
                </h3>
                <p className="text-sm text-muted-foreground">
                  Research Assistant
                </p>
              </div>
              <Badge>Oct 2023 - June 2024</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Developed a custom extension of the Flower library for defense
              mechanism against model poisoning attacks on aggregations in
              Federated Learning.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">
                  Deciphered Lab, Indian Institute of Technology Bhilai
                </h3>
                <p className="text-sm text-muted-foreground">Research Intern</p>
              </div>
              <Badge>May 2021 - September 2022</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Analyzed and benchmarked the NIST Lightweight Cryptography
              finalist&apos;s PDF encryption runtime against the current PDF
              encryption standard (AES).
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">
                  Google Summer of Code - KDE GCompris
                </h3>
                <p className="text-sm text-muted-foreground">
                  Remote Student Developer
                </p>
              </div>
              <Badge>May 2022 - September 2022</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Developed the{" "}
              <a
                href="https://www.gcompris.net/screenshots-en.html#comparator"
                target="_blank"
                className="text-orange"
              >
                Comparator Activity
              </a>
              , aimed at training children to understand the use of different
              math symbols.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
