import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default ({ routes }: any) => {
  console.log('users routes', routes)
  return <>
    <h1>users index</h1>
    {
      routes.map((route: any) => <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />)
    }
  </>
}