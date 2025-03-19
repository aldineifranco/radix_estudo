import { Box, Flex, Text } from '@radix-ui/themes';
import { TriangleDownIcon } from '@radix-ui/react-icons';
import { NavBarItems } from '../NavBar';
import ParaNegociosIcon from '../../../assets/para_negocios_gray.svg';
import VeicularAnuncioIcon from '../../../assets/veicular_anuncio_gray.svg';

export function Business() {
  return (
    <Flex gap='2'>
      <Flex direction='column' align='center' className=''>
        <NavBarItems icon={ParaNegociosIcon} /> 
        
        <Flex align='center'>
          <Text style={{ fontSize: '12px' }}>Para Negócios</Text>
          <TriangleDownIcon />
        </Flex>
      </Flex>

      <NavBarItems icon={VeicularAnuncioIcon} text='Veicular anúncio' /> 
  
    </Flex>

  )
}