import { lazy } from 'react'

// 引入懒加载路由
const Navpage = lazy(() => import('@/views/navpage'));
const BoilingVerdict = lazy(() => import('@/views/demos/boilingVerdict'));
const Price = lazy(() => import('@/views/demos/price'));
const Todolist = lazy(() => import('@/views/demos/todolist'));
const Context = lazy(() => import('@/views/demos/context'));
const Refs = lazy(() => import('@/views/demos/refs'));
const RenderProps = lazy(() => import('@/views/demos/renderProps'));
const Hoc = lazy(() => import('@/views/demos/hoc'));

const routes = [
  {to: "/home", name: 'home', component: Navpage},
  {to: "/price", name: 'demo-price-demo', component: Price},
  {to: "/todolist", name: 'demo-todolist-demo', component: Todolist},
  {to: "/hoc", name: 'demo-hoc-demo', component: Hoc},
  {to: "/boilingVerdict", name: 'boilingVerdict-温度输入', component: BoilingVerdict},
  {to: "/context", name: 'context-全局props', component: Context},
  {to: "/refs", name: 'refs', component: Refs},
  {to: "/renderProps", name: 'render-props', component: RenderProps}
]

export default routes;