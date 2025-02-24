package expo.modules.getphonenumber

import android.content.Context
import android.telephony.TelephonyManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL

class ReactNativeGetPhoneNumberModule : Module() {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a
    // string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for
    // clarity.
    // The module will be accessible from `requireNativeModule('ReactNativeGetPhoneNumber')` in
    // JavaScript.
    Name("ReactNativeGetPhoneNumber")

    AsyncFunction("getPhoneNumber") {
      val telephonyManager =
              appContext.reactContext?.getSystemService(Context.TELEPHONY_SERVICE) as?
                      TelephonyManager
      telephonyManager?.line1Number
    }
    // Enables the module to be used as a native view. Definition components that are accepted as
    // part of
    // the view definition: Prop, Events.
    View(ReactNativeGetPhoneNumberView::class) {
      // Defines a setter for the `url` prop.
      Prop("url") { view: ReactNativeGetPhoneNumberView, url: URL ->
        view.webView.loadUrl(url.toString())
      }
      // Defines an event that the view can send to JavaScript.
      Events("onLoad")
    }
  }
}
