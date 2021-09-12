import React from 'react';
import Heading from './Heading';
import Fsection from './Fsection';
import Sectiontwo from './Ssection';
import Footer from './Footersection';
import Subheading from './Subheading';
import Contactbox from './Contactbox';
import Popularcourse from './Popularcourse';
import AboutWebsite from './AboutWebsite';
import WhyUse from './WhyUse';
import SignUpsec from './SignUpsec';

function App() {
  return(
    <>
    <Heading />
    <Subheading />
    <AboutWebsite />
    <SignUpsec />
    <Sectiontwo />
    <Popularcourse/>
    <WhyUse />
    <Fsection />
    <Contactbox />
    <Footer />
    </>
    );
}

export default App;