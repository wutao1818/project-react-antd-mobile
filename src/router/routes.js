import { lazy } from 'react'

// 引入懒加载路由
const Navpage = lazy(() => import('@/views/navpage'));
const Demo = lazy(() => import('@/views/demos/demo'));
const FormDemo = lazy(() => import('@/views/demos/formDemo'));
const BoilingVerdict = lazy(() => import('@/views/demos/boilingVerdict'));
const Price = lazy(() => import('@/views/demos/price'));
const Todolist = lazy(() => import('@/views/demos/todolist'));
const Context = lazy(() => import('@/views/demos/context'));
const Fragments = lazy(() => import('@/views/demos/fragments'));
const Optimizing = lazy(() => import('@/views/demos/optimizing'));
const Refs = lazy(() => import('@/views/demos/refs'));
const RenderProps = lazy(() => import('@/views/demos/renderProps'));
const LifeCycle = lazy(() => import('@/views/demos/lifeCycle'));
const Hoc = lazy(() => import('@/views/demos/hoc'));

const routes = [
  {to: "/home", name: '首页', component: Navpage},
  {to: "/lifeCycle", name: '生命周期', component: LifeCycle},
  {to: "/hoc", name: '高阶组件', component: Hoc},
  {to: "/demo", name: '测试页', component: Demo},
  {to: "/formDemo", name: '表单demo页', component: FormDemo},
  {to: "/boilingVerdict", name: '温度状态提升demo页', component: BoilingVerdict},
  {to: "/price", name: '价格测试', component: Price},
  {to: "/todolist", name: 'todolist测试', component: Todolist},
  {to: "/context", name: 'context 全局props', component: Context},
  {to: "/fragments", name: 'fragments 标签容器', component: Fragments},
  {to: "/optimizing", name: 'Optimizing 性能优化', component: Optimizing},
  {to: "/refs", name: 'refs & DOM', component: Refs},
  {to: "/renderProps", name: 'render props', component: RenderProps}
]

export default routes;