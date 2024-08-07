export interface IWine {
  id: number
  name: string
  price: number
  year: number
  image: IImage
}

export interface IImage {
  src: string
  alt: string
}
