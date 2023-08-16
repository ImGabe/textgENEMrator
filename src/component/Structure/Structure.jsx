import React from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Section from '../Section/Section';

export default function Structure({ sections }) {

    return (
        <Tabs>
            <TabList>
                {Object.values(sections).map(section => <Tab>{Object.keys(section)[0]}</Tab>)}
            </TabList>
            {Object.values(sections).map(section => <TabPanel id={section}> <Section phrases={Object.values(section)} /></TabPanel>)}
        </Tabs>
    )
}
