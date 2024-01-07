import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    right: 16,
    bottom: 100,
    position: 'absolute',

    width: 60,
    height: 60,
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: '#E0E1DD',
  },
  badge: {
    top: 0,
    right: 0,
    width: 20,
    height: 20,
    position: 'absolute',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  text: {
    color: '#E0E1DD',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Nunito_600SemiBold',
  }
})