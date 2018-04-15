export interface Quote {
  id: string,
  person: string,
  text: string
}

export interface Category {
  category: string,
  quotes: Quote[],
  icon: string
}
