import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
                <p className="text-sm text-muted-foreground">Software Engineer</p>
              </div>
              <Badge>July 2024 - Present</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2"><strong>Role:</strong> Serving as a Software Engineer 1 (AMTS) in Billing and Metering Team, Service Cloud. Also, served as an intern in the Conversation Intelligence team, Service Cloud in 2023.</p>
            <p className="mb-2"><strong>TechStack:</strong> Mockito, PostgreSQL, REST APIs development in Java/Kotlin, JUnit, Amazon Web Services (AWS)</p>
            <p><strong>Tasks:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Developed and tested key functionalities of the Billing and Metering tool, including data integrity, error handling, and performance.</li>
              <li>Designed and executed functional test cases to ensure tool reliability.</li>
              <li>Optimized implementation and deployment pipeline for seamless integration.</li>
              <li>Implemented a spike on Salesforce KMS Key Rotation and enhanced the coverage of parent workflow of data export service.</li>
              <li>Solved open bugs to enhance the performance of the service.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">University of Massachusetts Lowell</h3>
                <p className="text-sm text-muted-foreground">Remote Research Intern</p>
              </div>
              <Badge>April 2024 - Present</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Federated Learning System for Vehicular Networks:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Building a federated learning system with heterogeneous computation power and mmWave communication, simulating dynamic vehicle movement and data transmission with path loss probabilities.</li>
              <li>Implementing model aggregation and synchronization to handle vehicle churn, ensuring continuous training and global model updates despite vehicles joining and leaving the network.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">Systems Lab, Indian Institute of Technology Delhi</h3>
                <p className="text-sm text-muted-foreground">Research Intern</p>
              </div>
              <Badge>February 2023 - July 2024</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Improving Performance of Video Processing Queries:</strong> Building a system to improve data pipelining and reduce stalls in video query processing.</li>
              <li><strong>Evaluation Section:</strong> Led the evaluation section to benchmark and compare performance of different research prototype systems such as Scanner and LightDB against our system based on Visual Road. Paper submitted.</li>
              <li><strong>Visual Data Analytics System:</strong> Built a system that uses a sequence of operations: Vehicle Detection (VD), License Plate Detection (LPD), and Optical Character Recognition (OCR) to extract and analyze license plate information from vehicle bounding boxes in video frames. The process is optimized using YOLO models for detection and EasyOCR/Tesseract for OCR.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">Edge Lab, Indian Institute of Technology Kharagpur</h3>
                <p className="text-sm text-muted-foreground">Remote Research Assistant</p>
              </div>
              <Badge>Oct 2023 - June 2024</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Custom Library for Robust Defense Against Model Poisoning in Federated Learning:</strong></p>
            <p>Developing a custom extension of the Flower library to enhance aggregation algorithms with defense mechanisms like anomaly detection and outlier filtering for mitigating poisoned updates in federated learning.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">Deciphered Lab, Indian Institute of Technology Bhilai</h3>
                <p className="text-sm text-muted-foreground">Research Intern</p>
              </div>
              <Badge>May 2021 - September 2022</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>PDF Security and its applications:</strong></p>
            <p>Analyse and Benchmark the NIST Light Weight Cryptography finalist&apos;s PDF encryption runtime against the current PDF encryption standard AES. Involved in pdf manipulation using iText library, executed java implementations of NIST ciphers and benchmarked their performance runtime.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">Google Summer of Code - KDE GCompris</h3>
                <p className="text-sm text-muted-foreground">Remote Student Developer</p>
              </div>
              <Badge>May 2022 - September 2022</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Addition of new educational activities to the software:</strong></p>
            <ul className="list-disc list-inside space-y-2">
              <li>Proposed to add three activities: Comparator, Programming Tux and Guess 24.</li>
              <li><strong>Comparator Activity:</strong> This activity aims to train children to understand the use different math symbols. Developed using QML(C++ framework) and Javascript. This activity is now published and available for public use.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}