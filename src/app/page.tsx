import { Metadata } from 'next'
import Header from '@/components/Header'
import Profile from '@/components/Profile'
import Publications from '@/components/Publications'
import Achievements from '@/components/Achievements'
import Footer from '@/components/Footer'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Experience from '@/components/Experience'
import Volunteer from '@/components/Volunteer'

export const metadata: Metadata = {
  title: 'Aastha Chauhan - Research Portfolio',
  description: 'Research portfolio of Aastha Chauhan, Software Engineer and Researcher specializing in federated learning and video processing.',
}

export default function Home() {
  return (
    <div className="min-h-screen text-foreground dark:bg-gray-900 dark:text-white">
      <Header />
      <main>
        <section className="py-12 dark:bg-gray-900">
          <MaxWidthWrapper>
            <Profile />
          </MaxWidthWrapper>
        </section>
        <section className="bg-gray-50 py-12 dark:bg-gray-800">
          <MaxWidthWrapper>
            <Experience />
          </MaxWidthWrapper>
        </section>
        <section className="py-12 dark:bg-gray-900">
          <MaxWidthWrapper>
            <Publications />
          </MaxWidthWrapper>
        </section>
        <section className="bg-gray-50 py-12 dark:bg-gray-800">
          <MaxWidthWrapper>
            <Achievements />
          </MaxWidthWrapper>
        </section>
        <section className="pt-12 dark:bg-gray-900">
          <MaxWidthWrapper>
            <Volunteer />
          </MaxWidthWrapper>
        </section>
      </main>
      <Footer />
    </div>
  )
}
