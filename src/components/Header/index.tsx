import { Box, Flex, Text,  } from '@radix-ui/themes';

export function Header() {
  return (

    <Box
      style={{ gridArea: 'header' }}
      py="2"
      className="bg-cyan-900"
        >
      <Flex direction="column" gap="4">
        <Text>Hello from Radix Themes</Text>
      </Flex>
      
    </Box>
  )
}