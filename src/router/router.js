import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/myspace-home.vue";
import Myhome from "@/pages/member/mypage-home.vue"
import ReviewLIst from "@/pages/member/review-list.vue"
import ReviewInsert from "@/pages/member/review-insert.vue"
import CartList from "@/pages/cart/cart-list.vue"


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
            name: "ReviewLIst",
            component: ReviewLIst
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
        }
    ]
});

export default router;
