<template>
  <span></span>
</template>
<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
export default {
    name: "common-principal",
  setup (props, context) {
    const router = useRouter();
    const data = ref({
      idx : null,
      loginId : '',
    })
    const getPrincipal = async () => {
      try {
        await axios.post('/login', {
          loginId: "23",
          password: "1234"
        });
        const res = await axios.get('/member/principal');
        data.value.idx = res.data.idx;
        data.value.loginId = res.data.loginId;
        context.emit("principal", data);
      } catch (error) {
        alert("회원 인증 실패");
        router.push({
          name: 'Home'
        })
        location.replace("/");
      }
    }
    onMounted(() => {
      getPrincipal();
    });

    return {
      router,
      getPrincipal,
    }
  }
}
</script>

<style>

</style>