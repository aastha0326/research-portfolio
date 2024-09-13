export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Aastha Chauhan. All rights reserved.
      </div>
    </footer>
  );
}
