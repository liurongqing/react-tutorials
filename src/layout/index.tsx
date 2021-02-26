import { BrowserRouter as Router } from "react-router-dom"
import { Layout } from 'antd'

import RouteWithSubRoutes from '../utils/routeWithSubRoutes'

import SliderComponent from './slider'
import BreadcrumbComponent from './breadcrumb'

const { Header, Content } = Layout;

export default ({ routes }: any) => <Router>
  <Layout style={{ height: '100vh' }}>
    <Header className="header">
      <div className="logo" >Logo</div>
    </Header>
    <Layout>
      <SliderComponent />
      <Layout style={{ padding: '0 24px 24px' }}>
        <BreadcrumbComponent />
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <RouteWithSubRoutes routes={routes} />
        </Content>
      </Layout>
    </Layout>
  </Layout>
</Router>