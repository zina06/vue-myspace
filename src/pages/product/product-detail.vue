<template>
  <div style="margin: 110px auto 0; align-items: center; width: 1100px; height:230px; display: flex;">
		<div style="width: 40%; margin-top: 400px; ">
			<div style="width: 100%; height: 100%; align-items: center; align-content: center;">
			<span>> {{categoryName}}</span><br><br>
				<img v-bind:src="image_url" alt="">  
			</div>
		</div>
		<div style="width: 60%; margin: 10px; margin-top: 150px; display: flex; justify-content: center; ">
			<div style="width: 70%; height:50px; display:table-cell; vertical-align:middle; ">
				<span style="color: gray;"><b>{{ brand }}</b></span>		<br>	
				<span style="font-size: 1.7em;">{{productName}}</span><br>
				<span style="color: #35C5F0; font-size: 0.8em;"><b>{{reviewCount}}개 리뷰 </b></span><br>
				<span style="font-size: 1.7em;"><b>{{ price }}원</b></span><br><br>
				<span style="color: gray;">배송</span>&nbsp;&nbsp;&nbsp;
				<span>배송상품정보 참고</span><br><hr>
				<img alt="" src="../../assets/images/brandimg.png" style="width: 30px; height: 30px;">
				<span>{{ brand }}</span><br><br>
				<span><b>주문금액 </b></span>
				<span style="float: right;"><b>{{ price }}원</b></span><br><br>
				
				
					<button id="cart" style="width: 180px; height: 33px; color: white" type="button" class="btn btn-info"   @click="addProduct">장바구니</button>
			
			</div>
		</div>
	</div>
    <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist" style="margin: 0 auto 0; align-items: center; width: 1100px;  margin-top: 400px;">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" style="width: 500px;">상세정보</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" style="width: 500px;">리뷰  {{reviewCount}}</button>
  </div>
</nav>


 <div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0"></div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0" style="margin-left:500px; margin-top: 70px;">
  	 <!-- <span style="margin-left: 405px; font-size: 1.3em;"><b>구매만족도</b></span> -->
	
		<div style="float: right; margin-right: 800px; margin-top: 20px;">
   
   <p style="color: #35C5F0;"><b>5점 &nbsp;{{ scoreCounts5 }}</b></p>
   <p style="color: black;">4점 &nbsp;{{ scoreCounts4 }}</p>
   <p style="color: black;">3점 &nbsp;{{ scoreCounts3 }}</p>
   <p style="color: black;">2점 &nbsp;{{ scoreCounts2 }}</p>
   <p style="color: black;">1점 &nbsp;{{ scoreCounts1 }}</p>
   
  
</div>

<div style="background: #F3F3F3; border: 1px solid #F3F3F3; width: 800px;height: 180px; border-radius: 0.5rem; margin-left: 40px;">
	<!-- <span style="margin-left: 405px; font-size: 1.1em;"><b>구매만족도</b></span> -->
	<span style="margin-left:200px; margin-top: 60px; display: inline-block; font-size: 3em;"><b> {{ allTotal }}</b></span>
