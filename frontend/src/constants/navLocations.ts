export type NavLocation = {
  name: string,
  path: string
}

export type NavLocations = Record<string, NavLocation>

export const navLocations: NavLocations = {
  home: {
    name: 'Home',
    path: '/',
  },
  items: {
    name: 'Items',
    path: '/items',
  },
  equipment: {
    name: 'Equipment',
    path: '/equipment',
  },
  magic: {
    name: 'Magic',
    path: '/magic',
  },
  archmagistration: {
    name: 'Archmagistration',
    path: '/archmagistration',
  },
  login: {
    name: 'Login',
    path: '/login',
  },
}
