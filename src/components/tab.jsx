import React from 'react';

export const TabContainer = ( { children, style } ) => {
    const Style= {
        tabContainer: {
            width: "100%", minHeight: "68px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around",
            boxSizing: "border-box"
        },
    };
    return (
        <div style={ style ? { ...Style.tabContainer, ...style } : { ...Style.tabContainer } }>{ children }</div>
    );
};

export const Tab = ( { isSelected, onClick, children, style } ) => {
    const [ hover, setHover ] = React.useState( false );
    const Style = {
        tab: {
            minHeight: "68px", color: isSelected ? "#3AAB7B" : "#0A0B0D", cursor: "pointer", boxSizing: "border-box", display: "flex",
            alignItems: "center", justifyContent: "center", width: "100%", borderBottom: `1px solid ${ isSelected ? "#FFFFFF" : "#DEDFE2" }`,
            backgroundColor: hover ? "#FAFAFA" : "#FFFFFF", fontSize: "20px", lineHeight: "25px", fontWeight: 600
        },
    };
    return (
        <div 
            style={ style ? { ...Style.tab, ...style } : { ...Style.tab } } onClick={ onClick ? onClick : () => {} }
            onMouseEnter={ () => { setHover( true ) } } onMouseLeave={ () => { setHover( false ) } }
        >
            { children }
        </div>
    );
};
