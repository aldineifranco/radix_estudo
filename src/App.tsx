// import PopoverDemo from './components/Popover'
import './index.css';
import { Grid } from '@radix-ui/themes';
import "@radix-ui/themes/styles.css";
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Grid
        columns="18rem 1fr" // Sidebar com largura fixa (auto) e main ocupando o restante (1fr)
        rows="53px 1fr auto" // Header e footer com altura automática, main ocupando o restante
        style={{
          margin: '0 auto',
          maxWidth: '960px',
          height: '100vh', // Garante que o grid ocupe a tela inteira
          backgroundClip: '#F4F2EE',
          gridTemplateAreas: `
          "header header"
          "sidebar main"
          "footer footer"
          `,
        }}
        gap="2"
      >
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </Grid>
    </>
  );
}

export default App;