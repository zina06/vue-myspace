<template>
  <div class="review-container">
    <h2>리뷰 작성</h2>
    
	<form name="reviewFormData">
      <div class="review-box">
        <div>
            <div class="review-data">
              <div class="product-img"><img src="/" alt="상품사진"></div>
                <div class="product-name">
                  <span>{{productname}}</span>
                  <div class="review-score">
                    <div>
                      <label for="durability">내구성</label>
                        <select name="durability" id="durability">
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      <label for="price">가격</label>
                        <select name="price" id="price">
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                    </div>
                    <div>
                      <label for="design">디자인</label>
                        <select name="design" id="design">
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      <label for="delivery">배송</label>
                        <select name="delivery" id="delivery">
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                    </div>
                </div>
              </div>
            </div>
            <div class="review-content">
              <textarea name="content" id="content" cols="100" rows="10"></textarea>
            </div>
        </div>
            <div class="review-button">
              <input type="submit" id="submit" value="작성">
              <input type="button" value="취소">
            </div>
       </div>
       </form>
      </div>
</template>

<script>
export default {

}
</script>

<style>
  @import "@/assets/css/review_insert.css";
</style>