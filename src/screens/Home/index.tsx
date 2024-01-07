import { FlatList, View } from 'react-native'

import { products } from '../../mock/products'

import { ProductCard } from '../../components/ProductCard'

import { styles } from './styles'

export function Home() {
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
    </View>
  )
}
