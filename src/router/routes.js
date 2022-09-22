import Main from '../component/main'
import NotFound from "../common/NotFound"
import List from '../component/list'

export default [
    { path: "", component: <Main />, nav: true, footer: true },
    { path: "/list", component: <List />, nav: true, footer: true },
    { path: "*", component: <NotFound />, nav: false, footer: false }
]