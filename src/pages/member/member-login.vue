<template>
    <div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="page-content">
					<div class="login-banner">
						<div class="row">
							<div class="header-text" style="text-align: center; ">
								<h6>환영합니다!</h6>
								<h4><em>MY SPACE </em> 로그인</h4>
								<div class="register-div">
									<form @submit.prevent="loginSubmit" name="form-member-login" onsubmit="return true;">
										<input class="form-control" v-model="loginMember.loginId" style="text-align: center; margin: auto; width: 50%;" type="text"
                                        placeholder="아이디를입력하세요" name="loginId" onfocus="this.placeholder=''" onblur="this.placeholder='아이디를 입력하세요'"/>
                                        <br>
                                        <input class="form-control" v-model="loginMember.password" style="text-align: center; margin: auto; width: 50%;" type="password"
                                        placeholder="비밀번호를 입력하세요" name="password" onfocus="this.placeholder=''" onblur="this.placeholder='비밀번호를 입력하세요'" />
                                        <br>
                                        <button type="submit" class="btn btn-primary" style="background-color: #1EDDFF;">로그인</button>
                                    </form>
								</div>
                                <br>
                                <!-- <p>{{error}}</p>
                                <p>{{logout}}</p> -->
                                <!-- <p><a href="/member/register"> 회원이 아니신가요?</p> -->
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {ref} from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';

export default {
	setup(){
		const loginMember = ref({
			loginId : null,
			password: null
		});

		
		const router = useRouter();

		const loginSubmit= async()=>{
			try{
				const responseLogin = await axios.post('/login',loginMember.value);
				console.log(responseLogin.data);
				alert('로그인 완료');
				router.push({name: "Home"});
			}catch(error){
				console.log(error);
				alert('로그인 실패');
			}
		};


		return{
			loginMember,
			loginSubmit,
		};

	},
}
</script>

<style>

</style>