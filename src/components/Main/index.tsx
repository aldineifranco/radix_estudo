import { Text, Box } from '@radix-ui/themes';

export function Main() {
  return (
  <Box
    style={{ gridArea: 'main' }}
    className="bg-amber-600"
    p="4"
  >
    <Text>Main Content</Text>
  </Box>
  )
}

