import { Button as NativeBaseButton, IButtonProps, Heading, VStack } from 'native-base';
type Prpos = IButtonProps & {
  title: string;
}

export function Button({title, ...rest}: Prpos) {
  return (
    <NativeBaseButton 
      bg="green.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{bg:"green.500"}}
      {...rest}
    >
      <Heading color="white" fontSize="sm">
        {title}
      </Heading>
    </NativeBaseButton>
  );
}