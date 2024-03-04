import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from "react-native"
import Slider from "@react-native-community/slider"
import { useState } from "react"
import { ModalComponent } from "../components/ModalComponent"

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&?"

export default function App() {
  const [size, setSize] = useState(10)
  const [passwordGenerate, setpasswordGenerate] = useState("")
  const [ modalVisible, setModalVisible ] = useState(false)
  function generatePassword() {
    let passwordGen = ''
  
    for (let i = 0, n = charset.length; i < size; i++) {
      passwordGen += charset.charAt(Math.floor(Math.random() * n))
    }
    
    setpasswordGenerate(passwordGen)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/logo.png")} 

      />
      <Text style={styles.textChar}>{`${size} Caracteres`}</Text>
      <View style={styles.containerSlider}>
        <Slider
          minimumValue={6}
          maximumValue={30}
          step={1}
          styles={styles.slider}
          value={size}
          onValueChange={ (value) => setSize(value) }
        />
      </View>
      <TouchableOpacity style={styles.button}
        onPressOut={generatePassword}
      >
        <Text style={styles.textButton}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <ModalComponent setModalVisible={setModalVisible} passwordGenerate={passwordGenerate} />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },

  containerSlider: {
    width: "80%",
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#fff',

  },

  slider: {
    width: "100%",
  },

  button: {
    width: "80%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#342bdb",
    borderRadius: 10,
  },

  textButton: {
    color: "#fff"
  },

  textChar: {
    fontSize: 30,
    fontWeight: "600",

  },
})
