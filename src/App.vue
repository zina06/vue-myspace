<template>
  <common-header />
  <router-view />
  <common-footer />
</template>

<script>
import commonFooter from './components/common/common-footer.vue'
import CommonHeader from './components/common/common-header.vue'
export default {
  components: { commonFooter, CommonHeader },

}
</script>

<style>
  @import "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap";
  @import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
  @import "@/assets/css/fontawesome.css";
  @import "@/assets/css/templatemo-cyborg-gaming.css";
  @import "@/assets/css/owl.css";
  @import "@/assets/css/animate.css";
  @import "https://unpkg.com/swiper@7/swiper-bundle.min.css";
  @import "@/assets/css/member-register.css";
</style>

