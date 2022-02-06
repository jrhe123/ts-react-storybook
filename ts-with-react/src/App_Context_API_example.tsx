import React from "react";

interface IThemeProps {
  [key: string]: {
    color: string;
    background: string;
  };
}
const themes: IThemeProps = {
  light: {
    color: "#000",
    background: "#eee",
  },
  dark: {
    color: "#fff",
    background: "#222",
  },
};
const ThemeContext = React.createContext(themes.light);

function App() {
  const theme = React.useContext(ThemeContext);
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.light}>
        <div
          style={{
            height: 100,
            width: 100,
            background: theme.background,
          }}
        ></div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
