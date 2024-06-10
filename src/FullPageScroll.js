import React, { useEffect, useState } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";

const FullPageScroll = () => {
  const SectionStyle = {
    // height: '100vh',
    // width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const SectionStyle2 = {
    // height: '100vh',
    // width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0',
  }

  const SectionStyle3 = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '5%',
  }

  return (
    <Fullpage>

      <FullpageNavigation />

      <FullPageSections>
        <FullpageSection style={SectionStyle}>
          <Section1></Section1>
        </FullpageSection>

        <FullpageSection style={SectionStyle2}>
          <Section2></Section2>
        </FullpageSection>

        <FullpageSection style={SectionStyle3}>
          <Section3></Section3>
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
          <h1>Section 4</h1>
        </FullpageSection>

      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageScroll;