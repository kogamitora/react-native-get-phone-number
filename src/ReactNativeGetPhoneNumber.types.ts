import { StyleProp, ViewStyle } from "react-native"

export type ReactNativeGetPhoneNumberModuleEvents = {
  getPhoneNumber(): Promise<string>
}

export type OnLoadEventPayload = {
  url: string
}
export type ReactNativeGetPhoneNumberViewProps = {
  url: string
  onLoad: (event: { nativeEvent: OnLoadEventPayload }) => void
  style?: StyleProp<ViewStyle>
}
