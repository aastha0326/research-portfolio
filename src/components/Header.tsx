import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Aastha Chauhan
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#about" className="hover:text-orange">
                About
              </Link>
            </li>
            <li>
              <Link href="#experience" className="hover:text-orange">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#publications" className="hover:text-orange">
                Publications
              </Link>
            </li>
            <li>
              <Link href="#achievements" className="hover:text-orange">
                Achievements
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
