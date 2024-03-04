import { Text, View, StyleSheet, TouchableOpacity, Clipboard  } from "react-native"

export function ModalComponent({ setModalVisible, passwordGenerate }) {

    function closeModal() {
        setModalVisible(false)
    }

    function copyToClipboard() {
        Clipboard.setString(passwordGenerate);
        alert('Texto copiado para a área de transferência!');
    }

    function savePassword() {
        alert("Ainda não estamos fazendo em isso, mas novidades em breve")
    }

    return (
        <View style={styles.modal}>
            <View style={styles.modalContainer}>
                <Text>Senha Gerada</Text>
                <Text>{passwordGenerate}</Text>
                <View style={styles.btnsContainer}>
                    <TouchableOpacity
                        style={styles.btnGlobal}
                        onPressOut={closeModal}
                    >
                        <Text> Voltar </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnGlobal}
                        onPressOut={copyToClipboard}
                    >
                        <Text> Copiar </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnGlobal}
                        onPressOut={savePassword}
                    >
                        <Text> Salvar </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
       
    },

    modalContainer: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: 10,
    },

    btnsContainer: {
        flexDirection: "row",
        gap: 10,
    },
    btnGlobal: {
        height: 30,
        width: "25%",
        backgroundColor: "#fff",
    },
})