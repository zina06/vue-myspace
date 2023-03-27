<template>
    <div class="order-container">
        <h2>주문/결제</h2>

        <!-- 배송지가져오기 -->
        <div class="col-8">
            <div class="sub">
                <h5>배송지</h5>
                <hr style="border: solid 2px #d8d7d7;">
                <div class="mb-3 row">
                    <label id="sstitle" class="col-sm-4 col-form-label">이름</label>
                    <div class="col-sm-7">
                        <input name="DELIVERY_NAME" v-model="deliveryName" type="text" class="form-control" placeholder="이름">
                    </div>
                   <label id="sstitle" class="col-sm-4 col-form-label">배송지명</label>
                    <div class="col-sm-7">
                        <input name="ADDRESS_NAME" v-model="addressName" type="text" class="form-control" placeholder="배송지명">
                    </div>
                    <label id="sstitle" class="col-sm-4 col-form-label">주소</label>
                    <div class="col-sm-7">
                        <input name="ADDRESS" v-model="address" type="text" class="form-control" placeholder="주소">
                    </div>
                    <select id="dil-select" v-model="deliveryRequest" class="form-select" style="width: 88%">
                        <option disabled value="">배송지 요청사항을 입력하세요</option>
                        <option value="부재시 문앞에 놓아주세요">부재시 문앞에 놓아주세요</option>
                        <option value="배송전에 미리 연락주세요">배송전에 미리 연락주세요</option>
                        <option value="부재시 경비실에 맡겨주세요">부재시 경비실에 맡겨주세요</option>
                    </select>
                </div>
            </div>
        </div>


        <!-- 결제금액 -->
        <div class="col-3">
            <div class="sub">
                <h5>결제금액</h5>
                <hr style="border: solid 2px #d8d7d7;">
                <div class="mb-3 row">
                    <label id="sstitle" class="col-sm-5 col-form-label">총상품금액</label>
                    <div class="col-sm-6">{{totalProductPrice}}원</div>
                    <label id="sstitle" class="col-sm-5 col-form-label">배송비</label>
                    <div class="col-sm-6">{{deliveryPrice}}원</div>
                    <label id="sstitle" class="col-sm-5 col-form-label">총결제금액</label>
                    <div class="col-sm-6">{{totalPrice}}원</div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                            <label class="form-check-label" for="flexCheckChecked">
                                개인정보 수집 이용 및 제 3자 제공 동의(필수)
                            </label>
                    </div>
                        <div class="infolabel">
                            본인은 만 14세 이상이며, 주문 내용을 확인하였습니다.
                            (주)MYSPACE는 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다 
                        </div>
                    <div class="col-lg-12">
                        <div class="main-button">
                            <a  @click="saveOrder()">결제하기</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- 주문자정보가져오기 -->
      <div class="col-8">
         <div class="sub">
                <h5>주문자</h5>
                <hr style="border: solid 2px #d8d7d7;">
            <div class="mb-3 row">
                    <label id="sstitle" class="col-sm-4 col-form-label">주문자명</label>
                    <div class="col-sm-7" > {{memberInfo.name}} </div>
                    <label id="sstitle" class="col-sm-4 col-form-label">이메일</label>
                    <div class="col-sm-7"> {{memberInfo.email}} </div>
                    <label id="sstitle" class="col-sm-4 col-form-label">전화번호</label>
                    <div class="col-sm-7"> {{memberInfo.phone}} </div>
            </div>
         </div>
      </div>


        <!-- 주문상품가져오기 -->
      <div class="col-8">
         <div class="sub">
            <h5>주문상품</h5>
            <hr style="border: solid 2px #d8d7d7;">
         <div class="mb-3 row">
            <table class="table" v-for="(cartProduct, idx) in cartProductList" :key="idx">
               <thead>
                  <tr class="p-3 mb-2 bg-light text-dark">
                     <th colspan="2" >{{ cartProduct.product.brand.name }}</th>
                     <th scope="col">{{ cartProduct.product.price }}원</th>
                  </tr>
               </thead>
               <tbody>
                <tr>
                    <td style="display: flex; align-items: center; margin-left:50px;">
                        <img class="product-image" :src="cartProduct.product.image_url" >
                        <div style="margin-left: 10px;">
                        <div>{{ cartProduct.product.name }}</div>
                        <div>수량 : {{ cartProduct.amount }}</div>
                        </div>
                    </td>
                    </tr> 
                <!-- <tr v-for="(cartProduct, idx) in cartProductList" :key="idx">
                    <td scope="row">{{ idx + 1 }}</td>
                    <td>{{ cartProduct.product.name }}</td>
                    <td>{{ cartProduct.product.price }}</td>
                    <td>{{ cartProduct.amount }}</td>
                </tr> -->
                </tbody>
            </table>
         </div>
         </div>
        </div>


        <!-- 결제수단 -->
      <div class="col-8">
      <div class="sub">
            <h5>결제하기</h5>
            <hr style="border: solid 2px #d8d7d7;">
         <div class="mb-3 row">
                <select id="dil-select" v-model="payment" class="form-select" style="width: 85%">
                        <option disabled value="">결제수단 선택하기</option>
                        <option value="무통장입금">무통장입금</option>
                        <option value="신용카드">신용카드</option>
                </select>
            </div>
        </div>
        </div>    
                           
                           
   <!-- 끝 -->
   </div>
