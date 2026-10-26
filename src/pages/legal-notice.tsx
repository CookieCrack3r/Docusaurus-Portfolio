import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Footer from '@site/src/components/footer';
import Header from '@site/src/components/header';
import {profile} from '@site/src/data/profile';
import styles from './legal-notice.module.css';

/** Legal notice (German "Impressum"). Replace the placeholders with your own details before publishing. */
export default function LegalNotice(): ReactNode {
  return (
    <Layout title="Legal notice" noFooter>
      <Header />
      <main className={styles.page}>
        <h1>Legal notice</h1>
        <h2>Information according to § 5 DDG</h2>
        <p>
          {profile.name}
          <br />
          Gartenstraße 4
          <br />
          04938 Uebigau
        </p>
        <h2>Contact</h2>
        <p>
          E-mail: <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </main>
      <Footer />
    </Layout>
  );
}
