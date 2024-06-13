import React, { useEffect, useState } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5/Section5.js';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
const FullPageScroll = () => {
    const SectionStyle1 = {
        // height: '100vh',
        // width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // background: '#fafafa',
    };

    const SectionStyle2 = {
        // height: '100vh',
        // width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0',
    };

    const SectionStyle3 = {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '5%',
    };

    const SectionStyle4 = {
        height: '100vh',
        // width: '100%',
        display: 'flex',
        justifyContent: 'center',
        background: '#fafafa',
    };

    return (
        <Fullpage>
            <FullpageNavigation />
            <FullPageSections>
                <FullpageSection style={SectionStyle1}>
                    <Section1></Section1>
                </FullpageSection>

                <FullpageSection style={SectionStyle2}>
                    <Section2></Section2>
                </FullpageSection>

                <FullpageSection style={SectionStyle3}>
                    <Section3></Section3>
                </FullpageSection>

                <FullpageSection>
                    <Section5 />
                </FullpageSection>
                <FullpageSection style={SectionStyle4}>
                    <Section4></Section4>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    );
};

export default FullPageScroll;
