import { FlatList, View } from 'react-native'

import { useCartStore } from '../../store/cartStore'

import { ProductCard } from '../../components/ProductCard'

import { styles } from './styles'
import { CartButton } from '../../components/CartButton';

export function Home() {
  const products = useCartStore(state => state.availableProducts);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={item => item.id}
        columnWrapperStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      />

      <CartButton />
    </View>
  )
}
