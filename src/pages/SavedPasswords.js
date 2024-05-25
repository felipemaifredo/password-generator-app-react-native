import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from "react-native"
import useStorage from "../hooks/useStorage"
import { useState, useEffect } from "react"
import {useIsFocused} from "@react-navigation/native"

export function SavedPasswords() {
    const { getItem } = useStorage()
    const focused = useIsFocused()
    const [passwords, setPasswords] = useState([])

    useEffect(() => {
        async function loadPasswords(){
            const pass = await getItem("@pass")
            setPasswords(pass)
        }
        loadPasswords()
    }, [focused])

    return (
        <View>
            <Text>Senhas Salvas</Text>
            {passwords.map((pass, index) => (
                <Text key={index}>{pass}</Text> // Adicionando key para cada elemento
            ))}
        </View>
    )
}