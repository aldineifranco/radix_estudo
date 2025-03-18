import { Box, Flex } from '@radix-ui/themes';
import { LogoSearch } from './LogoSearch';
import { NavBarItems } from './NavBar';

import Inicio from '../../assets/inicio.svg';
import MinhaRede from '../../assets/minha_rede.svg';
import Vagas from '../../assets/vagas.svg';
import Mensagens from '../../assets/mensagens.svg';
import Notificacoes from '../../assets/notificacoes.svg';
import { Profile } from './Profile';

export function Header() {
  return (

    <Box
      style={{ gridArea: 'header' }}
      py="2"
      className="bg-white"
    >
      <Flex direction="row" gap="4">
        <LogoSearch />
        <NavBarItems icon={Inicio} text={'Início'} />
        <NavBarItems icon={MinhaRede} text={'Minha Rede'} />
        <NavBarItems icon={Vagas} text={'Vagas'} />
        <NavBarItems icon={Mensagens} text={'Mensagens'} />
        <NavBarItems icon={Notificacoes} text={'Notificações'} />


        <Profile />
      </Flex>

      <div>
      </div>

    </Box>
  )
}