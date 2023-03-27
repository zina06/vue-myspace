<template>
    <div class="order-container">
        <h2>주문완료</h2>

        <!-- 결제확인내용 -->
        <div class="row">
            <table class="table">
                <tbody>
                    <tr>
                        <th scope="col">배송지</th>
                        <td>{{ delivery_name }}</td>
                    </tr>
                    <tr>
                        <th scope="row">주문자</th>
                        <td>{{ address }}</td>
                    </tr>
                    <tr>
                        <th scope="row">결제수단</th>
                        <td>{{ payment }}</td>
                    </tr>
                    <tr>
                        <th scope="row">총결제금액</th>
                        <td>{{ price }}</td>
                    </tr>
                    <tr>
                        <th scope="row">주문일자</th>
                        <td>{{ regdate }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-lg-12">
            <div class="main-button">
                <a href="/">돌아가기</a>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';

export default {
  setup() {
    const delivery_name = ref('');
    const address = ref('');
    const payment = ref('');
    const price = ref('');
    const regdate = ref('');

    const route = useRoute();
    const idx = route.params.idx;
    //const idx=1;
    console.log(idx);
    const orderFindAsc = async () => {
      //const res = await axios.get(`/order/${idx}`);
      const res = await axios.get(`/order/recently/${idx}`);
      const order = res.data;

      delivery_name.value = order.delivery_name;
      address.value = order.address;
      payment.value = order.payment;
      price.value = order.price;
      regdate.value = order.regdate;
    };

    orderFindAsc();

    return {
      delivery_name,
      address,
      payment,
      price,
      regdate,
      route,
    };
  },
};
</script>

<style>
    @import "@/assets/css/order.css";
</style>