import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { FlatList, Text, View } from 'react-native'

import { useCartStore } from '../../store/cartStore';

import { ProductCardCart } from '../../components/ProductCardCart';

import { styles } from './styles'

export function Cart() {
  const { goBack } = useNavigation()

  const cart = useCartStore(state => state.cart)

  const handleGoBack = () => { goBack() }

  const productPlural = cart.length === 1 ? `product` : `products`

  return (
    <View style={styles.container}>
      <Entypo
        name="chevron-left"
        size={40}
        color="#E0E1DD"
        style={styles.icon}
        onPress={handleGoBack}
      />

      <Text style={styles.name}>You have {cart.length} {productPlural} on your cart</Text>

      {cart.length > 0 && (
        <FlatList
          data={cart}
          numColumns={2}
          renderItem={({ item }) => <ProductCardCart product={item} />}
          keyExtractor={item => item.id}
          columnWrapperStyle={styles.productList}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  )
}
