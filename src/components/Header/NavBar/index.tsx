import { Text, Flex } from '@radix-ui/themes';


type NavBarProps = {
  icon: string
  text: string;
}

export function NavBarItems({ icon, text }: NavBarProps) {
  return (
    <Flex direction="column" gap="1" justify="center" align="center">
      <img src={icon} alt="icone de início" />

      <Text size="1">{text}</Text>
    </Flex>
  )
}