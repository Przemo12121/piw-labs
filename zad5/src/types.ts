export type Ad = {
  id: number
  email: string
  image: string
  address: {
    city: string
    street: string
  }
  residentialArea: number
  owner: string
  pricePerMonth: number
  sleepingRooms: number
  description: string
}

export type Account = {
  // id: number
  email: string
  name: string
  // lastName: string
  // password: string
}