import * as FileSystem from 'expo-file-system'

export const getFileFromUri = async (uri: string) => {
  const fileInfo = await FileSystem.getInfoAsync(uri)
  if (fileInfo.exists) {
    return {
      uri,
      name: uri.split('/').pop(),
      type: 'image/jpeg',
    }
  }
  return null
}
