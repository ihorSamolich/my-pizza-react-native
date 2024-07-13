import { IUserCreate } from '@/interfaces/account'

export const generateUserCreateFormData = (data: IUserCreate) => {
  const formData = new FormData()

  formData.append('firstName', data.firstName)
  formData.append('lastName', data.lastName)
  formData.append('email', data.email)
  formData.append('userName', data.email)
  formData.append('password', data.password)
  // @ts-ignore
  formData.append('image', data.image)

  return formData
}
