import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import RouteWithSubRoutes from './utils/routeWithSubRoutes'
import LayoutComponent from './layout/index'
import Dashboard from './modules/dashboard/index'
import Login from './pages/login'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: LayoutComponent,
    children: [
      {
        path: '/dashboard',
        component: Dashboard
      }
    ]
  }
]

export default () => {
  return <Router>
    <RouteWithSubRoutes routes={routes} />
  </Router>
}