<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="page-content">
					<div class="login-banner">
						<div class="row">
							<div class="header-text" style="text-align: center;">
								<h6>환영합니다!</h6>
								<h4><em>MY SPACE </em> 회원가입</h4>
								<div class="register-div">
									<form @submit.prevent="submitForm" name="form-member-register" onsubmit="return true;">
											<input class="form-control" v-model="member.loginId" style="text-align: center; margin: auto; width: 50%;" type="text" 
											placeholder="아이디를입력하세요" name="loginId" onfocus="this.placeholder=''" onblur="this.placeholder='아이디를 입력하세요'"/>
											<br>
											<input class="form-control" v-model="member.password" style="text-align: center; margin: auto; width: 50%;" type="password" 
											placeholder="비밀번호를 입력하세요" name="password" onfocus="this.placeholder=''" onblur="this.placeholder='비밀번호를 입력하세요'" />
											<br>
											<input class="form-control" v-model="member.name" style="text-align: center; margin: auto; width: 50%;" type="text" 
											placeholder="이름을 입력하세요" name="name" onfocus="this.placeholder=''" onblur="this.placeholder='이름을 입력하세요'" />
											<br>
											<input class="form-control" v-model="member.email" style="text-align: center; margin: auto; width: 50%;" type="text" 
											placeholder="이메일을 입력하세요" name="email" onfocus="this.placeholder=''" onblur="this.placeholder='이메일을 입력하세요'" />
											<br>
											<input class="form-control" v-model="member.phone" style="text-align: center; margin: auto; width: 50%;" type="text" 
											placeholder="전화번호를 입력하세요" name="phone" onfocus="this.placeholder=''" onblur="this.placeholder='전화번호를 입력하세요'" />
											<br>
											<input class="form-control" v-model="member.birth" style="text-align: center; margin: auto; width: 50%;" type="date" name="birth" />
											<br>
									</form>
								</div>								
								<div class="main-button">
									<button @click="submitForm" class="btn btn-primary" style="background-color: #1EDDFF;">회원가입</button>
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
import {ref} from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';

export default ({
	setup() {
		const member = ref({

		});
		const router = useRouter();

		const submitForm = async()=>{
			try{
				const response = await axios.post('/member/save',member.value);
				console.log(response.data);
				alert('회원가입 완료');
				router.push({name: "Home"})
			}catch(error){
				console.error(error);
				alert('회원가입 실패');
			}
		};
		
		return {
			member,
			submitForm,
		};

	},
})
</script>

<style>
.form-control{
    width: 100%;
}

.login-banner{
	width : 100%;
	
}

.row {
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  /* height: 50vh; 화면 전체 높이로 설정 */
}

.header-text {
  width: 70%; /* 요소 너비 설정 */
  max-width: 800px; /* 최대 너비 설정 */
  margin: 0 auto; /* 가운데 정렬 */
}
</style>