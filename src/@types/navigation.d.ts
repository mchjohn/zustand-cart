import { RootStackParamList } from '../navigation/StackNavigation'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
