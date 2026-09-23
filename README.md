# RentBrown: Invest With Trust

Design and build the UI/UX prototype for RentBrown V2, a premium Nigerian-first property investment platform.

Important: This project is currently UI/UX only. Do not build backend services, databases, APIs, payment integrations, authentication logic, KYC integrations, financial calculations, ledger logic, or real business logic. Use realistic mock data and interactive frontend states where necessary.

The goal is to establish the complete visual language, information architecture, responsive layouts, and investor experience for RentBrown V2.

Product

RentBrown allows everyday users to discover structured property-backed investment opportunities, understand the terms, purchase investment slots, track active investments, monitor fixed returns and maturity, manage their wallet, receive referral rewards, complete KYC, and request withdrawals.

The product should feel like a serious financial platform, not a crypto app, betting platform, casino, or generic real-estate marketplace.

Core brand characteristics:

Trust

Transparency

Professionalism

Financial discipline

Property

Nigerian relevance

Accessibility

Premium technology

Visual Direction

Use a Warm Institutional Fintech aesthetic.

Primary brand color:
#5D4037

Secondary brown:
#8D6E63

Warm background:
#FFFDF8

Primary text:
#2D2624

Success:
#388E3C

Use these as design-token anchors rather than hardcoding colors throughout the UI.

Typography should primarily use Jakarta Sans with excellent numerical typography and tabular numerals for financial values. Marketing headings may use a tasteful serif display typeface sparingly.

The interface should use:

warm neutral surfaces

strong typography hierarchy

subtle borders

restrained shadows

controlled corner radius

excellent spacing

premium financial cards

clear numerical presentation

restrained brown accents

minimal visual noise

Avoid:

neon colors

crypto-style interfaces

betting/casino aesthetics

excessive gradients

excessive glassmorphism

giant rounded cards

fake urgency

flashy animations

deceptive countdowns

Light mode only for this prototype.

Primary Navigation

Investor navigation:

Home · Explore · Portfolio · Wallet · Account

Notifications should be accessible from the header.

Use responsive navigation appropriate for desktop and mobile.

Screens to Design

Public experience

Landing / Home

Explore Opportunities

Investment Opportunity Details

How RentBrown Works

Property Proof / Trust

Company Information

FAQ

Legal / Terms / Privacy

Investor experience

Investor Home / Dashboard

Explore Investments

Investment Details

Investment Checkout

Payment Method Selection

Payment Processing / Success / Failed States

Portfolio

Active Investment Details

Matured Investment Details

Wallet

Wallet Transaction History

Deposit

Withdrawal

Withdrawal Confirmation / Status

Notifications

Referral Dashboard

Referral History

Account / Profile

KYC

Transaction PIN / Security

Settings

Help / Tutorials

Key UI Information

The dashboard should communicate, without overwhelming the user:

total portfolio value

active investments

upcoming maturity

wallet balance

available opportunities

referral/reward status

important notifications

Investment opportunity cards should clearly show:

property

location

investment plan

slot price

ROI

duration

expected maturity

available capacity

minimum investment

relevant terms

Investment details should clearly separate:

Principal

Expected profit

Maturity value

ROI

Start date

Maturity date

Countdown

Number of slots

Slot price

Property information

Investment terms

Property proof

Never visually blur the distinction between principal and profit.

Wallet UI

Clearly distinguish:

Available balance

Reserved balance

Bonus/reward balance

Pending balance where relevant

Transaction history

The user should always understand which funds are actually available to use or withdraw.

Referral UI

Create a clear referral experience showing:

referral code

people referred

pending rewards

qualified rewards

earned rewards

reward history

explanation of how referral rewards work

Do not make referral rewards look like gambling or aggressive affiliate marketing.

KYC UI

Design a professional verification experience with states for:

Not started

In progress

Pending review

Verified

Rejected / action required

Use clear privacy/trust messaging.

Withdrawal UI

Create a clean financial withdrawal flow showing:

available balance

withdrawal amount

applicable fee

amount received

destination

confirmation

status

Make the fee transparent rather than hiding it.

Important States

Design realistic UI states for:

empty portfolio

no available investments

sold-out opportunity

opportunity nearing capacity

pending payment

successful payment

failed payment

pending withdrawal

successful withdrawal

rejected withdrawal

matured investment

pending referral reward

qualified referral reward

KYC pending

KYC verified

KYC rejected

insufficient balance

validation errors

loading/skeleton states

empty transaction history

UX Principles

RentBrown should communicate trust through the interface itself.

Show users:

exactly what they are investing

how the return is presented

principal separately from profit

maturity date

important terms before confirmation

clear fees

transaction references

property evidence

relevant disclosures

Do not use artificial urgency or fake scarcity.

Responsive Design

Design the experience for:

desktop web

tablet

mobile

The mobile experience should feel intentionally designed rather than being a compressed desktop layout.

Use realistic Nigerian financial examples such as:

₦10,000, ₦50,000, ₦100,000

and occasional USD examples where appropriate.

Prototype Data

Use realistic but clearly fictional property names, locations, investment opportunities, users, balances, transaction references, and property information.

Do not claim that fictional properties, documents, registrations, licenses, regulatory approvals, or investment opportunities are real.

Output Goal

Prioritize high-quality UI/UX design over backend functionality.

Create a cohesive RentBrown design system and make all screens feel like parts of one serious financial product.

The prototype should be polished enough that we can use it as the visual reference for the eventual RentBrown V2 production application.

Do not make architectural or backend decisions beyond what is necessary to demonstrate the UI.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4d66d54d-e00c-4145-9d69-33ace7e980e1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
