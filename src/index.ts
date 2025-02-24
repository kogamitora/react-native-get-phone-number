// index.ts
import ReactNativeGetPhoneNumberModule from "./ReactNativeGetPhoneNumberModule"
import ReactNativeGetPhoneNumberView from "./ReactNativeGetPhoneNumberView"

export default ReactNativeGetPhoneNumberModule

export { ReactNativeGetPhoneNumberView }

export * from "./ReactNativeGetPhoneNumber.types"

export async function getPhoneNumber() {
  return ReactNativeGetPhoneNumberModule.getPhoneNumber()
}
