import { Route as rootRoute } from './routes/__root'
import { Route as ProfileNotificationsImport } from './routes/profileNotifications'
import { Route as ProfileSettingsImport } from './routes/profile-settings'
import { Route as MyCampaignsImport } from './routes/my-campaigns'
import { Route as ExploreMapImport } from './routes/explore-map'
import { Route as ExploreImport } from './routes/explore'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

const ProfileNotificationsRoute = ProfileNotificationsImport.update({
  path: '/profileNotifications',
  getParentRoute: () => rootRoute,
} as any)

const ProfileSettingsRoute = ProfileSettingsImport.update({
  path: '/profile-settings',
  getParentRoute: () => rootRoute,
} as any)

const MyCampaignsRoute = MyCampaignsImport.update({
  path: '/my-campaigns',
  getParentRoute: () => rootRoute,
} as any)

const ExploreMapRoute = ExploreMapImport.update({
  path: '/explore-map',
  getParentRoute: () => rootRoute,
} as any)

const ExploreRoute = ExploreImport.update({
  path: '/explore',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/explore': {
      id: '/explore'
      path: '/explore'
      fullPath: '/explore'
      preLoaderRoute: typeof ExploreImport
      parentRoute: typeof rootRoute
    }
    '/explore-map': {
      id: '/explore-map'
      path: '/explore-map'
      fullPath: '/explore-map'
      preLoaderRoute: typeof ExploreMapImport
      parentRoute: typeof rootRoute
    }
    '/my-campaigns': {
      id: '/my-campaigns'
      path: '/my-campaigns'
      fullPath: '/my-campaigns'
      preLoaderRoute: typeof MyCampaignsImport
      parentRoute: typeof rootRoute
    }
    '/profile-settings': {
      id: '/profile-settings'
      path: '/profile-settings'
      fullPath: '/profile-settings'
      preLoaderRoute: typeof ProfileSettingsImport
      parentRoute: typeof rootRoute
    }
    '/profileNotifications': {
      id: '/profileNotifications'
      path: '/profileNotifications'
      fullPath: '/profileNotifications'
      preLoaderRoute: typeof ProfileNotificationsImport
      parentRoute: typeof rootRoute
    }
  }
}

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AboutRoute,
  ExploreRoute,
  ExploreMapRoute,
  MyCampaignsRoute,
  ProfileSettingsRoute,
  ProfileNotificationsRoute,
})
