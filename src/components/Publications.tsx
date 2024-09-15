import { Card, CardContent } from "@/components/ui/card";

const publications = [
  {
    title: "GPU Memory Management for Video Analytics System",
    authors: "Ramneek Singh, Sourav Bharti, Aastha Chauhan and Abhilash Jindal",
    journal: "Under review at a conference",
    url: "#",
  },
  {
    title: "Harnessing Lightweight Ciphers for PDF Encryption",
    authors: "Aastha Chauhan, Deepa Verma",
    journal: "Preprint available here",
    url: "https://drive.google.com/file/d/1d3tduNIb2pzxB11uUaY6bhEZeMgxWxqM/view",
  },
  {
    title: "AI Agents as Software Testers",
    authors: "Aastha Chauhan and Dhruv Kumar",
    journal: "Under review at a conference",
    url: "#",
  },
  {
    title:
      "A Novel Approach to Railway Track Safety: Crack and Tilt Detection using ESP32 and Cloud, International Journal of Emerging Technologies and Innovative Research",
    authors:
      "Aastha Chauhan, Mayank Rai, Priya Narayan Pal, Satyam Maurya and Satyendra Kr Swarnkar",
    journal:
      "International Journal of Emerging Technologies and Innovative Research ISSN:2349-5162",
    url: "https://www.jetir.org/papers/JETIR2405D53.pdf",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Recent Publications</h2>
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{pub.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {pub.authors}
              </p>
              {index === 1 ? (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange text-sm mb-2"
                >
                  {pub.journal}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground mb-2">
                  {pub.journal}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
