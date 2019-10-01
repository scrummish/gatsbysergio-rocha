import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import Navigation from "../components/navigation"
import AboutSection from "../components/home/about"
import FooterSection from "../components/home/footer"
import InformationSection from "../components/home/information"
import PortfolioSection from "../components/home/portfolio"
import "../styles/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Sergio Rocha" keywords={[`gatsby`, `application`, `react`]} />
    <Navigation/>
    <AboutSection/>
    <InformationSection/>
    <PortfolioSection/>
    <FooterSection/>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
