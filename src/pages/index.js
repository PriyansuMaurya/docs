import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageWebDevFeatures from '@site/src/components/HomepageWebDevFeatures';
import CodeBlock from '@theme/CodeBlock';
import HomepageEcommerceFeatures from '../components/HomepageEcommerceFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const Github = require('@site/static/img/github.svg').default
  return (
    <header className='hero hero--primary px-24 text-center'>
      <div className="container">
        <h1 className="hero__title">{'A Full Stack React Ecommerce Template'}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center mt-6">
          <Link
            className="button button--primary button--lg"
            to="/docs/development/getting-started/introduction">
            Getting started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://demo.evershop.io/">
            Explore our demo
          </Link>
        </div>
        <div className="flex gap-5 justify-center mt-3">
          <a href="https://github.com/evershopcommerce/evershop" target="_blank">
            <Github role={'img'} />
          </a>
        </div>
      </div>
    </header>
  );
}

function QuickStart() {
  return <div className='container'>
    <div className='flex flex-col  md:flex-row md:space-y-0  justify-center '>
      <div>
        <h2 className='justify-center text-center'>Get started in minutes</h2>
        <CodeBlock
          language="bash"
        >
          {`npx create-evershop-app my-app --playAround`}
        </CodeBlock>
      </div>
    </div>
  </div>
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="An Open Source React Ecommerce Template"
      description="EverShop provides the best developer experience and rich ecommerce features that help build online stores and start selling online.">
      <HomepageHeader />
      <QuickStart />
      <main>
        <HomepageWebDevFeatures />
        <HomepageEcommerceFeatures />
      </main>
    </Layout>
  );
}
