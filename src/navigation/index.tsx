import { NavigationContainer } from '@react-navigation/native';

import { MyStack } from './StackNavigation';

export function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}