</div>

	


  	<!-- <div id="allTotal" style="background: #F3F3F3; border: 1px solid #F3F3F3; width: 100px;height: 100px; border-radius: 100%; font-size: 1.5em; margin-left: 410px; margin-top: 10px;">
           <span style="margin-left: 30px; margin-top: 25px; display: inline-block;"> {{ allTotal }}</span>
		
		   
  	</div> -->

	  

  	<br><br>
	<div>
	</div>

	
  				
									
									
						<br><br>
						
				  <template v-for="review in reviewList" :key="review.idx" >
									<div >
  						<img src="../../assets/images/reviewprofile.png" style="width: 26px; height: 26px;">
										<span style="display: inline-block; margin-bottom: 10px;">{{ review.member.name }}</span><br>
										총점 {{ review.score.total }} <span style="display: inline-block; margin-bottom: 10px;">
											
										</span>
										
										
										<br>내구성
										 <span>
                                        <svg v-for="i in review.score.durability" :key="i" fill="#35C5F0" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-10" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-10"><rect x="0" y="0" width="24" height="24"></rect></clipPath></defs><use xlink:href="#star-path-10" fill="#DBDBDB"></use><use clip-path="url(#star-clip-10)" xlink:href="#star-path-10"></use></svg>

                                        <svg v-for="i in 5-review.score.durability" :key="i" fill="#35C5F0" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-19" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-19"><rect x="0" y="0" width="0" height="24"></rect></clipPath></defs><use xlink:href="#star-path-19" fill="#DBDBDB"></use><use clip-path="url(#star-clip-19)" xlink:href="#star-path-19"></use></svg>
                                      </span>
										&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;  
										가격 <span>
                                        <svg v-for="i in review.score.price" :key="i" fill="#35C5F0" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-10" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-10"><rect x="0" y="0" width="24" height="24"></rect></clipPath></defs><use xlink:href="#star-path-10" fill="#DBDBDB"></use><use clip-path="url(#star-clip-10)" xlink:href="#star-path-10"></use></svg>

                                        <svg v-for="i in 5-review.score.price" :key="i" fill="#35C5F0" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-19" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-19"><rect x="0" y="0" width="0" height="24"></rect></clipPath></defs><use xlink:href="#star-path-19" fill="#DBDBDB"></use><use clip-path="url(#star-clip-19)" xlink:href="#star-path-19"></use></svg>
                                      </span>
										<br>
										디자인 <span>
                                        <svg v-for="i in review.score.design" :key="i" fill="#35C5F0" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-10" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-10"><rect x="0" y="0" width="24" height="24"></rect></clipPath></defs><use xlink:href="#star-path-10" fill="#DBDBDB"></use><use clip-path="url(#star-clip-10)" xlink:href="#star-path-10"></use></svg>

                                        <svg v-for="i in 5-review.score.design" :key="i" fill="#35C5F0" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-19" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-19"><rect x="0" y="0" width="0" height="24"></rect></clipPath></defs><use xlink:href="#star-path-19" fill="#DBDBDB"></use><use clip-path="url(#star-clip-19)" xlink:href="#star-path-19"></use></svg>
                                      </span>
										
										&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; 
										배송<span>&nbsp; 
                                        <svg v-for="i in review.score.delivery" :key="i" fill="#35C5F0" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-10" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-10"><rect x="0" y="0" width="24" height="24"></rect></clipPath></defs><use xlink:href="#star-path-10" fill="#DBDBDB"></use><use clip-path="url(#star-clip-10)" xlink:href="#star-path-10"></use></svg>

                                        <svg v-for="i in 5-review.score.delivery" :key="i" fill="#35C5F0" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-19" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-19"><rect x="0" y="0" width="0" height="24"></rect></clipPath></defs><use xlink:href="#star-path-19" fill="#DBDBDB"></use><use clip-path="url(#star-clip-19)" xlink:href="#star-path-19"></use></svg>
                                      </span>
										
										
										
										<br><br>
										<div>
										<div style="background: lightgray; border: 1px solid #F3F3F3; width: 3px;height: 25px;"></div>
										<b style="position: relative; bottom: 25px; left: 10px;">{{productName}}</b><br>
										</div>
										
										 {{review.content}}
										 <br> <hr style="width: 800px;"><br>
										</div>
									</template>
  
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
</div> 

</template>

<script>
import {useRoute, useRouter} from 'vue-router';
import axios from 'axios';
import {computed, ref} from 'vue';
export default {
	setup(){
		const router=useRouter();
        const route = useRoute();
		const categoryName = ref('');
		const brand=ref('');
		const productName=ref('');
		const price=ref('');
		const image_url=ref('');
		const idx=route.params.idx;
		const reviewList=ref(null);
		const allTotal=ref('');
		const reviewCount = ref(0);
		const scoreCounts5=ref('');
		const scoreCounts4=ref('');
		const scoreCounts3=ref('');
		const scoreCounts2=ref('');
		const scoreCounts1=ref('');

		
		
		
		const getProduct = async() =>{
			//loading.value=true;
			
			const res = await axios.get(`/product/${idx}`).then((product)=>{
				console.log(idx);
				console.log("gg");
				console.log(product.data);
				categoryName.value = product.data.category.name
				brand.value=product.data.brand.name
				productName.value=product.data.name
				price.value=product.data.price
				image_url.value=product.data.image_url
				allTotal.value=product.data.allTotal
				
			})


		};
		getProduct();

		const addProduct = async() =>{
         try{
            console.log(idx);
          const res = await axios.post(`/cartProduct/save`, { "cart" : {"idx" : 2}, "product" : {"idx" : idx}, amount:1 });
         console.log("add success");
         console.log(res);
         
         }catch(error){
            console.error(error);
         }
         }

		const getReviewList=async()=>{
			
			const res = await axios.get(`/review/product/${idx}`).then((review)=>{
				console.log(review.data);
				console.log(review.data[0].content);
				console.log(review.data[0].score.durability);
				reviewList.value=review.data;
				
				if(reviewList.value.length != 0){
					reviewCount.value = reviewList.value.length;
				}
				

				
					if (reviewList.value.length > 0) {
						const scoreCounts = {
						5: 0,
						4: 0,
						3: 0,
						2: 0,
						1: 0,
						};

						reviewList.value.forEach((review) => {
						const score = Math.floor(review.score.total);
						console.log(score);
						scoreCounts[score] += 1;
						scoreCounts5.value=scoreCounts[5];
						scoreCounts4.value=scoreCounts[4];
						scoreCounts3.value=scoreCounts[3];
						scoreCounts2.value=scoreCounts[2];
						scoreCounts1.value=scoreCounts[1];
						});
						
						console.log("ㄴㄴㄴ"+scoreCounts[4]);
					}
			})
		}
			
		getReviewList();


		
		
	return{
		getProduct,
		reviewList,
		getReviewList,
		categoryName,
		brand,
		productName,
		price,
		image_url,
		idx,
		route,
		router,
		allTotal,
		reviewCount,
		addProduct,
		scoreCounts5,
		scoreCounts4,
		scoreCounts3,
		scoreCounts2,
		scoreCounts1
	};	
			
		
			
	
	}
}



</script>

<style>

</style>