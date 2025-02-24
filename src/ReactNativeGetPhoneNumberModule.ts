import { NativeModule, requireNativeModule } from "expo"

import { ReactNativeGetPhoneNumberModuleEvents } from "./ReactNativeGetPhoneNumber.types"

declare class ReactNativeGetPhoneNumberModule extends NativeModule<ReactNativeGetPhoneNumberModuleEvents> {
  getPhoneNumber(): Promise<string>
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ReactNativeGetPhoneNumberModule>(
  "ReactNativeGetPhoneNumber",
)
