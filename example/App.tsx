import { useState } from "react"
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native"
import { getPhoneNumber } from "react-native-get-phone-number"

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null)

  const getPNumber = async () => {
    try {
      const pNumber = await getPhoneNumber()
      console.log(pNumber)
      setPhoneNumber(pNumber)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Module API Example</Text>
        <View style={styles.group}>
          <Text style={styles.groupHeader}>Get Phone Number</Text>
          <Button title="Get Phone Number" onPress={getPNumber} />
          <Text>Phone Number: {phoneNumber}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  view: {
    flex: 1,
    height: 200,
  },
}
