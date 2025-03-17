import { Box, Flex, Text,  } from '@radix-ui/themes';

export function Footer() {
  return (
  <Box
    style={{ gridArea: 'footer' }}
    className="bg-gray-800"
    py="2"
  >
    <Flex justify="center">
      <Text>Footer</Text>
    </Flex>
  </Box>
  )
}