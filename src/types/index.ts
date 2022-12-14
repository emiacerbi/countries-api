export type Country = {
  capital: string[]
  name: {
    common: string
    official: string
  }
  population: number
  region: string
  borders: string[]
  flags: {
    png: string
    svg: string
  }
}
