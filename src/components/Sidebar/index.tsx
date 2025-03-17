import { Text, Box } from '@radix-ui/themes';

export function Sidebar() {
  return (
  <Box
    style={{ gridArea: 'sidebar' }}
    className="bg-blue-600"
    p="4"
  >
    <Text>Sidebar</Text>
  </Box>
  )
}