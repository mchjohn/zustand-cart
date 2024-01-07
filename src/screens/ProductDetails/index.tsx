import { Entypo } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { useCartStore } from '../../store/cartStore';

import { ProductDetailsProps } from '../../navigation/StackNavigation'

import { QuantityButton } from '../../components/QuantityButton';

import { styles } from './styles'

export function ProductDetails() {
  const { goBack } = useNavigation()
  const { params } = useRoute<ProductDetailsProps>()

  const addToCart = useCartStore(state => state.addToCart)

  const handleGoBack = () => {
    goBack()
  }

  const handleAddToCart = () => { addToCart(params.product) }

  return (
    <View style={styles.container}>
      <Entypo
        name="chevron-left"
        size={40}
        color="#E0E1DD"
        style={styles.icon}
        onPress={handleGoBack}
      />

      <Image style={styles.image} source={{ uri: params.product.image }} />

      <View style={styles.inline}>
        <Text style={styles.name}>{params.product.name}</Text>
        <Text style={styles.price}>R$ {params.product.price}</Text>
      </View>

      <View style={styles.quantity}>
        <QuantityButton type='minus' onPress={() => { }} />

        <Text style={styles.name}>{params.product.quantity}</Text>
        
        <QuantityButton type='plus' onPress={() => { }} />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
