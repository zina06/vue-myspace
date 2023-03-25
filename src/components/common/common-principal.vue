<template>
  <span></span>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue'; 
export default {
    name: "common-principal",
  setup (props, context) {
    let principal = ref(null);
    // const getLogin = async () => {
    //   try {
    //     const res = await axios.post('/login', {
    //       loginId: "23",
    //       password: "1234"
    //     });
    //     console.log(res.data);
    //   } catch (error) {
    //     console.error(error);
    //     context.emit("principal", error);
    //   }
    // }
    // getLogin();
    const getPrincipal = async () => {
      try {
        const res = await axios.get('/member/principal');
        principal.value = res.data;
        context.emit("principal", principal.value);
      } catch (error) {
        context.emit("principal", null);
      }
    }
    getPrincipal();
    return {
        principal,
        getPrincipal,
    }
  }
}
</script>

<style>

</style>