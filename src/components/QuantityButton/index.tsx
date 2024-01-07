import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'

interface QuantityButtonProps {
  type: 'plus' | 'minus';
  onPress: () => void;
}

export function QuantityButton({ type, onPress }: QuantityButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Entypo name={`circle-with-${type}`} size={28} color="#E0E1DD" />
    </TouchableOpacity>
  )
}
