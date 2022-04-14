// var api_product = "http://localhost:8000";


import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue'
import Profil from './components/Profil.vue'
import Login from './components/Login.vue'

import Member from './components/Member/Member.vue'
import AddMember from './components/Member/Add-Member.vue'
import UpdateMember from './components/Member/Update-Member.vue'

import Product from './components/Product/Product.vue'
import AddProduct from './components/Product/Add-Product.vue'
import UpdateProduct from './components/Product/Update-Product.vue'
import UploadProduct from './components/Product/Upload-Product.vue'
// const UploadProduct = () =>
//     import ('./components/Product/Upload-Product.vue')
import axios from 'axios'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: "Home_page", component: Home },
        { path: '/profil', name: "Profil_page", component: Profil },
        { path: '/login', name: "Login_page", component: Login },

        { path: '/member', name: "Member_page", component: Member },
        { path: '/addMember', name: "Add_member", component: AddMember },
        { path: '/updateMember/:id', name: "Update_member", component: UpdateMember },

        { path: '/product', name: "Product_page", component: Product },
        { path: '/addProduct', name: "Add_product", component: AddProduct },
        { path: '/updateProduct/:id', name: "Update_product", component: UpdateProduct },
        { path: '/uploadProduct/:id', name: "Upload_product", component: UploadProduct },
    ],
    base: '/'
});

const app = createApp(App)
app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app')