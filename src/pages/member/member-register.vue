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
									<form method="POST" action="/login">
										<!-- <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.tokzen}"/> -->
                                        <input class="form-control" style="text-align: center; margin: auto; width: 50%;" type="text"
                                        placeholder="아이디를입력하세요" name="username" onfocus="this.placeholder=''" onblur="this.placeholder='아이디를 입력하세요'"/>
                                        <br>
                                        <input class="form-control" style="text-align: center; margin: auto; width: 50%;" type="password"
                                        placeholder="비밀번호를 입력하세요" name="password" onfocus="this.placeholder=''" onblur="this.placeholder='비밀번호를 입력하세요'" />
                                        <br>
                                        <button type="submit" class="btn btn-primary" style="background-color: #1EDDFF;">로그인</button>
                                    </form>
								</div>
                                <br>
                                <!-- <p><c:out value={{e}}/></p> -->
                                <!-- <p><c:out value="${logout}"/></p> -->
                                <p><a href="/member/register"> 회원이 아니신가요?</a></p>
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
.form-control{
    width: 100%;
}
</style>