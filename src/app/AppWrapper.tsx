import React, { useEffect, useState } from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { Typography, PaletteType } from "@material-ui/core";

import CssBaseline from "@material-ui/core/CssBaseline";
import { themeMUI } from "../styles/themeMUI";
import tw, { styled } from "twin.macro";
// import { setTypeTheme } from "../features/switchDarkmode/switchDarkmodeSlice";
// import AppHeader from "../components/AppHeader/AppHeader";
// import AppFooter from "../components/AppFooter/AppFooter";

const StyledCom = styled(Typography)`
  ${tw`text-center`};
  color: yellow;
`;

const AppWrapper: React.FC = ({ children }) => {
  const [themeType, setThemeType] = useState("dark");

  let themeConfig = createTheme({
    ...themeMUI,
    palette: {
      type: themeType as PaletteType,
    },
  });
  themeConfig = responsiveFontSizes(themeConfig);

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      <div className="App">
        <header className="AppHeader">
          <Typography variant="h2" component="h2">
            Responsive h2
          </Typography>
          <h2>Normal h2</h2>
          <StyledCom>avc</StyledCom>
          <button
            onClick={() =>
              themeType === "light"
                ? setThemeType("dark")
                : setThemeType("light")
            }
          >
            Change Theme
          </button>
        </header>
        <main className="AppMain">
          <div>{children}</div>
        </main>
        <footer>
          <div>abc</div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default AppWrapper;
