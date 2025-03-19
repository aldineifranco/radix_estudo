import * as Avatar from '@radix-ui/react-avatar';
import { Flex, Text } from '@radix-ui/themes';
import { TriangleDownIcon } from '@radix-ui/react-icons';


export function Profile() {
  return (
    <Flex direction='column' align='center'>
      <Avatar.Root
        className='inline-flex items-center justify-center overflow-hidden w-6 h-6 rounded-full bg-cyan-900'

      >
        <Avatar.Image
          className="AvatarImage"
          src="https://avatars.githubusercontent.com/u/93042673?v=4"
          alt="Colm Tuite"
        />
        <Avatar.Fallback
          className="AvatarFallback" delayMs={600}
        />
      </Avatar.Root>
      
      <Flex align='center'>
        <Text style={{ fontSize: '12px' }}>Eu</Text>
        <TriangleDownIcon />
      </Flex>

      </Flex>
  )
}