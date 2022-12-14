export type Country = {
  capital: string[]
  name: {
    common: string
    official: string
  }
  population: number
  region: string
  subregion: string
  borders: string[]
  flags: {
    png: string
    svg: string
  }
  cca2: string

  currencies: {
    object: {
      name: string
      symbol: string
    }
  }
  languages: object
  tld: string
}

export type Filter = {
  id: number;
  name: string;
  value: string;
}
