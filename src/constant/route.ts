export interface AppRoute {
  children: string
  href: string
}

export const APP_ROUTE: Array<AppRoute> = [
  {
    children: 'Home',
    href: '/'
  },
  {
    children: 'Articles',
    href: '/Articles'
  },
  {
    children: 'Tags',
    href: '/tags'
  }
]
