import * as React from "react"

import { ReactNativeGetPhoneNumberViewProps } from "./ReactNativeGetPhoneNumber.types"

export default function ReactNativeGetPhoneNumberView(
  props: ReactNativeGetPhoneNumberViewProps,
) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  )
}
