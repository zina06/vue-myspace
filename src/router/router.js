import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/myspace-home.vue";
import Myhome from "@/pages/member/mypage-home.vue"
import ReviewList from "@/pages/member/review-list.vue"
import ReviewSave from "@/pages/member/review-save.vue"
import ReviewInsert from "@/pages/member/review-insert.vue"
import MemberRegister from "@/pages/member/member-register.vue"
import Login from "@/pages/member/member-login.vue"
import CartList from "@/pages/cart/cart-list.vue"

import ProductDetail from "@/pages/product/product-detail.vue"
import OrderPay from "@/pages/order/order-pay.vue"
import OrderConfirm from "@/pages/order/order-confirm.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/mypage/home",
            name: "Myhome",
            component: Myhome
        },
        {
            path: "/mypage/review",
            name: "ReviewList",
            component: ReviewList
        },
        {
            path: "/mypage/review/save",
            name: "ReviewSave",
            component: ReviewSave
        },
        {
            path: "/mypage/review/insert",
            name: "ReviewInsert",
            component: ReviewInsert
        },
        {
            path: "/member/register",
            name : "MemberRegister",
            component : MemberRegister
        },
        {
            path : "/login",
            name : "Login",
            component : Login
        },
        {
            path:"/cart/list",
            name:"CartList",
            component: CartList
        },
        {
            path: "/product/detail/:idx",
            name: "ProductDetail",
            component: ProductDetail
           
        },
        {
            path: "/order/pay",
            name: "OrderPay",
            component: OrderPay
        },
        {
            path: "/order/confirm",
            name: "OrderConfirm",
            component: OrderConfirm
        }
    ]
});

export default router;
