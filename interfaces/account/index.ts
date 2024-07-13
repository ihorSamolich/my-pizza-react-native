export interface ILogin {
  email: string
  password: string
}

export interface IUserCreate {
  firstName: string
  lastName: string
  email: string
  password: string
  image: File | null
}
export interface ILoginResponse {
  token: string
}
