import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Contact from '@site/src/components/contact';
import Footer from '@site/src/components/footer';
import Header from '@site/src/components/header';
import Hero from '@site/src/components/hero';
import MyProjectHighlights from '@site/src/components/my-project-highlights';
import MySkills from '@site/src/components/my-skills';
import {profile} from '@site/src/data/profile';

export default function Home(): ReactNode {
  return (
    <Layout description={`Portfolio of ${profile.name}, ${profile.jobTitle}`} noFooter>
      <Header />
      <main>
        <Hero />
        <MySkills />
        <MyProjectHighlights />
        <Contact />
      </main>
      <Footer />
    </Layout>
  );
}
