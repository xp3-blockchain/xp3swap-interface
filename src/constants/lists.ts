// the Uniswap Default token list lives here
export const DEFAULT_TOKEN_LIST_URL = 'tokens.uniswap.eth'



export const DEFAULT_LIST_OF_LISTS: string[] = [
  DEFAULT_TOKEN_LIST_URL,
  (process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://xp3swap.mxito3.com/') + '/rinkeby-tokenlist.json',
]
