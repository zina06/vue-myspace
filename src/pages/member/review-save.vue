<template>
  <div class="review-container">
    <h2>리뷰 작성</h2>
    <form name="reviewFormData">
      <div class="review-box">
        <div>
            <div class="review-data">
              <!-- <div class="product-img"><img  v-bind:src="orderData.cart.cartProductList.product.image_url" alt="" ></div> -->
                <div class="product-name">
                  <span>{{rorderData.cart.cartProductList.product.name}}</span>
                  <div class="review-score">
                    <div>
                      <label for="durability">내구성</label>
                        <select v-model="durability" id="durability">
                          <option v-for="num in 6" :key="num" :value="num - 1" :selected="reviewData.score.durability === num-1">{{ num - 1 }}</option>
                        </select>
                      <label for="price">가격</label>
                        <select v-model="price" id="price">
                          <option v-for="num in 6" :key="num" :value="num - 1" :selected="reviewData.score.price === num-1">{{ num - 1 }}</option>
                        </select>
                    </div>
                    <div>
                      <label for="design">디자인</label>
                        <select v-model="design" id="design">
                          <option v-for="num in 6" :key="num" :value="num - 1" :selected="reviewData.score.design === num-1">{{ num - 1 }}</option>
                        </select>
                      <label for="delivery">배송</label>
                        <select v-model="delivery" id="delivery">
                          <option v-for="num in 6" :key="num" :value="num - 1" :selected="reviewData.score.delivery === num-1">{{ num - 1 }}</option>
                        </select>
                    </div>
                </div>
              </div>
            </div>
            <div class="review-content">
              <textarea name="content" id="content" cols="100" rows="10" v-model="reviewData.content"></textarea>
            </div>
        </div>
            <div class="review-button">
              <button  @click="saveBtn" >{{update ? '수정' : '작성'}}</button>
              <button  @click="cancel">취소</button>
            </div>
       </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue'; 
import { useRouter, useRoute } from 'vue-router'
export default {
  setup () {
    let orderData = ref(null);
    const router = useRouter();
    const route = useRoute();
    const update = true;//route.query.update;
    const getReview = async () => { 
      const res = await axios.get('/order/' + 1);//route.query.idx
      orderData.value = res.data;
      console.log(orderData.value);
    }
    getReview();
    const saveBtn = () => {
      if (update) { // 수정

      }else { // 생성

      }
    }
    const cancel = () => {
      router.push({
        name: "ReviewList"
      });
    }
    return {
      orderData,
      router,
      route,
      update,
      getReview,
      saveBtn,

      cancel,
    }
  }
}
</script>

<style>
.review-container {
  width: 800px;
  height: 600px;
  display: block;
  margin: 110px auto 0;
  padding: 60px;
}

.review-container h2 {
  color: #1EDDFF;
  font-weight: 700;
}

.review-box {
  margin: 15px auto 0;
  width: 760px;
  height: 510px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  align-content: center;
  padding: 10px 15px;
}

.review-data {
  display: flex;
  height: 300px;
}

.product-img {
  width: 330px;
  height: 270px;
  padding: 5px;
  margin: auto;
}

.review-data div:nth-child(1) img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.product-name {
  width: 360px;
  padding: 15px;
  
}

.product-name span{
  font-size: 20px;
  font-weight: 600;
}

.review-score {
  width: 300px;
  height: 100px;
  margin: 100px auto 0;
  text-align: center;
  font-size: 18px;
}

.review-score div:nth-child(1) select {
  margin-right: 20px;
}

.review-score div:nth-child(2) select {
  margin-top: 30px;
  margin-right: 20px;
}


.review-score label {
  padding: 5px;
}

.review-content textarea{
  width:730px;
  height: 150px;
  resize: none;
}

.review-button input {
  background-color: #1EDDFF(0,0,0,0);
  font-size: 15px;
  border-radius: 8px;
  border: 1px solid gray;
  color: #1EDDFF;
  padding: 8px;
}

.review-button input:hover {
  background-color: #1EDDFF;
}

button {
  width: 50px; 
  height: 30px; 
  border-radius: 7px; 
  margin-right: 10px;
}
</style>