</template>

<script>
    import { useRoute, useRouter } from "vue-router";
    import axios from "axios";
    import { ref} from "vue";
    import { computed } from 'vue'

    export default {
    setup() {
        const router = useRouter();
        const route = useRoute();
        const name = ref("");
        const email = ref("");
        const phone = ref("");
        const price = ref("");
        const amount = ref("");
        const deliveryName = ref("");
        const addressName = ref("");
        const address = ref("");
        const deliveryRequest = ref("");
        const payment = ref("");
        const memberInfo = ref("");
        const cartProductList = ref([]);


        const cartIdx = route.query.cartIdx;
        //const idx=route.params.idx;
        // 결제금액관련계산식
        let totalProductPrice = computed(() => { // 상품 가격과 개수를 곱한 총 상품 금액을 계산하는 computed 속성
            let sum = 0;
            for (const product of cartProductList.value) {
                sum += product.product.price * product.amount;
            }
            return sum;
        });
        let deliveryPrice = computed(() => {
            if(totalProductPrice.value >= 100000) {
                return 0;
            } else {
                return 3000;
            }
        });
        let totalPrice = computed(() => {
            return deliveryPrice.value + totalProductPrice.value;
        });


        //주문자정보
        const memberFind = async () => {
        //const idx = cartProduct.cart.data.member.idx;
        const memberRes = await axios.get(`/member/${cartIdx}`);
        memberInfo.value = memberRes.data;
        };
        memberFind();
        console.log(memberInfo.value);
        //주문상품정보
        const cartFind = async() => {
            const cartRes = await axios.get(`/cartProduct/cart/${cartIdx}`);
            cartProductList.value = cartRes.data;
        }
        cartFind();
        console.log(cartProductList.value);
        
        //saveOrder
        const saveOrder = async() => {
            let orderIdx = ref(null);
            const res = await axios.post('/order/save', {
                member : {
                    idx: 2
                },
                cart : {
                    idx: cartIdx
                },
                //member_idx: memberInfo.value.idx,
                delivery_name: deliveryName.value,
                address_name: addressName.value,
                address: address.value,
                delivery_request: deliveryRequest.value,
                payment: payment.value,
                price: totalPrice.value,
                delivery_price: deliveryPrice.value
            });
            console.log(res);

            orderIdx.value = res.data.idx;
            console.log(orderIdx.value);
            const idx = orderIdx.value;
            console.log(idx);
            router.push({
                name: "OrderConfirm",
                query: {
                    idx : idx,
                }
            });
        }

        memberFind();
        return {
            name,
            email,
            phone,
            cartIdx,
            price,
            amount,
            route,
            router,
            cartProductList,
            deliveryName,
            addressName,
            address,
            deliveryRequest,
            payment,
            saveOrder,
            memberInfo,
            totalProductPrice,
            deliveryPrice,
            totalPrice,
        };
    }
    }
</script>

<style>
    @import "@/assets/css/order.css";
</style>