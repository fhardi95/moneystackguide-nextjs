import type { Metadata } from 'next'
import styles from '../static-pages.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy — Money Stack Guide',
  description:
    'Money Stack Guide Privacy Policy. How we collect, use and protect your personal data in compliance with UK GDPR and the Data Protection Act 2018.',
  alternates: {
    canonical: 'https://moneystackguide.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.label}>Legal</p>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.subtitle}>How we collect, use and protect your personal data.</p>
        <p className={styles.updated}>Last updated: 20 April 2026</p>
      </header>

      <div className={styles.body}>
        <h2>1. Who We Are</h2>
        <p>
          Money Stack Guide (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the website
          moneystackguide.com. We are the data controller responsible for your personal data
          collected through this website.
        </p>
        <p>
          For any privacy-related enquiries, please contact us at privacy@moneystackguide.com.
        </p>

        <h2>2. What Data We Collect</h2>
        <p>We may collect the following categories of personal data:</p>

        <h3>Data you provide directly</h3>
        <ul>
          <li>Name and email address when you subscribe to our newsletter</li>
          <li>
            Name, email address and message content when you contact us via our contact form
          </li>
          <li>Any other information you choose to include in communications with us</li>
        </ul>

        <h3>Data collected automatically</h3>
        <ul>
          <li>IP address and approximate geographic location</li>
          <li>Browser type, version and operating system</li>
          <li>Pages visited, time spent on pages and navigation path</li>
          <li>Referring website or search query that brought you to our site</li>
          <li>Device type and screen resolution</li>
        </ul>

        <h2>3. How We Use Your Data</h2>
        <ul>
          <li>To send you our newsletter if you have subscribed</li>
          <li>To respond to enquiries submitted via our contact form</li>
          <li>To analyse website usage and improve our content</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>4. Legal Basis for Processing</h2>
        <p>
          We process your data on the following legal bases under UK GDPR: consent (for newsletter
          subscriptions), legitimate interests (for analytics and site improvement), and legal
          obligation (where required by law).
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We retain your data only as long as necessary for the purposes set out in this policy.
          Newsletter subscribers&apos; data is retained until you unsubscribe. Contact form
          submissions are retained for up to two years.
        </p>

        <h2>6. Your Rights</h2>
        <p>Under UK GDPR, you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Rectification of inaccurate data</li>
          <li>Erasure of your data in certain circumstances</li>
          <li>Restriction of processing</li>
          <li>Data portability</li>
          <li>Object to processing based on legitimate interests</li>
          <li>Withdraw consent at any time</li>
        </ul>

        <h2>7. Cookies</h2>
        <p>
          We use cookies for analytics purposes. You can control cookie preferences through your
          browser settings.
        </p>

        <h2>8. Third-Party Services</h2>
        <p>
          We use Google Analytics to understand how visitors use our site. This service may set
          cookies and collect data about your visit. We also use affiliate tracking links — clicking
          these may result in cookies being set by third-party financial providers.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post the updated policy on
          this page with a revised date. Continued use of our website following changes constitutes
          acceptance of the updated policy.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          For privacy-related queries or to exercise your rights, please contact
          privacy@moneystackguide.com. You also have the right to lodge a complaint with the
          Information Commissioner&apos;s Office (ICO) at ico.org.uk.
        </p>
      </div>
    </div>
  )
}
