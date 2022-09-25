const home=()=> import("../views/Home/home")
const login=()=> import("../views/login/login")
const  register=()=> import("../views/register/register")
const  search=()=> import("../views/search/search")
const  detail=()=> import("../views/Detail/index")
const AddCartSuccess=()=>import("../views/AddCartSuccess/index")
const shopCart=()=>import("../views/ShopCart/index")
const  trade=()=>import("../views/Trade/index")
const  pay=()=>import("../views/Pay/index")
const paySuccess=()=>import("../views/PaySuccess/index")
const center=()=>import("../views/Center/index")
const myOder=()=>import("../views/Center/myOder/myOder")
const groupOder=()=>import("../views/Center/groupOder/groupOder")

const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
        meta: { show: true }
    },
    {
        path: '/login',
        name: 'login',
        component:login,
        meta: { show: false }
    },
    {
        path: '/register',
        name: 'register',
        component:register,
        meta: { show: false }
    },
    {
        path: '/search',
        name: 'search',
        component:search,
        meta: { show: true }
    },
    {
        path: '/detail',
        name: 'detail',
        component:detail,
        meta: { show: true }

    },
    {
        path: '/AddCartSuccess',
        name: 'AddCartSuccess',
        component:AddCartSuccess,
        meta: { show: true }
    },
    {
        path: '/shopCart',
        name: 'shopCart',
        component:shopCart,
        meta: { show: true }
    },
    {
        path: '/trade',
        name: 'trade',
        component:trade,
        meta: { show: true }
    },
    {
        path: '/pay',
        name: 'pay',
        component:pay,
        meta: { show: true }
    },
    {
        path: '/paySuccess',
        name: 'paySuccess',
        component:paySuccess,
        meta: { show: true }
    },{
        path: '/center',
        name: 'center',
        component:center,

        children:[
            {
            path:"myOder",
            component:myOder
           },
            {
                path:"groupOder",
                component:groupOder
            },
            {
                path: '',
                redirect: 'myOder'
            }
        ],
        meta: { show: true }
    }
]

export default routes
