import { RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Product } from '../interfaces/product';

import { Home } from '../screens/Home';
import { ProductDetails } from '../screens/ProductDetails';

export type RootStackParamList = {
  Home: undefined;
  ProductDetails: {
    product: Product
  }
}

export type ProductDetailsProps = RouteProp<RootStackParamList, 'ProductDetails'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}