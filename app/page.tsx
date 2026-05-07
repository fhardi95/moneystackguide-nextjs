import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { getFeaturedArticles, getRecentArticles, categories } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import Newsletter from '@/components/Newsletter'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Best Credit Cards 2026 — MoneyStack Guide | Finance Guides',
  description:
    'Find the best credit cards in the UK for 2026. Compare cashback, 0% balance transfer and savings accounts — MoneyStack Guide updated monthly.',
  alternates: {
    canonical: 'https://www.moneystackguide.com',
  },
  openGraph: {
    title: 'Best Credit Cards UK 2026 — Money Stack Guide | Personal Finance Comparisons',
    description:
      'Compare the best credit cards, ISAs, mortgages and savings accounts in the UK. Expert guides updated monthly — trusted by 50,000+ readers.',
    url: 'https://www.moneystackguide.com',
    type: 'website',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best credit cards in the UK in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best credit cards in the UK in 2026 depend on your spending habits. For cashback, the American Express Platinum Cashback Everyday Card is a top pick. For 0% balance transfers, Barclaycard and MBNA consistently offer long interest-free periods. For rewards and travel, the British Airways American Express card offers strong Avios earn rates. Our full comparison guide reviews eligibility, fees and rates side by side.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I choose the best credit card for my needs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To choose the best credit card, consider what you want from it: cashback on everyday spending, 0% interest on purchases or balance transfers, travel rewards, or building your credit score. Check your credit rating before applying, compare representative APRs, and look at any annual fees against the benefits offered. Our guides break each category down so you can find the right fit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are cashback credit cards worth it in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — cashback credit cards can be worth it if you pay your balance in full each month and avoid interest charges. Cards like the Amex Platinum Cashback Everyday offer up to 1% cashback with no annual fee. If you carry a balance, the interest will outweigh any cashback earned, so they work best for disciplined spenders.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a 0% balance transfer credit card?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 0% balance transfer credit card lets you move existing credit card debt to a new card and pay 0% interest for a set promotional period — typically 12 to 29 months in the UK. This can save you significant money in interest while you pay down the debt. A one-off transfer fee (usually 1–3%) usually applies. Always aim to clear the balance before the 0% period ends.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does applying for a credit card affect my credit score?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, each full credit card application leaves a hard search on your credit file, which can temporarily lower your score by a few points. Using an eligibility checker (soft search) first lets you see your approval odds without affecting your score. Multiple applications in a short period can look risky to lenders, so it is best to apply selectively.',
      },
    },
  ],
}

interface Stat {
  num: string
  label: string
}

const stats: Stat[] = [
  { num: '200+', label: 'Finance Guides' },
  { num: '£2.4M', label: 'Saved by Readers' },
  { num: '4.9★', label: 'Trust Score' },
  { num: 'Weekly', label: 'Updated Picks' },
]

export default function HomePage() {
  const featured = getFeaturedArticles()
  const recent = getRecentArticles(6)

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className={styles.hero} aria-label="Site introduction">
        <div className={styles.heroBadge}>
          <span className={styles.dot} aria-hidden="true" />
          Trusted by 50,000+ UK readers
        </div>

        <h1 className={styles.heroTitle}>
          Best Credit Cards &amp; Personal Finance Guides for the UK in 2026
        </h1>

        <p className={styles.heroSub}>
          Compare the best credit cards, ISAs, savings accounts, mortgages and student loans in the
          UK. Our expert-reviewed guides are updated monthly so you always get accurate, actionable
          advice — and keep more of your money.
        </p>

        <nav className={styles.heroCtas} aria-label="Quick navigation">
          <Link href="/article/best-credit-cards-uk" className="btn-primary">
            Best Credit Cards 2026
          </Link>
          <Link href="/category/credit-cards" className="btn-outline">
            Browse All Guides →
          </Link>
        </nav>
      </section>

      {/* STATS */}
      <div className={styles.statsBar} role="list" aria-label="Site statistics">
        {stats.map((s) => (
          <div key={s.label} className={styles.stat} role="listitem">
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="container">

        {/* SEO INTRO TEXT — keyword-rich body copy */}
        <section className="section" aria-labelledby="intro-heading">
          <h2 className="section-title" id="intro-heading">
            Compare the Best Credit Cards in the UK
          </h2>
          <div className={styles.introText}>
            <p>
              Finding the <strong>best credit card in the UK</strong> can save you hundreds of
              pounds a year — whether you want <strong>0% balance transfers</strong>,{' '}
              <strong>cashback on everyday spending</strong>, or{' '}
              <strong>travel rewards and air miles</strong>. Money Stack Guide compares the top
              credit cards from Amex, Barclaycard, MBNA, Virgin Money and more, so you can choose
              with confidence.
            </p>
            <p>
              Beyond credit cards, our guides cover every corner of UK personal finance: high-interest
              savings accounts, stocks &amp; shares ISAs, first-time buyer mortgages, and student
              loan repayment strategies. All content is written by finance specialists, checked for
              accuracy, and refreshed every month.
            </p>
          </div>
        </section>

        {/* FEATURED GUIDES */}
        <section className="section" style={{ paddingTop: 0 }} aria-labelledby="featured-heading">
          <p className="section-label">Editor&apos;s Picks</p>
          <h2 className="section-title" id="featured-heading">
            Featured Money Guides
          </h2>
          <div className={styles.featuredGrid}>
            {featured.map((article) => (
              <ArticleCard key={article.slug} article={article} featured />
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section
          className="section"
          style={{ paddingTop: 0 }}
          aria-labelledby="categories-heading"
        >
          <p className="section-label">Browse by Topic</p>
          <h2 className="section-title" id="categories-heading">
            All Finance Categories
          </h2>
          <nav aria-label="Finance categories">
            <ul className={styles.catGrid} style={{ listStyle: 'none' }}>
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} className={styles.catCard}>
                    <span className={styles.catIcon} aria-hidden="true">
                      {cat.icon}
                    </span>
                    <span className={styles.catName}>{cat.name}</span>
                    <span className={styles.catCount}>{cat.count} guides</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {/* RECENT ARTICLES */}
        <section className="section" style={{ paddingTop: 0 }} aria-labelledby="latest-heading">
          <p className="section-label">Latest</p>
          <h2 className="section-title" id="latest-heading">
            Popular Money Guides
          </h2>
          <div className={styles.articlesGrid}>
            {recent.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/category/credit-cards" className="btn-outline">
              View All Articles →
            </Link>
          </div>
        </section>

        {/* FAQ — replaces duplicate topic links, adds schema-eligible Q&A content */}
        <section className="section" style={{ paddingTop: 0 }} aria-labelledby="faq-heading">
          <p className="section-label">Quick Answers</p>
          <h2 className="section-title" id="faq-heading">
            Frequently Asked Questions About UK Credit Cards
          </h2>
          <div className={styles.faqList}>
            {faqSchema.mainEntity.map((item, i) => (
              <details key={i} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{item.name}</summary>
                <p className={styles.faqAnswer}>{item.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </section>

      </div>

      <Newsletter />
    </>
  )
}
