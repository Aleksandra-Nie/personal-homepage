import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../features/toggleTheme/themeSlice";
import { ToggleTheme } from "../features/toggleTheme"
import { Container } from "../features/Container";
import { About } from "../features/About";
import { Skills } from "../features/Skills";
import { skills, toLearn } from "../data";
import { Portfolio } from "../features/Portfolio";
import { Footer } from "../features/Footer";
import { Header } from "../features/Header";

function App() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <ToggleTheme />
        <About />
        <Skills
          title="My skillset includes 🛠️"
          skills={skills}
        />
        <Skills
          title="What I want to learn next 🚀"
          skills={toLearn}
        />
        <Header />
        <Portfolio />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
