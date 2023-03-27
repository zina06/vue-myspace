<template>
  <div class="review-container">
    <h2>리뷰 작성</h2>
    <form name="reviewFormData" @submit.prevent="submitForm">
      <div class="review-box">
        <div>
            <div class="review-data">
              <div class="product-img"><img  v-bind:src="productData.image_url" alt="" ></div>
                <div class="product-name">
                  <span>{{productData.name}}</span>
                  <div class="review-score">
                    <div>
                      <label for="durability">내구성</label>
                        <select id="durability" v-model="updateScore.durability">
                          <option v-for="num in 6" :key="num" :value="num - 1">{{ num - 1 }}</option>
                        </select>
                      <label for="price">가격</label>
                        <select  id="price" v-model="updateScore.price">
                          <option v-for="num in 6" :key="num" :value="num - 1">{{ num - 1 }}</option>
                        </select>
                    </div>
                    <div>
                      <label for="design">디자인</label>
                        <select  id="design" v-model="updateScore.design">
                          <option v-for="num in 6" :key="num" :value="num - 1">{{ num - 1 }}</option>
                        </select>
                      <label for="delivery">배송</label>
                        <select  id="delivery" v-model="updateScore.delivery">
                          <option v-for="num in 6" :key="num" :value="num - 1">{{ num - 1 }}</option>
                        </select>
                    </div>
                </div>
              </div>
            </div>
            <div class="review-content">
              <textarea name="content" id="content" cols="100" rows="10" v-model="updateReview.content"></textarea>
            </div>
        </div>
            <div class="review-button">
              <button class="review-button" type="submit">수정</button>
              <button class="review-button" @click.prevent="cancel">취소</button>
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
    let productData = ref(null);
    let reviewData = ref(null);
    const router = useRouter();
    const route = useRoute();
    const updateReview = ref({
      idx: null,
      content: null,
    });
    const updateScore = ref({
      idx: null,
      durability: null,
      price: null,
      design: null,
      delivery: null,
    });
    const getProduct = async () => { 
      const res = await axios.get('/product/' + 1); // router.query.productIdx
      productData.value = res.data;
      console.log(productData.value);
    }    
    const getReview = async () => { 
      const res = await axios.get('/review/' + 1); // router.query.reviewIdx
      reviewData.value = res.data;
      console.log(reviewData.value);
      console.log(reviewData.value.score);
      updateReview.value.idx = reviewData.value.idx;
      updateReview.value.content = reviewData.value.content;
      updateScore.value.idx = reviewData.value.score.idx;
      updateScore.value.durability = reviewData.value.score.durability;
      updateScore.value.price = reviewData.value.score.price;
      updateScore.value.design = reviewData.value.score.design;
      updateScore.value.delivery = reviewData.value.score.delivery;
    }
    getProduct();
    getReview();
    const submitForm = async () => {
      console.log(updateReview.value);
      await axios.put('/review/update', updateReview.value)
      await axios.put('/score/update', updateScore.value)
    }
    const cancel = () => {
      router.push({
        name: "ReviewList"
      });
    }
    return {
      productData,
      reviewData,
      router,
      route,
      updateReview,
      updateScore,

      submitForm,
      cancel,
    }
  }
}
</script>

<style>
.review-container {
  background-clip: padding-box;
  width: 860px;
  height: 630px;
  display: block;
  margin: 150px auto 0;
  padding: 30px;
  background-color: #1f2122;
  border-radius: 23px;
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
  background-color: #27292a;
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
  color: white;
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

.review-button {
  width: 50px; 
  height: 30px; 
  border-radius: 7px; 
  margin-right: 10px;
}
</style>