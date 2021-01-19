import PosterEditor from 'pages/PosterEditor';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <PosterEditor />
      </Container>
    </ThemeProvider>
  );
}

export default App;
