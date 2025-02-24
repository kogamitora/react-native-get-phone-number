# react-native-get-phone-number

A React Native module (Android only) to retrieve the device’s phone number. This module is intended for use in Expo projects


## Overview

`react-native-get-phone-number` provides a simple method to retrieve the device’s phone number on Android devices.  
**Note**: This feature is not available on iOS.

## Installation

You can install this package using one of the following package managers:

    npm install react-native-get-phone-number

Or:

    yarn add react-native-get-phone-number

    pnpm add react-native-get-phone-number

    bun add react-native-get-phone-number


## Permissions

To access the phone number on Android, your application needs the following permissions in its Android manifest:

- `android.permission.READ_PHONE_STATE`  
- `android.permission.READ_PHONE_NUMBERS`  
- `android.permission.READ_SMS`

### Usage

Once the permissions are correctly set in your application, you can call the module as follows:

```
import { getPhoneNumber } from "react-native-get-phone-number";

// Inside an async function
const phoneNumber = await getPhoneNumber();
```    
Note: On some devices, the phone number may be null or unavailable if the SIM card does not allow direct access or if the network operator does not store it on the SIM.