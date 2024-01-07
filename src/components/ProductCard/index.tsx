import { useNavigation } from '@react-navigation/native'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { Product } from '../../interfaces/product'

import { styles } from './styles'

interface Props {
  product: Product
}

export function ProductCard({ product }: Props) {
  const { navigate } = useNavigation();

  const handleGoToProductDetails = () => {
    navigate('ProductDetails', { product })
  }

  return (
    <TouchableOpacity activeOpacity={0.8} style={{ marginBottom: 16 }} onPress={handleGoToProductDetails}>
      <Image
        style={styles.image}
        source={{ uri: product.image}}
      />

      <View style={styles.inline}>
        <Text style={styles.text}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </TouchableOpacity>
  )
}
