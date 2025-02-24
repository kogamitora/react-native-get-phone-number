import { registerWebModule, NativeModule } from "expo"

import { ReactNativeGetPhoneNumberModuleEvents } from "./ReactNativeGetPhoneNumber.types"

class ReactNativeGetPhoneNumberModule extends NativeModule<ReactNativeGetPhoneNumberModuleEvents> {}

export default registerWebModule(ReactNativeGetPhoneNumberModule)
