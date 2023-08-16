import React from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Section from '../Section/Section';

export default function Structure({ sections }) {
    console.log();


    return (
        <Tabs>
            <TabList>
                {Object.values(sections).map((section, idx) => <Tab key={`tab-section-${idx}`} >{Object.keys(section)[0]}</Tab>)}
            </TabList>
            {Object.values(sections).map((section, idx) => <TabPanel key={`tabpanel-section-${idx}`}> <Section phrases={Object.values(section)} /></TabPanel>)}
        </Tabs>
    )
}
