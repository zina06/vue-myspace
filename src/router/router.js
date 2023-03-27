import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/myspace-home.vue";
import Myhome from "@/pages/member/mypage-home.vue"
import ReviewLIst from "@/pages/member/review-list.vue"
import ReviewInsert from "@/pages/member/review-insert.vue"
import MemberRegister from "@/pages/member/member-register.vue"
import MemberLogin from "@/pages/member/member-login.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
            props: true,
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
            path: "/member/register",
            name : "MemberRegister",
            component : MemberRegister
        },
        {
            path : "/member/login",
            name : "MemberLogin",
            component : MemberLogin
        }
    ]
});

export default router;
