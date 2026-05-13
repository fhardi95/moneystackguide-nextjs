export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  categoryName: string
  readTime: string
  date: string
  featured: boolean
  icon: string
  gradient: string
  metaDescription: string
  content: string
}

export interface Category {
  slug: string
  name: string
  icon: string
  count: number
}

const categoryDefs: Omit<Category, 'count'>[] = [
  { slug: 'credit-cards', name: 'Credit Cards', icon: '💳' },
  { slug: 'student-loans', name: 'Student Loans', icon: '🎓' },
  { slug: 'investing', name: 'Investing', icon: '📈' },
  { slug: 'mortgages', name: 'Mortgages', icon: '🏠' },
  { slug: 'budgeting', name: 'Budgeting', icon: '💰' },
  { slug: 'savings', name: 'Savings', icon: '🏦' },
]

export const articles: Article[] = [

  {
    slug: 'best-credit-cards-uk',
    title: 'Best Credit Cards UK 2026 — 0% Interest, Cashback and Rewards Compared',
    excerpt: 'We analysed 40+ UK credit cards across cashback, travel rewards, 0% purchase periods and credit building to find the best options for every wallet type in 2026.',
    category: 'credit-cards',
    categoryName: 'Credit Cards',
    readTime: '11 min read',
    date: 'May 10, 2026',
    featured: true,
    icon: '💳',
    gradient: 'linear-gradient(135deg,#1a1224,#2a1040)',
    metaDescription: 'Compare the best UK credit cards of 2026. Find the top cashback, 0% purchase, balance transfer and rewards cards — expert-reviewed and updated monthly.',
    content: `## Why the Right Credit Card Genuinely Matters

Most people treat their credit card as an afterthought — a fallback for when their current account runs low. That is an expensive mistake. The difference between a mediocre card and the right one can easily be £300 to £500 a year, whether through cashback you are not earning, interest you are paying unnecessarily, or foreign transaction fees quietly draining your travel budget.

The UK credit card market is one of the most competitive in the world. There are currently over 100 personal credit cards available, and the gap between the best and worst deals is enormous. A 0% purchase card can give you up to 27 months to pay off a big purchase without a penny of interest. A good cashback card can return 1% to 5% on everything you spend. A balance transfer card can freeze existing debt and give you time to clear it on your terms.

This guide cuts through the noise. We have looked at every major card available in the UK right now and grouped them by what they are actually good for. We will tell you who each card suits, what the catches are, and how to avoid the mistakes that turn a good deal into an expensive one.

> **Quick Summary**
>
> — Best cashback card: **American Express Platinum Cashback Everyday** (up to 1% ongoing, no fee)
> — Best 0% purchase card: **Barclaycard Avios Plus** (up to 27 months 0%)
> — Best balance transfer: **Virgin Money** (up to 29 months 0%, 1.99% fee)
> — Best for travel: **Chase UK** (no FX fees, 1% cashback)
> — Best for bad credit: **Capital One Classic** (accessible approval, low limit)
> — Best rewards: **Amex Preferred Rewards Gold** (20,000 bonus Membership Rewards points)

---

## How We Chose These Cards

We did not simply list cards with the highest headline rates. A 5% cashback offer is meaningless if it applies only in the first three months and drops to 0.25% thereafter. A 30-month 0% deal is a trap if the representative APR afterwards is 34.9%.

Our selection criteria were:

1. **Total value over 12 months** — not just the headline offer
2. **Transparency of terms** — no buried catches in the small print
3. **Realistic approval odds** — cards that are actually accessible to the people they claim to suit
4. **After-offer value** — what happens when the introductory period ends
5. **Real-world usability** — app quality, customer service, acceptance rate

We also checked eligibility requirements carefully. Every card we recommend is available to UK residents aged 18 or over. Some require good or excellent credit; we have flagged this clearly.

---

## Best Cashback Credit Cards UK 2026

Cashback cards are the most straightforward way to get value from a credit card. You spend, you earn a percentage back, it lands in your account. No points to redeem, no expiry dates, no airline websites to navigate.

### American Express Platinum Cashback Everyday — Best Free Cashback Card

This is the best no-annual-fee cashback card available in the UK. It pays 5% cashback in your first three months (up to £100), then 0.5% on spending up to £10,000 per year and 1% on anything above that. If you spend £12,000 per year — roughly £1,000 a month — you will earn around £70 in cashback annually without paying a penny in fees.

The main limitation is acceptance. American Express is not accepted everywhere, particularly at smaller independent shops and some supermarkets. Most people use it as a secondary card alongside a Visa or Mastercard for everyday spending.

**Key details:**
- Annual fee: None
- Cashback rate: 5% for 3 months (up to £100), then 0.5%–1%
- Minimum income: £20,000
- Representative APR: 30.7% variable
- Requires: Good to excellent credit

### Chase UK — Best Cashback Visa

Chase entered the UK market in 2021 and immediately shook up the cashback space. Its credit card offers a compelling ongoing rate with no foreign transaction fees and broad Visa acceptance. If Amex acceptance is a concern for you, Chase is the more practical cashback option. It works everywhere Visa is accepted, which is essentially everywhere in the UK and abroad.

**Key details:**
- Annual fee: None
- Cashback rate: 1% on most spending
- No foreign transaction fees
- Representative APR: 29.8% variable

### Santander All in One Credit Card — Best for Consistent Spenders

The Santander All in One pays 0.5% cashback on all spending and includes a 0% balance transfer offer, making it genuinely useful for people who want a single card that does several things adequately. The £3 monthly fee (£36 per year) means you need to spend at least £7,200 annually to break even on cashback alone, so it suits people with higher monthly outgoings.

---

## Best 0% Purchase Credit Cards UK 2026

A 0% purchase card lets you spend now and pay later — without interest — for a defined introductory period. They are ideal for planned large purchases: a new sofa, a boiler replacement, a laptop, home improvements. The key discipline is setting up a direct debit to clear the balance before the 0% period ends.

### Barclaycard Avios Plus — Best 0% Purchase Period

Barclaycard currently offers one of the longest 0% purchase periods in the UK market at up to 27 months. The card also earns Avios points on spending (1.5 Avios per £1), has no foreign transaction fees, and comes with a relatively reasonable ongoing APR compared to some competitors.

The annual fee of £20 is worth paying if you are planning a large purchase. On a £3,000 purchase spread over 24 months, the interest saving versus a standard credit card at 22% APR is around £720. The £20 fee is trivial in that context.

**Key details:**
- 0% on purchases: Up to 27 months
- Annual fee: £20
- Ongoing APR: 23.9% variable
- Avios: 1.5 per £1 spent
- No FX fees

### NatWest Purchase Card — Best 0% With No Fee

For those who want a long 0% period without any annual fee, the NatWest Purchase Card offers up to 23 months at 0% on purchases. It is more straightforward than the Barclaycard option — no rewards, no frills — but the absence of a fee makes it the better choice if you just want to spread a purchase cost without paying for extras you will not use.

**Key details:**
- 0% on purchases: Up to 23 months
- Annual fee: None
- Ongoing APR: 24.9% variable
- Requires: Good credit history

### What to Watch Out For With 0% Cards

The most common and costly mistake with 0% purchase cards is missing the end date. When the introductory period expires, the full APR applies immediately to any remaining balance. On £2,000 at 24.9% APR, that is nearly £500 in interest per year.

Set a calendar reminder for two months before your 0% period ends. Either clear the balance, transfer it to another 0% card, or have a plan in place. Never rely on remembering.

---

## Best Balance Transfer Credit Cards UK 2026

A balance transfer card moves existing credit card debt onto a new card, usually at 0% interest for a set period. This is one of the most powerful debt management tools available in the UK, and it costs very little if you choose the right card.

### Virgin Money Balance Transfer Card — Best Long 0% Period

Virgin Money consistently offers one of the longest 0% balance transfer periods in the UK market — up to 29 months at 0% on balance transfers made within the first 60 days. The transfer fee is 1.99%, which on a £5,000 balance works out to £99.50 — a reasonable price for nearly two and a half years of interest-free debt repayment.

If you are currently paying 22% APR on £5,000 of credit card debt, you are paying around £1,100 per year in interest. Transferring to a Virgin 0% card costs £99.50 once and then nothing for 29 months. The maths is straightforward.

**Key details:**
- 0% balance transfer: Up to 29 months
- Transfer fee: 1.99%
- Ongoing APR: 22.9% variable
- Transfer must be completed within 60 days of opening

### Barclaycard Platinum — Best No-Fee Balance Transfer

If you want to avoid the transfer fee entirely, Barclaycard Platinum has historically offered 0% balance transfer periods of up to 18 months with no fee. The 0% window is shorter, but for smaller balances that you are confident of clearing within 18 months, avoiding the fee makes sense.

**When a balance transfer fee is worth paying:**

| Balance | 1.99% Fee | Annual Interest Saved (at 22% APR) | Break-even |
|---|---|---|---|
| £1,000 | £19.90 | £220 | ~5 weeks |
| £3,000 | £59.70 | £660 | ~5 weeks |
| £5,000 | £99.50 | £1,100 | ~5 weeks |
| £10,000 | £199.00 | £2,200 | ~5 weeks |

The fee is almost always worth paying. The break-even point is roughly five weeks regardless of balance size.

---

## Best Travel Credit Cards UK 2026

Foreign transaction fees are one of the most unnecessary costs in personal finance. Most standard UK credit cards charge 2.95% to 3% on every overseas transaction. On a £2,000 holiday, that is £60 in fees for doing nothing unusual. Travel credit cards eliminate this entirely and often add rewards on top.

### Chase UK — Best All-Round Travel Card

Chase has no foreign transaction fees, earns 1% cashback on overseas spending, and has a clean app that makes it easy to track spending abroad. It also has no annual fee. For most UK travellers, it is the best single card to carry abroad.

### Barclaycard Avios Plus — Best for Frequent Flyers

If you travel regularly and want to earn points towards flights, the Barclaycard Avios Plus earns 1.5 Avios per £1 spent everywhere with no foreign transaction fees. Avios points can be redeemed for British Airways, Iberia, and Aer Lingus flights. A return flight to Europe typically costs 4,000 to 9,000 Avios plus taxes.

### Halifax Clarity — Best Simple No-Fee Travel Card

The Halifax Clarity Mastercard has been a favourite of UK travellers for years. No foreign transaction fees, no annual fee, no rewards — just a clean card that works abroad without costing extra. It is accepted everywhere Mastercard is accepted worldwide.

**What to avoid:** Never withdraw cash on a credit card abroad unless it is an emergency. Even travel cards with no FX fees typically charge a cash advance fee of 2–3% plus interest from the day of withdrawal with no grace period.

---

## Best Credit Cards for Bad Credit UK 2026

If you have a poor credit history, defaults, CCJs, or simply no credit history at all, standard credit cards will reject you. Credit builder cards are designed specifically for this situation — lower limits, higher rates, simpler approval criteria.

### Capital One Classic — Most Accessible Credit Builder

Capital One Classic is one of the most widely available credit builder cards in the UK. It accepts applicants with limited or poor credit history, starts with a limit between £200 and £1,500, and reports to all three major UK credit reference agencies (Experian, Equifax, and TransUnion) every month.

Used correctly — spending a small amount each month and paying the full balance — it will meaningfully improve your credit score within 6 to 12 months.

**Key details:**
- Credit limit: £200–£1,500 initially
- APR: 34.9% variable (do not carry a balance)
- Annual fee: None
- Reports to: All three CRAs monthly

### Aqua Classic — Best for Actively Rebuilding Credit

Aqua is owned by NewDay, which specialises in credit builder products. The Aqua Classic offers automatic credit limit reviews every five months if you manage the account well. After 12 months of on-time payments and low utilisation, most cardholders see meaningful score improvements.

### The Golden Rule for Credit Builder Cards

Never carry a balance on a credit builder card. The APRs are high — typically 29.9% to 39.9% — because the lender is taking on more risk. These cards exist to rebuild your credit score, not to borrow money affordably. Spend a small amount each month, pay the full balance, and repeat.

| Timeline | Action | Credit Score Impact |
|---|---|---|
| Months 1–3 | Open account, spend small amount, pay in full | Initial dip then stabilises |
| Months 4–6 | Consistent on-time payments | Gradual improvement begins |
| Months 7–12 | Low utilisation maintained | Meaningful improvement |
| 12+ months | Eligible to apply for standard cards | Score may qualify for better products |

---

## Best Rewards Credit Cards UK 2026

Rewards cards are worth considering only if you pay your balance in full every month without fail. If you carry a balance, the interest will always outweigh any rewards you earn.

### American Express Preferred Rewards Gold — Best Sign-Up Bonus

The Amex Gold card offers 20,000 Membership Rewards points when you spend £3,000 in the first three months. Those points are worth approximately £100 in gift cards or considerably more when transferred to airline partners such as British Airways (Avios). The card has no fee in year one, then £195 per year from year two.

### British Airways American Express — Best for Avios Collectors

The free BA Amex earns 1 Avios per £1 spent and offers a companion voucher (2-for-1 on any BA flight) once you spend £15,000 in a card year. If you fly British Airways regularly, the companion voucher alone is typically worth £200 to £500 depending on your route and travel class.

---

## Common Credit Card Mistakes That Cost UK Consumers Millions

### Only Making the Minimum Payment

Credit card minimum payments are designed to keep you in debt as long as possible. On a £3,000 balance at 22.9% APR, making only the minimum payment means you will take over 25 years to clear the debt and pay more in interest than the original amount borrowed. Always pay more than the minimum — ideally the full balance.

### Missing a Payment on a 0% Deal

A single missed payment on a 0% card can trigger the end of the promotional rate immediately. Most credit card agreements allow the lender to withdraw 0% offers if you miss a payment. Set up a direct debit for at least the minimum payment the day you open the account.

### Applying for Multiple Cards at Once

Every credit card application results in a hard search on your credit file, visible to other lenders and temporarily reducing your score. Applying for three cards in one month looks risky to lenders. Use soft-search eligibility checkers — available on all major comparison sites — before applying anywhere.

### Ignoring the Post-Offer APR

The 0% period on purchase and balance transfer cards always ends. When it does, the standard rate applies to your full remaining balance. Always know your end date and have a clear plan.

---

## How to Choose the Right Card for You

The best credit card for you depends entirely on what you want to use it for:

1. **Do you have existing credit card debt?** → Start with a balance transfer card. Clear the debt at 0% before worrying about rewards.
2. **Are you planning a large purchase in the next 6 months?** → Get a 0% purchase card and spread the cost interest-free.
3. **Do you pay your balance in full every month?** → A cashback or rewards card will earn you money on spending you were going to do anyway.
4. **Do you travel internationally more than twice a year?** → A no-FX-fee card should be in your wallet. The fees add up quickly.
5. **Is your credit score limited or poor?** → Start with a credit builder card. Spend small, pay in full, wait 12 months, then reassess.
6. **Do you want maximum simplicity?** → A flat-rate cashback card with no annual fee requires zero management and still earns you money.

Most financially active adults benefit from two cards: a primary card that earns rewards or cashback, and a travel card for use abroad. Beyond two cards the management complexity increases without much additional benefit.

---

## Eligibility: What Lenders Actually Look At

UK credit card lenders use your credit report, income, existing debt, and application details to make decisions. Key factors include:

- **Payment history** — missed payments are the most damaging mark on a credit file
- **Credit utilisation** — using more than 30% of your available credit limit looks risky
- **Electoral roll registration** — not being registered is a surprisingly common reason for rejection
- **Time at current address** — less than 12 months at an address can hurt approval odds
- **Income and affordability** — lenders must check affordability under FCA regulations

You can check your credit report for free at Experian, Equifax, and TransUnion. Do this before applying for any new card.

---

## Frequently Asked Questions

**Does applying for a credit card hurt my credit score?**

Yes, but only temporarily. A hard search from a credit card application typically reduces your score by a small amount for up to six months. After that, if you manage the card well — on-time payments and low utilisation — the net effect on your score is positive. The key is to avoid multiple applications in a short period. Use soft-search eligibility checkers before applying to assess your approval odds without any impact on your file.

**Can I have more than one credit card in the UK?**

Yes. There is no legal limit on how many credit cards you can hold, and most UK adults with a reasonable credit history can hold several simultaneously. Each application triggers a hard search, and each card you hold increases your total available credit — which some lenders view cautiously if it is very high relative to your income. In practice, two or three well-managed cards is entirely normal and can help your score by keeping utilisation low across a higher total limit.

**What is the difference between a credit card and a charge card?**

A credit card allows you to carry a balance from month to month, paying interest on what you owe. A charge card — such as the American Express Platinum card — requires you to pay the full balance every month with no preset spending limit. Most cards in the UK market are credit cards. Amex offers both types; their cashback and rewards cards are credit cards, while the Platinum card is a charge card.

**What happens if I cannot make my minimum payment?**

Contact your lender immediately — before you miss the payment if at all possible. All FCA-regulated lenders in the UK are required to treat customers in financial difficulty fairly, offering options such as a temporary payment plan, reduced payment arrangement, or payment holiday. Missing payments without communication results in late fees (typically £12), damage to your credit file, and — if persistent — potential default and debt collection action. The worst thing you can do is ignore it. Free debt advice is available from MoneyHelper (moneyhelper.org.uk) and StepChange.

---

*This article is for informational purposes only and does not constitute regulated financial advice. Credit card terms, rates, and offers change frequently — always check the lender's website for current terms before applying. Money Stack Guide is not authorised by the Financial Conduct Authority to provide regulated financial advice.*`,
  },

]

export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug)

export const getArticlesByCategory = (category: string): Article[] =>
  articles.filter((a) => a.category === category)

export const getFeaturedArticles = (): Article[] =>
  articles.filter((a) => a.featured)

export const getRecentArticles = (limit = 6): Article[] =>
  articles.slice(0, limit)

export const categories: Category[] = categoryDefs.map((cat) => ({
  ...cat,
  count: articles.filter((a) => a.category === cat.slug).length,
}))
