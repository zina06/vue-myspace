<template>
    <div>
  <h1>장바구니</h1>
  
 
   <div>
   <table class="table ">
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

</template>

<script>
export default {

}
</script>

<style>



</style>