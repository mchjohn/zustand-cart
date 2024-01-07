import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { Product } from '../../interfaces/product'

import { QuantityButton } from '../QuantityButton'

import { styles } from './styles'
import { useCartStore } from '../../store/cartStore';

interface Props {
  product: Product
}

export function ProductCardCart({ product }: Props) {
  const { navigate } = useNavigation();

  const removeFromCart = useCartStore(state => state.removeFromCart)

  const handleGoToProductDetails = () => {
    navigate('ProductDetails', { product })
  }

  const handleRemoveFromCart = () => { removeFromCart(product.id) }

  return (
    <TouchableOpacity activeOpacity={0.8} style={{ marginBottom: 16 }} onPress={handleGoToProductDetails}>
      <Image
        style={styles.image}
        source={{ uri: product.image }}
      />

      <View style={styles.inline}>
        <Text style={styles.text}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>

      <View style={styles.actions}>
        <View style={styles.quantity}>
          <QuantityButton type='minus' onPress={() => { }} />

          <Text style={styles.text}>{product.quantity}</Text>

          <QuantityButton type='plus' onPress={() => { }} />
        </View>

        <Entypo name='trash' size={24} color="#778DA9" onPress={handleRemoveFromCart} />
      </View>
    </TouchableOpacity>
  )
}
