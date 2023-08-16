import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./PublicPage.css";

import Structure from "../../component/Structure/Structure";
import data from '../../../foobar.json'

export default function PublicPage() {

  return (
    <>
      <div className="container">
        <div className="container-repertorio">
          <div className="caixatema">
            <input
              type="text"
              name="tema"
              id="tema"
              placeholder="Escreva aqui o tema"
            />
          </div>

          <div className="repertorio">
            <Tabs>
              <TabList>
                {Object.keys(data).map(structure => <Tab>{structure}</Tab>)}
              </TabList>

              {Object.values(data).map(sections => <TabPanel><Structure sections={sections} /></TabPanel>)}
            </Tabs>


            {/* <Tabs>
              <TabList className="estrutura">
                <Tab>introdução</Tab>
                <Tab>desenvolvimento I</Tab>
                <Tab>desenvolvimento II</Tab>
                <Tab>conclusão</Tab>
              </TabList>

              <TabPanel className="secao">
                <Introduction />
              </TabPanel>
              <TabPanel className="secao">
                <Development />
              </TabPanel>
              <TabPanel className="secao">
                <Development />
              </TabPanel>
              <TabPanel className="secao">
                <Conclusion />
              </TabPanel>
            </Tabs> */}
          </div>
        </div>

        <div className="container-redacao">
          <div className="caixatema">
            <h2>Redação</h2>
          </div>
          <div className="redacao"></div>
        </div>
      </div>
    </>
  );
}
