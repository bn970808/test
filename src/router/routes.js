/*
 * @Author: DongBingnan
 * @Date: 2021-10-14 16:00:40
 * @LastEditors: DongBingnan
 * @LastEditTime: 2021-10-14 16:41:45
 * @Description: file content
 * @FilePath: \vue 项目\vue_app_test_20211011\src\router\routes.js
 */

// import Home from "Pages/home"; 没有懒加载
const Home = () => import(/*webpackChunkName:'group-foo'*/ "Pages/home"); //懒加载
const List = () => import(/*webpackChunkName:'group-foo'*/ "Pages/list"); //懒加载
const Detail = () => import(/*webpackChunkName:'group-foo'*/ "Pages/detail"); //懒加载
const Car = () => import(/*webpackChunkName:'group-foo'*/ "Pages/car"); //懒加载
const User = () => import(/*webpackChunkName:'group-foo'*/ "Pages/user"); //懒加载
const Login = () => import(/*webpackChunkName:'group-foo'*/ "Pages/user/Login"); //懒加载
const NotFound = () => import(/*webpackChunkName:'group-foo'*/ "Pages/404"); //懒加载
const Activity = () =>
  import(/*webpackChunkName:'group-foo'*/ "Pages/activity"); //懒加载
const Register = () =>
  import(/*webpackChunkName:'group-foo'*/ "Pages/user/Register"); //懒加载
const Category = () =>
  import(/*webpackChunkName:'group-foo'*/ "Pages/category"); //懒加载
export default [
  {
    path: "/",
    redirect: "/home", //重定向 让 / 跳转到 /home
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/list/:id",
    component: List,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
  {
    path: "/car",
    component: Car,
  },
  {
    path: "/user",
    component: User,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/activity",
    component: Activity,
  },
  {
    //错误路由匹配 放在路由表最下面
    path: "*",
    component: NotFound,
  },
];
