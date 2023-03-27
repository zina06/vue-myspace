<template>
  <div class="container" style="box-sizing: border-box !important">
    <div class="row">
        <div class="col-lg-12">
            <div class="page-content">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="main-profile">
                            <div class="row">
                                <div class="col-lg-4">
                                    <img src="@/assets/images/profile_images.webp" alt="" style="border-radius: 23px;">
                                </div>
                                <div class="col-lg-4 align-self-center">
                                    <div class="main-info header-text">
                                        <div class="main-button" style="margin-bottom: 20px;">
                                            <a href="/logout">로그아웃</a>
                                        </div>
                                        <h4>{{ member.name }}님, 환영합니다</h4>
                                        <p>자기소개를 입력해주세요</p>
                                        <div class="main-border-button">
                                            <a id="dialog" href="" @click.prevent="showModal = true">회원정보수정</a>
                                            <dialog :open="showModal" @close="showModal = false">
                                                <h4>회원정보수정</h4>
                                                <form name="form-member-update" onsubmit="return false;">
                                                    <input type="hidden" class="form-control" name="idx" v-model="updateMember.idx" >
                                                    <label for="loginId">로그인ID</label>
                                                    <input type="text" class="form-control" readonly id="loginId" name="loginId" v-model="updateMember.loginId">
                                                    <br>
                                                    <label for="password">비밀번호</label>
                                                    <input class="form-control" type="password" id="password" name="password" value="****" readonly >
                                                    <br>
                                                    <label for="name">이름</label>
                                                    <input class="form-control" type="text" id="name" name="name" v-model="updateMember.name" >
                                                    <br>
                                                    <label for="name">이메일</label>
                                                    <input class="form-control" type="text" name="email" v-model="updateMember.email" >
                                                    <br>
                                                    <label for="name">전화번호</label>
                                                    <input class="form-control" type="text" name="phone" v-model="updateMember.phone" >
                                                    <br>
                                                </form>
                                                <div class="col-lg-12">
                                                    <div class="main-button">
                                                        <a @click.prevent="getUpdateMember" href="/mypage/home">저장하기</a>
                                                    </div>

                                                </div>
                                            </dialog>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 align-self-center">
                                    <ul style="text-align: center;">
                                        <li><a href="/mypage/review">내가 작성한 리뷰</a></li>
                                        <li><a href="#">질문 답변</a></li>
                                        <li><a href="/cart/list">장바구니</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="clips">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="heading-section">
                                                    <h4><em>최근</em> 주문내역</h4>
                                                </div>
                                                <template v-for="(order) in orderList" :key="order.idx">
                                                    <h4>주문번호: <em>{{ order.idx }}</em></h4>
                                                    <template v-for="(cartProduct) in order.cartProductList"  :key="cartProduct.idx">
                                                        <div class="item">
                                                            <ul>
                                                                <li>
                                                                    <img v-bind:src="cartProduct.product.image_url" alt="" class="templatemo-item">
                                                                    <a :href="`/product/detail?idx=${cartProduct.product.idx}`">
                                                                        <h4>{{ cartProduct.product.name }}
                                                                            <span style="margin-left: 10px; color: #1EDDFF;">{{ cartProduct.product.brand.name }}</span>
                                                                        </h4>
                                                                    </a>
                                                                    <span>
                                                                        <button class="review-insert">리뷰 작성</button>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <h4>카테고리</h4><span>{{ cartProduct.product.category.name }}</span>
                                                                </li>
                                                                <li>
                                                                    <h4>상품가격</h4><span>{{ cartProduct.product.price }}</span>
                                                                </li>
                                                                <li>
                                                                    <h4>주문일</h4><span>{{ order.regdate }}</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </template>
                                                    <br>
                                                </template>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="main-button">
                                                <a href="#">TOP</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
    data(){
            return{
                showModal:false
            }
        },

    setup(){
        //variable
        const member = ref(null);
        const orderList = ref(null);
        const updateMember = ref(null);
        const router = useRouter();
        

        //function
        const getMember = async () => {
            const result = await axios.get("/member/principal");
            member.value = result.data;
            updateMember.value = {...result.data};
            console.log(updateMember.value)

            getOrderListByMember();
        }
        getMember();

        const getOrderListByMember = async () => {
            const memberIdx = member.value.idx;
            const result = await axios.get("/order/memberOrder/" + memberIdx);
            orderList.value = result.data;
            console.log(orderList.value);
        }

        const getUpdateMember = async() =>{
            try {
                const result = await axios.put("/member/update", updateMember.value);
                if(result != null){
                    alert("수정 완료!")
                    router.push({name: "Home"});
                }
            } catch (error) {
                alert("회원정보를 수정하지 못했습니다.");
            }}

        //return
        return {
            member,
            orderList,
            updateMember,
            getUpdateMember
        }
    }
}

</script>

<style>
  *{
    box-sizing: border-box !important;
}

.myh4 {
    font-size: 25px;
}

dialog {
    background-color: #27292a; 
    background-size: cover;
    min-height: 500px;
    margin: auto;
    border-radius: 23px;
    padding: 80px 60px;
    border-color: #1EDDFF;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    z-index: 1001;
}

dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
}

label {
    color: white;
}


.item ul li a h4 {
	font-size: 17px;
	margin-left: 15px;
}

.review-insert {
	margin-top: 35px;
	width: 110px;
	height: 45px;
	border-radius: 20px;
	background-color: #1EDDFF;
	color: white;
	border: 1px solid #1EDDFF;
}

.review-insert:hover {
    background-color: #fff;
    color: #1EDDFF;
}
</style>