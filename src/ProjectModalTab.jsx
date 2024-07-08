import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OapFuzzySearching from "./project/OAP-fuzzy-searching";
import OAPAdvancedMap from "./project/OAP-advanced-map";
import OAPElectionPromotion from "./project/OAP-election-promotion";


const ProjectModalTab = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Fuzzy searching</Tab>
                <Tab>Map</Tab>
                <Tab>Election</Tab>
            </TabList>

            <TabPanel>
                <OapFuzzySearching/>
            </TabPanel>
            <TabPanel>
                <OAPAdvancedMap/>
            </TabPanel>
            <TabPanel>
                <OAPElectionPromotion/>
            </TabPanel>
        </Tabs>
    );
};

export default ProjectModalTab;