import { Switch, Route } from "react-router-dom"
export default ({ routes }: any) => {
  return <Switch>
    {routes.map((route: any) => (
      <Route
        key={route.path}
        path={route.path}
        render={props => (
          <route.component {...props} routes={route.children} />
        )
        }
      />
    ))}
  </Switch>
}