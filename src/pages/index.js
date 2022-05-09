import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import useBaseUrl from "@docusaurus/useBaseUrl"

import styles from "./index.module.css"
import Mailchimp from "../theme/components/MailChimp"

const features = [
  {
    id: "privacy",
    className: "sectionPrivacy",
    title: "A new chain with the strongest privacy",
    description:
      "Iron Fish is a Layer 1 blockchain that provides the strongest privacy guarantees on every single transaction. Leveraging zero-knowledge proofs (zk-SNARKs) and the highest industry standards for encryption, Iron Fish gives you complete control over who sees transaction details via account view keys or transaction decryption keys. Your data. Your information. Your coins.",
    buttonLink: "docs/whitepaper/1_introduction",
    button: "Read Our Whitepaper",
  },
  {
    id: "privacy-layer",
    className: "sectionPrivacyLayer",
    title: "Universal privacy layer for all assets",
    description:
      "We’re building Iron Fish to be the universal privacy layer for crypto, enabling users to bridge assets between Iron Fish and other chains for fully private transactions—a true SSL layer for blockchains.",
    buttonLink: "/roadmap",
    button: "See Our Roadmap",
  },
  {
    id: "privacy",
    className: "sectionCryptocurrency",
    title: "Convenience for everyone",
    description:
      "Privacy should be a right. Iron Fish’s simplicity gives everyone that right. Confidentiality shouldn’t be reserved for the powerful or technically gifted. Anyone can create a wallet and run their own node.",
    buttonLink: "docs/onboarding/installation-iron-fish",
    button: "Download Iron Fish",
  },
  {
    id: "regulatory",
    className: "sectionRegulatory",
    title: "Regulatory compliance, built in",
    description:
      "Privacy doesn't mean that Iron Fish can't be compliant. Every Iron Fish account comes with a set of view keys allowing an exchange or financial organization to see a full audit of the accounts they manage and comply with all their AML obligations.",
    buttonLink: "docs/whitepaper/1_introduction",
    button: "Read Our Whitepaper",
  },
  {
    id: "investors",
    className: "sectionExperts",
    title: "World-class builders and backers",
    companies: [
      ["/img/index/investor-a16z.svg", "a16z.com"],
      ["/img/index/investor-electric-capital.svg", "electriccapital.com"],
      ["/img/index/investor-sequoia.svg", "sequoiacap.com"],
    ],
    investors: [
      ["/img/index/twitter.svg", "twitter.com/eladgil"],
      ["/img/index/twitter.svg", "twitter.com/balajis"],
      ["/img/index/twitter.svg", "twitter.com/ljxie"],
    ],
    description:
      "We are honored to be working with incredible investors and angels. Our team members are tech veterans, with resumes spanning Airbnb, Facebook, Uber, and more.",
  },
]

function Feature({
  id,
  className,
  button,
  buttonLink,
  title,
  description,
  companies = [],
  investors = [],
}) {
  return (
    <section id={id} className={clsx(styles.section, styles[className])}>
      <div className={clsx(styles.sectionContainer)}>
        <div className={clsx(styles.sectionContent)}>
          <div>
            <h2 className={clsx(styles.sectionTitle)}>{title}</h2>
            <p className={clsx(styles.sectionDescription)}>{description}</p>
            {companies.length > 0 && (
              <div className={styles.companies}>
                {companies.map(([img, site]) => {
                  const twitterName =
                    site.indexOf("twitter") > -1 ? site.split(".com/")[1] : null
                  return (
                    <a
                      href={`https://${site}`}
                      key={site}
                      className={clsx(styles.companyLink, {
                        [styles.companyLinkTwitter]: twitterName,
                      })}
                    >
                      <img
                        className={clsx(
                          twitterName
                            ? styles.companyTwitter
                            : styles.companyImage
                        )}
                        src={img}
                        role="presentation"
                      />
                      {twitterName && <span style={{ width: "8px" }} />}
                      {twitterName && (
                        <span className={styles.twitterName}>
                          {twitterName}
                        </span>
                      )}
                    </a>
                  )
                })}
              </div>
            )}
            {investors.length > 0 && (
              <div className={styles.investors}>
                {investors.map(([img, site]) => {
                  const twitterName =
                    site.indexOf("twitter") > -1 ? site.split(".com/")[1] : null
                  return (
                    <a
                      href={`https://${site}`}
                      key={site}
                      className={clsx(styles.investorLink, {
                        [styles.investorLinkTwitter]: twitterName,
                      })}
                    >
                      <img
                        className={clsx(
                          twitterName
                            ? styles.investorTwitter
                            : styles.investorImage
                        )}
                        src={img}
                        role="presentation"
                      />
                      {twitterName && <span style={{ width: "8px" }} />}
                      {twitterName && (
                        <span className={styles.twitterName}>
                          {twitterName}
                        </span>
                      )}
                    </a>
                  )
                })}
              </div>
            )}
            {button && (
              <Link
                className={clsx(styles.button, "button button--outline")}
                to={useBaseUrl(buttonLink)}
              >
                {button}
              </Link>
            )}
          </div>
        </div>
        <div
          className={clsx(styles.sectionImg, {
            [styles[`${className}Img`]]: true,
          })}
        />
      </div>
    </section>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout title={""} description={siteConfig.tagline}>
      <section className={clsx(styles.section, styles.sectionHomePage)}>
        <div className={clsx(styles.sectionContainer)}>
          <header>
            <h1 className={clsx(styles.h1Title)}>
              The Universal
              <br />
              Privacy Layer
            </h1>
            <Link
              className="button button--outline button--secondary"
              to="https://testnet.ironfish.network/about"
            >
              Join the Incentivized Testnet
            </Link>
          </header>
        </div>
      </section>
      <main>
        {features &&
          features.length > 0 &&
          features.map(props => <Feature key={props.className} {...props} />)}
        <section className={clsx(styles.section, styles.sectionNewsletter)}>
          <div className={clsx(styles.sectionContainer)}>
            <p className={clsx(styles.newsletterTitle)}>
              Stay up to date with Iron Fish
            </p>
            <div id="email-signup">
              <Mailchimp
                buttonClassName="button button--outline button--secondary"
                action="https://network.us20.list-manage.com/subscribe/post?u=faf0318a641ddbad058a4ad2f&amp;id=25c9feb0f4"
                fields={[
                  {
                    name: "EMAIL",
                    placeholder: "Enter your email...",
                    type: "email",
                    required: true,
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home
