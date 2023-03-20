<template>
  <div class="container" style="box-sizing: border-box !important">
    <div class="row">
        <div class="col-lg-12">
            <div class="page-content">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="main-profile">
                            <div class="row">
                                <div class="col-lg-4">
                                    <img src="@/assets/images/profile_images.webp" alt="" style="border-radius: 23px;">
                                </div>
                                <div class="col-lg-4 align-self-center">
                                    <div class="main-info header-text">
                                        <div class="main-button" style="margin-bottom: 20px;">
                                            <a href="/logout">로그아웃</a>
                                        </div>
                                        <h4>{{ name }}님, 환영합니다</h4>
                                        <p>자기소개를 입력해주세요</p>
                                        <div class="main-border-button">
                                            <a id="dialog" href="member/update">회원정보수정</a>
                                            <dialog>
                                                <h4>회원정보수정</h4>
                                                <form name="form-member-update" onsubmit="return false;">
                                                    <!-- 회원정보수정 모달 -->
                                                </form>
                                            </dialog>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 align-self-center">
                                    <ul style="text-align: center;">
                                        <li><a href="/mypage/review">내가 작성한 리뷰</a></li>
                                        <li><a href="#">질문 답변</a></li>
                                        <li><a href="/cart">장바구니</a></li>
                                    </ul>
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
export default {

}
</script>

<style>
  @import "@/assets/css/member-home.css";
</style>