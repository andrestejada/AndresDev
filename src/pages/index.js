import * as React from "react"
import ProfileCard from "../components/about/ProfileCard"
import MainBanner from "../components/Banner/MainBanner"
import Layout from "../components/Layout"
import '../styles/styles.scss'

const IndexPage = () => (
 <>
  <Layout>
    <MainBanner/>
    <ProfileCard/>
  </Layout>
    
  </>
)

export default IndexPage
