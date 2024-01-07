import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginBottom: 8,
    borderRadius: 5,
  },
  inline: {
    gap: 12,
    flexDirection: 'row',
  },
  text: {
    color: '#E0E1DD',
    fontSize: 18,
    fontFamily: 'Nunito_600SemiBold'
  },
  price: {
    color: '#E0E1DD',
    fontSize: 18,
    fontFamily: 'Nunito_600SemiBold'
  },
  quantity: {
    gap: 8,
    marginTop: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
})