import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/myspace-home.vue";
import Myhome from "@/pages/member/mypage-home.vue"
import ReviewList from "@/pages/member/review-list.vue"
import ReviewSave from "@/pages/member/review-save.vue"
import ReviewInsert from "@/pages/member/review-insert.vue"
import CartList from "@/pages/cart/cart-list.vue"

import ProductDetail from "@/pages/product/product-detail.vue"

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
            path:"/cart/list",
            name:"CartList",
            component: CartList
        },
        {
            path: "/product/detail/:idx",
            name: "ProductDetail",
            component: ProductDetail
        }
    ]
});

export default router;
