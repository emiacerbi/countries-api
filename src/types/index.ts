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

export type Filter = {
  id: number;
  name: string;
  value: string;
}
