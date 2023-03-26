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
              <li v-for="category in categoryList" :key="category.idx" :class="category.idx === categoryNum ? 'cli' : ''"><a @click="categoryClick(category.idx)">{{category.name}}</a></li>
            </ul>
            
            <!-- ***** Most Popular Start ***** -->
            <div class="most-popular">
              <div class="row">
                <div class="col-lg-12">
                  <div class="row" >
                    <template v-for="(product, index) in productList"  :key="product.idx" >
                    <div class="col-lg-3 col-sm-6 product-info" v-if="(cuurentPage-1)*limit <= index && index < (cuurentPage*limit)">
                      <div class="item" @click="moveDetailPage(product.idx)" >
                        <img v-bind:src="product.image_url" />
                        <div class="pro-name">{{product.name}}</div>
                        <span>{{product.price}}원</span>
                      </div>
                    </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>       
            <!-- ***** Most Popular End ***** -->
  
  
              <ul class="paging">
                <li class="paginate_button previous" v-if="cuurentPage != 1">
                    <a class="page-link" @click="movePage(cuurentPage-1)">Previous</a>
                </li>
                <li v-for="page in numberOfPages" :key="page"  >
                    <a class="page-link" :class='cuurentPage === page ? "cli" : ""' @click="movePage(page)">{{page}}</a>
                </li>
                <li class="paginate_button next" v-if="numberOfPages != cuurentPage">
                    <a class="page-link" @click="movePage(cuurentPage+1)">Next</a>
                </li>
              </ul>
  
          </div>
        </div>
      </div>
      
    </div>
  
  
  </template>
  
  <script>
  import axios from 'axios';
  import { ref, computed } from 'vue';
  import { useRoute, useRouter} from 'vue-router';
  export default {
    setup () {
      let categoryList = ref(null);
      let productList = ref(null);
      const route = useRoute();
      const router = useRouter();
      const categoryNum = ref(0);
      const searchKeyword = ref('');
      const productTotal = ref(0);
      const cuurentPage = ref(1);
      const limit = 16;
      const getCategoryList = async () => {
        const res =  await axios.get('/category/findAll');            
        categoryList.value = res.data;        
        console.log(categoryList.value);
      }
      getCategoryList();
      const categoryClick = async (idx) => {
        categoryNum.value = idx;
        const res =  await axios.get('/product/category/'+ idx);            
        productList.value = res.data;        
        productTotal.value = productList.value.length;
        cuurentPage.value = 1;
      }
      const numberOfPages = computed(() => {
        console.log(Math.ceil(productTotal.value / limit));
        return Math.ceil(productTotal.value / limit);
      });
      if (route.query.searchKeyword){
        searchKeyword.value = route.query.searchKeyword;
        const getProductList = async () => {
          const res =  await axios.get('/product/search/'+ searchKeyword.value);            
          productList.value = res.data;        
          productTotal.value = productList.value.length;
          cuurentPage.value = 1;
        }
        getProductList();
      }else {
        const getProductList = async () => {
          const res =  await axios.get('/product/findAll');            
          productList.value = res.data;        
          productTotal.value = productList.value.length;
          cuurentPage.value = 1;
        }
        getProductList();
      }
      const movePage = (page) => {
        cuurentPage.value = page;
        console.log(cuurentPage);
      }
      const moveDetailPage = (idx) => {
        router.push({
          name : "",
          query : {
            idx : idx,
          }
        })
      }
      
      return {
        categoryList,
        productList,
        route,
        router,
        categoryNum,
        numberOfPages,
        searchKeyword,
        productTotal,
        cuurentPage,
        limit,
        getCategoryList,
        categoryClick,
        movePage,
        moveDetailPage,
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
      font-size: 18px;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
  }
  .item span {
    text-align: end;
  }
  .paging {
      display: flex; 
      justify-content: center;
      font-size: 20px; 
      width: 200px;
      margin: 0 auto;
      color: black;
  }
  .cli {
    background-color: #E9ECFF;
    border-radius: 5px;
  }
  </style>