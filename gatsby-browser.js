import React from "react";

require('./src/globalCss/index.scss');

const defaultTheme = "light";
export const ThemeContext = React.createContext(defaultTheme);

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {element}
        </ThemeContext.Provider>
    )
}