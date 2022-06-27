import {
  default as bmoImg,
  default as finnImg,
  default as jakeImg,
  default as princessImg,
} from 'assets/Icons/logo.svg'

const jake = {
  id: '1',
  name: 'TO DO',
  url: '#',
  avatarUrl: jakeImg,
  colors: {
    soft: '#FFFAE6',
    hard: '#FFC400',
  },
}

const BMO = {
  id: '2',
  name: 'IN PROGRESS',
  url: '#',
  avatarUrl: bmoImg,
  colors: {
    soft: '#E3FCEF',
    hard: '#57D9A3',
  },
}

const finn = {
  id: '3',
  name: 'CODE REVIEW',
  url: '#',
  avatarUrl: finnImg,
  colors: {
    soft: '#DEEBFF',
    hard: '#2684FF',
  },
}

const princess = {
  id: '4',
  name: 'FINISHED',
  url: '#',
  avatarUrl: princessImg,
  colors: {
    soft: '#EAE6FF',
    hard: '#8777D9',
  },
}

export interface IAuthor {
  id: string
  name: string
  url: string
  avatarUrl: string
  colors: {
    soft: string
    hard: string
  }
}

export interface IQuote {
  id: string
  content: string
  author: IAuthor
}

export const authors: IAuthor[] = [jake, BMO, finn, princess]

export const quotes: IQuote[] = [
  {
    id: '1',
    content: 'Sometimes life is scary and dark',
    author: BMO,
  },
  {
    id: '2',
    content: 'Sucking at something is the first step towards being sorta good at something.',
    author: jake,
  },
  {
    id: '3',
    content: "You got to focus on what's real, man",
    author: jake,
  },
  {
    id: '4',
    content: 'Is that where creativity comes from? From sad biz?',
    author: finn,
  },
  {
    id: '5',
    content: 'Homies help homies. Always',
    author: finn,
  },
  {
    id: '6',
    content: 'Responsibility demands sacrifice',
    author: princess,
  },
  {
    id: '7',
    content: "That's it! The answer was so simple, I was too smart to see it!",
    author: princess,
  },
  {
    id: '8',
    content: 'People make mistakes. It’s a part of growing up',
    author: finn,
  },
  {
    id: '9',
    content: "Don't you always call sweatpants 'give up on life pants,' Jake?",
    author: finn,
  },
  {
    id: '10',
    content: 'I should not have drunk that much tea!',
    author: princess,
  },
  {
    id: '11',
    content: 'Please! I need the real you!',
    author: princess,
  },
  {
    id: '12',
    content: "Haven't slept for a solid 83 hours, but, yeah, I'm good.",
    author: princess,
  },
]

const getByAuthor = (author: IAuthor, items: IQuote[]) => items.filter((quote) => quote.author === author)

export interface IAuthorQuoteMap {
  [key: string]: IQuote[]
}

export const authorQuoteMap: IAuthorQuoteMap = authors.reduce(
  (previous, author) => ({
    ...previous,
    [author.name]: getByAuthor(author, quotes),
  }),
  {}
)
