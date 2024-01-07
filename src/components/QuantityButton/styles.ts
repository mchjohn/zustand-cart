import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1B2A',
  },
  image: {
    width: '100%',
    height: 500,
    marginBottom: 16,
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  name: {
    color: '#E0E1DD',
    fontSize: 24,
    fontFamily: 'Nunito_600SemiBold'
  },
  price: {
    color: '#E0E1DD',
    fontSize: 24,
    fontFamily: 'Nunito_600SemiBold'
  },
  buttonText: {
    color: '#0D1B2A',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Nunito_600SemiBold'
  },
  button: {
    width: '80%',
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: 32,
    paddingVertical: 8,
    backgroundColor: '#778DA9',
  },
  icon: {
    position: 'absolute',
    top: 32,
    left: 16,
    zIndex: 999,
  },
  quantity: {
    gap: 8,
    marginTop: 24,
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  }
})