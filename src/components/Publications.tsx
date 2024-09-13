import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const publications = [
  {
    title:
      "A Novel Approach to Railway Track Safety: Crack and Tilt Detection using ESP32 and Cloud, International Journal of Emerging Technologies and Innovative Research",
    authors: "Aastha Chauhan, Mayank Rai, Priya Narayan Pal, Satyam Maurya and Satyendra Kr Swarnkar",
    journal: "International Journal of Emerging Technologies and Innovative Research ISSN:2349-5162",
    url: "https://www.jetir.org/papers/JETIR2405D53.pdf",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="mb-12l">
      <h2 className="text-2xl font-bold mb-4">Recent Publications</h2>
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{pub.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {pub.authors}
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                {pub.journal}
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href={pub.url} target="_blank" rel="noopener noreferrer">
                  View Publication <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
