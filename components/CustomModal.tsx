import React from 'react'
import { Modal, Pressable, View, Text } from 'react-native'

interface CustomModalProps {
  text: string
  modalVisible: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  onClose: () => void
}

const CustomModal: React.FC<CustomModalProps> = (props) => {
  const { modalVisible, setModalVisible, text, onClose } = props

  const handleClose = () => {
    setModalVisible(!modalVisible)
    onClose()
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}>
      <View className="flex-1 justify-center items-center mt-6">
        <View className="m-5 bg-secondary rounded-xl p-9 items-center shadow-lg">
          <Text className="mb-4 text-center text-white font-bold">{text}</Text>
          <Pressable className="rounded-xl p-3 bg-primary" onPress={handleClose}>
            <Text className="text-white font-bold text-center">OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default CustomModal
