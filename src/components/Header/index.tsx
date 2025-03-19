import { Box, Flex } from '@radix-ui/themes';
import { LogoSearch } from './LogoSearch';
import { NavBarItems } from './NavBar';

import Inicio from '../../assets/inicio_gray.svg';
import MinhaRede from '../../assets/minha_rede_gray.svg';
import Vagas from '../../assets/vagas_gray.svg';
import Mensagens from '../../assets/mensagens_gray.svg';
import Notificacoes from '../../assets/notificacoes_gray.svg';
import { Profile } from './Profile';
import { Business } from './Business';

export function Header() {
  return (

    <Box
      style={{ gridArea: 'header' }}
      py="2"
      className="bg-white"
    >
      <Flex direction="row" justify='between'>
        <LogoSearch />

        <Flex direction="row" gap='4'>
          <NavBarItems icon={Inicio} text={'Início'} />
          <NavBarItems icon={MinhaRede} text={'Minha Rede'} />
          <NavBarItems icon={Vagas} text={'Vagas'} />
          <NavBarItems icon={Mensagens} text={'Mensagens'} />
          <NavBarItems icon={Notificacoes} text={'Notificações'} />

          <Profile />
          <Business />
        </Flex>
      </Flex>

      <div>
      </div>

    </Box>
  )
}