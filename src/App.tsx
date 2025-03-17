// import PopoverDemo from './components/Popover'
import './index.css';
import { Flex, Text, Box, Grid } from '@radix-ui/themes';
import "@radix-ui/themes/styles.css";
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Grid
        columns="280px 1fr" // Sidebar com largura fixa (auto) e main ocupando o restante (1fr)
        rows="auto 1fr auto" // Header e footer com altura automática, main ocupando o restante
        style={{
          height: '100vh', // Garante que o grid ocupe a tela inteira
          gridTemplateAreas: `
            "header header"
            "sidebar main"
            "footer footer"
          `,
        }}
        gap="2"
      >
        <Header />

        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <Main />

        {/* Footer */}
        <Footer />
      </Grid>
    </>
  );
}

export default App;