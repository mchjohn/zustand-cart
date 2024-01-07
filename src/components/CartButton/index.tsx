import { Entypo } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { useCartStore } from '../../store/cartStore';

export function CartButton() {
  const { navigate } = useNavigation();

  const cart = useCartStore(state => state.cart)

  const handleGoToCart = () => { navigate('Cart') }

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={handleGoToCart}>
      <Entypo name='shopping-cart' size={30} color="#0D1B2A" />

      <View style={styles.badge}>
        <Text style={styles.text}>{cart.length}</Text>
      </View>
    </TouchableOpacity>
  )
}
