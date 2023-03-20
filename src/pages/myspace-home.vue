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
            <!-- <li v-for="category in categoryList">{{category}}</li> -->
            <li><router-link to="/">카테고리 종류</router-link></li>
            <li><router-link to="/">카테고리 종류</router-link></li>
            <li><router-link to="/">카테고리 종류</router-link></li>
            <li><router-link to="/">카테고리 종류</router-link></li>
            <li><router-link to="/">카테고리 종류</router-link></li>
          </ul>
          
          <!-- ***** Most Popular Start ***** -->
          <div class="most-popular">
          <div class="row">
            <div class="col-lg-12">
            <div class="heading-section">
            </div>
            <div class="heading-section">
            </div>
              <div class="row" >
                      <!-- <div v-for="product in productList"> -->
                      <div class="col-lg-3 col-sm-6 product-info">
                          <div class="item" >
                            <img src="/" alt="상품이름" />
                            <h4><span class="product-name">상품이름</span>
                            </h4>
                          </div>
                      </div>
                      <!-- </div> -->
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
export default {

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
.product-name {
    font-size: 1.2em;
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