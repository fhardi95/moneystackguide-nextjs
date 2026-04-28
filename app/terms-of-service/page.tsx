import type { Metadata } from 'next'
import styles from '../static-pages.module.css'

export const metadata: Metadata = {
  title: 'Terms of Service — Money Stack Guide',
  description:
    'Money Stack Guide Terms of Service. By using our website you agree to these terms.',
  alternates: {
    canonical: 'https://moneystackguide.com/terms-of-service',
  },
}

export default function TermsOfServicePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.label}>Legal</p>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.subtitle}>
          Please read these terms carefully before using Money Stack Guide.
        </p>
        <p className={styles.updated}>Last updated: 20 April 2026</p>
      </header>

      <div className={styles.body}>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the website moneystackguide.com (&quot;the Site&quot;), you agree
          to be bound by these Terms of Service. If you do not agree to these terms, please do not
          use the Site.
        </p>

        <h2>2. Use of the Site</h2>
        <p>
          You may use the Site for lawful purposes only. You must not use the Site in any way that
          causes, or may cause, damage to the Site or impairment of the availability or
          accessibility of the Site.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content on this Site — including text, graphics, logos and images — is the property
          of Money Stack Guide and protected by UK copyright law. You may not reproduce, distribute
          or republish any content without our express written permission.
        </p>

        <h2>4. Financial Disclaimer</h2>
        <p>
          The content on this Site is provided for informational and educational purposes only. It
          does not constitute financial advice. We are not authorised or regulated by the Financial
          Conduct Authority (FCA) to provide personal financial advice.
        </p>
        <p>
          Always read the full terms and conditions of any financial product before applying. Your
          home may be repossessed if you do not keep up repayments on a mortgage. Credit is subject
          to status and eligibility. Investments can fall as well as rise and you may get back less
          than you invest.
        </p>

        <h2>5. Affiliate Links and Commission</h2>
        <p>
          Some links on this Site are affiliate links. When you click these links and apply for or
          purchase a product, we may receive a commission from the provider. This does not affect
          the price you pay or our editorial independence.
        </p>

        <h2>6. Accuracy of Information</h2>
        <p>
          We strive to ensure all information on this Site is accurate and up to date. However,
          financial products, rates and regulations change frequently. We cannot guarantee the
          accuracy or completeness of information at any given time. Always verify information
          directly with providers before making financial decisions.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Money Stack Guide shall not be liable for any
          indirect, incidental, special or consequential damages arising from your use of, or
          inability to use, this Site or its content.
        </p>

        <h2>8. Third-Party Links</h2>
        <p>
          This Site contains links to third-party websites. We are not responsible for the content,
          privacy practices or terms of those websites. Links do not constitute endorsement.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms of Service are governed by the laws of England and Wales. Any disputes shall
          be subject to the exclusive jurisdiction of the courts of England and Wales.
        </p>

        <h2>10. Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms of Service at any time. Continued use of the
          Site after changes constitutes acceptance of the revised terms.
        </p>

        <h2>11. Contact</h2>
        <p>
          For any queries regarding these terms, please contact us at legal@moneystackguide.com.
        </p>
      </div>
    </div>
  )
}
