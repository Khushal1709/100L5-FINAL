import React from 'react'
import Aboutwhychoose from '../Pages/Aboutwhychoose';
import StatsSection from '../Pages/StatsSectio';
import ProfileCard from '../Pages/ProfileCard'; 
import Demo from '../Pages/Demo';
import TrustedSection from '../Pages/TrustedSection';

export default function Aboutus() {
    return (
        <>
            <div className="pb-24">
                <Aboutwhychoose />
            </div>
            <div className="mt-16">
                <StatsSection />
            </div>
            <ProfileCard />
            <Demo />
            <TrustedSection />
        </>
    )
}
