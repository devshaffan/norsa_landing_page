import React from 'react';
import { TabContainer, Tab } from "../components/tab";
import ClientForm from "./ClientForm";
import ClientNoboForm from "./ClientNoboForm";

export const Forms = () => {
    const [ tab, setTab ] = React.useState( "clientForm" );
    return (
        <>
            <TabContainer>
                <Tab 
                    style={ { borderRight: "1px solid #DEDFE2" } } 
                    isSelected={ tab === "clientForm" ? true : false }
                    onClick={ () => { setTab( "clientForm" ) } }
                >
                    Formulario di Registrashon
                </Tab>
                <Tab 
                    isSelected={ tab === "clientNoboForm" ? true : false }
                    onClick={ () => { setTab( "clientNoboForm" ) } }
                >
                    Formulario pa aplikashon pa kliente nobo
                </Tab>
            </TabContainer>
            { tab === "clientForm" ? <ClientForm /> : "" }
            { tab === "clientNoboForm" ? <ClientNoboForm /> : "" }
        </>
    );
};