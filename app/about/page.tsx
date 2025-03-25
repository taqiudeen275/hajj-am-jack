import React from 'react'
import AboutPageContent from './page_content'
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Hajj A.M JACK FI Company",
  description: "Hajj A.M JACK FI Company Offical website about page",
};

const AboutPage = () => {
  return (
    <>
   <AboutPageContent />
    </>
  )
}

export default AboutPage
