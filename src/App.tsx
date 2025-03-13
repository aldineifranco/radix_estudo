// import PopoverDemo from './components/Popover'
import './index.css'
import { Flex, Text, Button, Container, Section, Box } from '@radix-ui/themes'
import "@radix-ui/themes/styles.css";

function App() {

  return (
    <>
      <Box py="2" className='bg-cyan-900'>
        <Flex direction="column" gap="4">
          <Text>Hello from Radix Themes</Text>
        </Flex>
      </Box>
      <Section>
        <Button>Let's go</Button>
      </Section>
    </>
 

  )
}

export default App
