<template>
  <div class = "cart-wrapper">
    
    <div class = "cart-container">

   <div>
   <table class="table table-bordered">
   <thead style="background-color: #FAFAFA;">
     <tr>
       <th scope="col-2" style="width: 40%;">상품정보</th>
       <th scope="col" style="width: 15%;">판매가</th>
       <th scope="col" style="width: 15%;">수량</th>
       <th scope="col" style="width: 15%;">구매가</th>
       <th scope="col" style="width: 15%;">삭제</th>
       
     </tr>
   </thead>
   <tbody>
     <tr v-for="product in cartProductList" :key="product.idx">
      <td style="display: flex; align-items: center; padding: 25px">
        <div class="form-check" style="display: flex; align-items: center;">
          <input class="form-check-input" 
                type="checkbox" 
                value="" 
                id="flexCheckChecked"
                style="width: 15px; height: 15px; "
                checked />
        </div>
        <img class="product-image" :src="product.product.image_url" alt="" >
        <div id = "product-info">
        <span id="brandName" class="brand-name">{{ product.product.brand.name }}</span>
        <span id="ProductName" class="product-name">{{ product.product.name }}</span>
      </div>
      </td>
       <td style="vertical-align: middle;">{{ product.product.price }}원</td>
       <td style="vertical-align: middle;">
        <div style="display: flex; justify-content: center; align-items: center;">
         <select class="form-select" 
         aria-label="Default select example" style="width: 70%;"
         v-model="product.amount" @change="updateAmount(product.idx, product.amount)" :idx = product.idx>
         <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
         </select>
        </div>
       </td>
       <td style="color: #cc0000; vertical-align: middle;">{{ product.product.price * product.amount }}원</td>
       <td style="vertical-align: middle;">
    
         <button 
           type="button" 
           class="btn btn-outline-secondary"
           @click="deleteProduct(product.idx)" :idx= product.idx 
           >
           X 삭제
         </button>
       </td>
     </tr>
   </tbody>
 </table>
 </div>
 <div id = buttonarea style="display: flex; align-items: center">
 <button 
    type="button" 
    class="btn btn-outline-secondary"
    style="margin-top: 15px; "
    
  >
  선택상품 주문
  </button>
  <button 
    type="button" 
    class="btn btn-outline-secondary"
    style="margin-top: 15px; margin-left: 5px;"
  >
  전체상품 주문
  </button>
</div>
</div>


<div class = "cart-container2" >
  <ol class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-start " style="padding: 20px;">
    <div class="ms-2 me-auto">
      <div class="fw-bold">총 상품 금액</div>
    </div>
    <span>{{ totalAmount }}원</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start" style="padding: 20px;">
    <div class="ms-2 me-auto">
      <div class="fw-bold">배송비</div>
    </div>
    <div v-if="totalAmount >= 30000">
      <span>0원</span>
    </div>
    <div v-else>
      <span>{{deliveryPrice}}원</span>
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start" style="padding: 15px;">
    <div class="ms-2 me-auto">
      <div class="fw-bold" style="font-weight: bold; font-size: large;" >결제금액</div>
    </div>
    <div v-if="totalAmount >= 30000" class="fw-bold" style="font-weight: bold; font-size: large;">
      <span>{{ totalAmount }}원</span>
    </div>
    <div v-else class="fw-bold" style="font-weight: bold; font-size: large;">
      <span>{{totalAmount + 2500}}원</span>
    </div>
  </li>
  
        <button 
          type="button" 
          class="btn btn-info"
          style="margin-top: 15px; font-size: large; color: #FFF; padding:15px"
          >
          {{cartProductList.length}}개 상품 구매하기
        </button>
                  
</ol>

</div>
</div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router';
import axios from 'axios';
import { ref } from "vue";


export default {
  computed: {
  totalAmount() {
    return this.cartProductList.reduce((acc, product) => {
      return acc + (product.product.price * product.amount)
    }, 0)
  }
},

  setup(){
    const router = useRouter();
    const route = useRoute();
    const brandName = ref('');
    const productName = ref('');
    const sellPrice = ref('');
    const image_url = ref('');
    const amount = ref('');
    const idx = 2;
    const productIdx = ref('');
    let cartProductList = ref(null);
    const deliveryPrice = 2500;
    
    
    
    const getCart = async() => {
        const res = await axios.get(`/cartProduct/cart/${idx}`);
        cartProductList.value = res.data;
        console.log(res);
    }
    getCart();

    
    const updateAmount = async (idx, amount) => {
      try{
    await axios.put('/cartProduct/update', { idx: idx, amount: amount});
    
       
    }catch (error){
      console.log(error);
    }
    };

    const deleteProduct = async(idx) => {
      try{ 
        await axios.delete(`/cartProduct/delete/${idx}`);
        console.log("delete success");
        router.go(0);  
      }catch (error) {
        console.error(error);
      }

    }

    
    
    
  
  

    

  return{
    route,
    router,
    brandName,
    productName,
    sellPrice,
    image_url,
    idx,
    getCart,
    amount,
    deliveryPrice,
    productIdx,
    cartProductList,
    updateAmount,
    deleteProduct,
  
  }
   

  }
}
</script>

<style>
@import "@/assets/css/cart-list.css";



</style>