<template>
    <div class = "cart-container">
  <h1>장바구니</h1>
  
 
   <div>
   <table class="table">
   <thead>
     <tr>
       <th colspan="2">상품</th>
       <th scope="col">판매가</th>
       <th scope="col">수량</th>
       <th scope="col">구매가</th>
       <th scope="col">삭제</th>
       
     </tr>
   </thead>
   <tbody>
     <tr>
       <td>상품1</td>
       <td><img src="image01.PNG" class="img-fluid" alt="..."></td>
       <td>100000</td>
       <td>
         <select class="form-select" 
         aria-label="Default select example" >
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
         </select>
       </td>
       <td>100000</td>
       <td>
         <button 
           type="button" 
           class="btn btn-primary"
           >
           삭제
         </button>
       </td>
     </tr>
     
     
   </tbody>
 </table>
 </div>
</div>
<div class = "cart-container2" style= "display: flex;">
  <ol class="list-group col-4">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">총 상품 금액</div>
    </div>
    <span>10000</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">배송비</div>
    </div>
    <span>2500</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">결제금액</div>
    </div>
    <span>12500</span>
  </li>
  <button 
          type="button" 
          class="btn btn-primary"
          >
          1개 상품 구매하기
        </button>
</ol>
</div>

</template>

<script>
export default {

}
</script>

<style>
.cart-container {
  width: 800px;
  display: block;
  margin: 110px auto 0;
  padding: 60px;
}

.cart-container2 {
  
  display: block;
  margin: 110px;
  padding: 60px;
}


</style>