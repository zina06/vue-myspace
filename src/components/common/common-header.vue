<template>
    <!-- ***** Header Area Start ***** -->
    <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="/" class="logo" style="width: 190px; height: 90px;">
              <img style="width: 100px; height: 100px;" src="@/assets/images/myspace_logo.png" alt="" />
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Search End ***** -->
            <div class="search-input" style="display: flex; height: 100%; ">
              <form id="search" action="/">
              <div style="">
                  <div style="width: 35px; height: 35px; position: absolute; top: 28px; left: 9px;">
                    <img style="width: 100%; height: 100%;" src="@/assets/images/search_icon.png" />
                  </div>
                  <div>
                    <input style="margin: 0; margin-top: 20px;"
                      type="text"
                      placeholder="쇼핑검색"
                      id="searchText"
                      name="searchKeyword"
                      onkeypress="handle"
                    />
                  </div>
                </div>        
                </form>      
            </div>

            <!-- ***** Search End ***** -->
            <!-- ***** Menu Start ***** -->

            <ul class="nav" style="display:flex; align-items: center;">
              <li><router-link to="/" class="active">쇼핑</router-link></li>
              <li><router-link to="/cart/list">장바구니</router-link></li>
              <!-- <sec:authorize access="isAnonymous()"> -->
              <li><router-link to="/member/register">회원가입</router-link></li>
              <!-- </sec:authorize> -->
              <!-- <sec:authorize access="isAuthenticated()"> -->
              <li><router-link to="/logout">로그아웃</router-link></li>
              <!-- </sec:authorize> -->
              <li>
                <router-link to="/mypage/home">프로필 <img src="@/assets/images/profile_images.webp" alt=""/></router-link>
              </li>
            </ul>
            <a class="menu-trigger">
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->
</template>

<script>
export default {
    name: "common-header"
}
</script>

<style>

</style>