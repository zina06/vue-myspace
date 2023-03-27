<template>
  <div class="container" style="box-sizing: border-box; !important;">
    <div class="row">
      <div class="col-lg-12">
        <div class="page-content">
            <!-- ***** Banner Start ***** -->
          <div class="row">
            <div class="col-lg-12">
              <div class="main-profile">
                <div class="heading-section" style="margin-bottom: 10px;">
                  <h4> {{member.loginId}}님, 리뷰내역</h4>
                  </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="clips">
                          <div class="row">
                            <div class="col-lg-12" >
                              <div class="item" v-for="review in reviewList" :key="review.idx">
                                  <ul>
                                    <li><img v-bind:src="review.product.image_url" alt="상품사진" class="templatemo-item"><h4 style="font-size: 17px; margin-left: 15px;">{{ review.product.name }}</h4></li>
                                    
                                    <li><h4>내구성</h4>
                                      <span>
                                        <svg v-for="i in review.score.delivery" :key="i" fill="#35C5F0" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-10" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-10"><rect x="0" y="0" width="24" height="24"></rect></clipPath></defs><use xlink:href="#star-path-10" fill="#DBDBDB"></use><use clip-path="url(#star-clip-10)" xlink:href="#star-path-10"></use></svg>

                                        <svg v-for="i in 5-review.score.delivery" :key="i" fill="#35C5F0" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-19" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-19"><rect x="0" y="0" width="0" height="24"></rect></clipPath></defs><use xlink:href="#star-path-19" fill="#DBDBDB"></use><use clip-path="url(#star-clip-19)" xlink:href="#star-path-19"></use></svg>
                                      </span>
                                    </li>
                                    <li><h4>가격</h4>
                                      <span>
                                        <svg v-for="i in review.score.price" :key="i" fill="#35C5F0" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-10" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-10"><rect x="0" y="0" width="24" height="24"></rect></clipPath></defs><use xlink:href="#star-path-10" fill="#DBDBDB"></use><use clip-path="url(#star-clip-10)" xlink:href="#star-path-10"></use></svg>

                                        <svg v-for="i in 5-review.score.price" :key="i" fill="#35C5F0" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-19" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-19"><rect x="0" y="0" width="0" height="24"></rect></clipPath></defs><use xlink:href="#star-path-19" fill="#DBDBDB"></use><use clip-path="url(#star-clip-19)" xlink:href="#star-path-19"></use></svg>
                                      </span>
                                    </li>
                                    <li><h4>디자인</h4>
                                      <span>
                                        <svg v-for="i in review.score.design" :key="i" fill="#35C5F0" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-10" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-10"><rect x="0" y="0" width="24" height="24"></rect></clipPath></defs><use xlink:href="#star-path-10" fill="#DBDBDB"></use><use clip-path="url(#star-clip-10)" xlink:href="#star-path-10"></use></svg>

                                        <svg v-for="i in 5-review.score.design" :key="i" fill="#35C5F0" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-19" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-19"><rect x="0" y="0" width="0" height="24"></rect></clipPath></defs><use xlink:href="#star-path-19" fill="#DBDBDB"></use><use clip-path="url(#star-clip-19)" xlink:href="#star-path-19"></use></svg>
                                      </span>
                                    </li>
                                    <li><h4>배달</h4>
                                      <span>
                                        <svg v-for="i in review.score.delivery" :key="i" fill="#35C5F0" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-10" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-10"><rect x="0" y="0" width="24" height="24"></rect></clipPath></defs><use xlink:href="#star-path-10" fill="#DBDBDB"></use><use clip-path="url(#star-clip-10)" xlink:href="#star-path-10"></use></svg>

                                        <svg v-for="i in 5-review.score.delivery" :key="i" fill="#35C5F0" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><defs><path id="star-path-19" d="M11.9996 19.7201L6.32294 22.1251C5.5626 22.4472 5.005 22.0311 5.0755 21.2188L5.60855 15.0767L1.5671 10.421C1.02579 9.79745 1.24924 9.13855 2.04358 8.95458L8.04973 7.56354L11.2287 2.28121C11.6545 1.57369 12.3502 1.5826 12.7706 2.28121L15.9496 7.56354L21.9557 8.95458C22.7602 9.1409 22.9667 9.8053 22.4322 10.421L18.3907 15.0767L18.9238 21.2188C18.9952 22.0414 18.4271 22.4432 17.6764 22.1251L11.9996 19.7201Z"></path><clipPath id="star-clip-19"><rect x="0" y="0" width="0" height="24"></rect></clipPath></defs><use xlink:href="#star-path-19" fill="#DBDBDB"></use><use clip-path="url(#star-clip-19)" xlink:href="#star-path-19"></use></svg>
                                      </span>
                                    </li>
                                    <li>
                                      <h4>리뷰내용</h4><span>{{ review.content }}</span>
                                    </li>
                                    <li>
                                      <button style="border-radius: 7px; margin-right: 10px;" @click="reviewSave(review.idx)">수정</button>
                                      <button style="border-radius: 7px;"  @click="reviewDelete(review.idx, review.score.idx)" >삭제</button>
                                    </li>
                                  </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="main-button">
                              <a href="#">TOP</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue'; 
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter();
    let member = ref('');
    const getMember = async () => {
        await axios.get('/member/principal').then((res) => {
        member.value = res.data;});
    }
    
    let reviewList = ref(null);
    const getReviewList = async () => {
        console.log(member.value.idx);
        const res = await axios.get('/review/member/' + member.value.idx);
        reviewList.value = res.data;
    }
    
    (async () => {
      await getMember();
      await getReviewList();
    })();
    
    const reviewSave = (reviewIdx) => {
      router.push({
        name: "ReviewSave",
        query: {
          reviewIdx : reviewIdx,
        }
      });
    }

    const reviewDelete = (reviewIdx, scoreIdx) => {
        axios.delete('/review/delete/'+ reviewIdx);
        axios.delete('/score/delete/'+ scoreIdx);
        location.reload();
    }
    return {
      router,
      member,
      reviewList,
      getReviewList,
      reviewSave,
      reviewDelete
    }
  }
}
</script>

<style>

</style>