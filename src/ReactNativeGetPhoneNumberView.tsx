import { requireNativeView } from "expo"
import * as React from "react"

import { ReactNativeGetPhoneNumberViewProps } from "./ReactNativeGetPhoneNumber.types"

const NativeView: React.ComponentType<ReactNativeGetPhoneNumberViewProps> =
  requireNativeView("ReactNativeGetPhoneNumber")

export default function ReactNativeGetPhoneNumberView(
  props: ReactNativeGetPhoneNumberViewProps,
) {
  return <NativeView {...props} />
}
