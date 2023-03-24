<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="page-content">
          <!-- ***** Banner Start ***** -->
          <!-- <div class="main-banner">
          <div class="row">
              <div class="col-lg-7">
              <div class="header-text">
                  <h6>Welcome To Cyborg</h6>
                  <h4><em>Browse</em> Our Popular Games Here</h4>
                  <div class="main-button">
                  <a href="browse.html">Browse Now</a>
                  </div>
              </div>
              </div>
          </div>
          </div> -->
          <!-- <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style="height: 330px;  width: 100%">
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167844178173643370.jpg?w=2560" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167866769021640162.png?w=2560" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167869907959118826.png?w=2560" class="d-block w-100" alt="...">
              </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>
          </div> -->
          
          <!-- ***** Banner End ***** -->	
          <ul class="category-list" >
            <li v-for="category in categoryList" :key="category.idx"><a v-bind:href="category.idx">{{category.name}}</a></li>
          </ul>
          
          <!-- ***** Most Popular Start ***** -->
          <div class="most-popular">
            <div class="row">
              <div class="col-lg-12">
                <div class="row" >
                  <div class="col-lg-3 col-sm-6 product-info" v-for="product in productList" :key="product.idx">
                    <div class="item" >
                      <img v-bind:src="product.image_url" />
                      <div class="pro-name">{{product.name}}</div>
                      <span>{{product.price}}원</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>       
          <!-- ***** Most Popular End ***** -->

          <div class="paging" style="">
          <!-- <ul>
              <c:if test="${pageMaker.prev }">
              <li class="paginate_button previous">
                  <a href="${pageMaker.startPage -1 }">Previous</a> 
              </li>
              </c:if>
          </ul>
              <c:forEach var="num" begin="${pageMaker.startPage }" end="${pageMaker.endPage }">
              <li class="paginate_button ${pageMaker.cri.pageNum == num ? "active":""} ">
                  <a href="${num }">${num }</a>
              </li>
              </c:forEach>
              
              <c:if test="${pageMaker.next }">
              <li class="paginate_button next">
                  <a href="${pageMaker.endPage +1 }">Next</a> 
              </li>
              </c:if> -->
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import axios from 'axios';
import { ref }  from 'vue';
export default {
  setup () {
    let categoryList = ref(null);
    let productList = ref(null);

    const getCategoryList = async () => {
      const res =  await axios.get('/category/findAll');            
      categoryList.value = res.data;        
      console.log(categoryList.value);
    }

    const getProductList = async () => {
      const res =  await axios.get('/product/findAll');            
      productList.value = res.data;        
      console.log(productList.value);
    }
  
    getCategoryList();
    getProductList();
    return {
      categoryList,
      productList,
      getCategoryList,
      getProductList,
    }
  }
}
</script>

<style>
.page-content {
    background-color: white;
}

.category-list {
    display: flex; 
    justify-content: space-between; 
    font-size: 20px; 
    border-top: 1px solid #CCC; 
    border-bottom: 1px solid #CCC; 
    padding: 10px 0 15px 0;
}

.row {
    padding: 0;
}

.product-info {
    width: 22%;
}

.product-info .item {
    cursor: pointer;
}
.pro-name {
    width: 180px;
    font-size: 1.2em;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}

.item span {
  text-align: end;
}
.paging {
    display: flex; 
    justify-content: space-between; 
    font-size: 20px; 
    width: 200px; 
    margin: 0 auto; 
    color: black;
}
</style>