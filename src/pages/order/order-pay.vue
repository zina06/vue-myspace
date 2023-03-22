<template>
    <div class="order-container">
        <h2>주문/결제</h2>

        <!-- 배송지가져오기 -->
        <div class="col-7">
            <div class="sub">
                <h5>배송지</h5>
                <hr style="border: solid 2px #171d55;">
                <div class="mb-3 row">
                    <label id="sstitle" class="col-sm-4 col-form-label">이름</label>
                    <div class="col-sm-7">
                        <input name="dil-name" type="text" class="form-control" placeholder="이름">
                    </div>
                   <label id="sstitle" class="col-sm-4 col-form-label">배송지명</label>
                    <div class="col-sm-7">
                        <input name="dil-name" type="text" class="form-control" placeholder="배송지명">
                    </div>
                    <label id="sstitle" class="col-sm-4 col-form-label">주소</label>
                    <div class="col-sm-7">
                        <input name="dil-name" type="text" class="form-control" placeholder="주소">
                    </div>
                    <select id="dil-select" class="form-select" style="width: 84%">
                        <option selected="selected">배송지 요청사항을 입력하세요</option>
                        <option value="1">부재시 문앞에 놓아주세요</option>
                        <option value="2">배송전에 미리 연락주세요</option>
                        <option value="3">부재시 경비실에 맡겨주세요</option>
                    </select>
                </div>
            </div>
        </div>


        <!-- 결제금액 -->
        <div class="col-4">
            <div class="sub">
                <h5>결제금액</h5>
                <hr style="border: solid 2px #171d55;">
                <div class="mb-3 row">
                    <label id="sstitle" class="col-sm-6 col-form-label">총상품금액</label>
                    <div class="col-sm-6">{{price}}</div>
                    <label id="sstitle" class="col-sm-6 col-form-label">배송비</label>
                    <div class="col-sm-6">{{deliveryPrice}}</div>
                    <label id="sstitle" class="col-sm-6 col-form-label">총결제금액</label>
                    <div class="col-sm-6">{{totalPrice}}</div>
                    <div class="col-lg-12">
                        <div class="main-button">
                            <a href="/order/confirm">결제하기</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- 주문자정보가져오기 -->
		<div class="col-7">
			<div class="sub">
                <h5>주문자</h5>
                <hr style="border: solid 2px #171d55;">
				<div class="mb-3 row">
                    <label id="sstitle" class="col-sm-4 col-form-label">주문자명</label>
                    <div class="col-sm-7">{{membername}}</div>
                    <label id="sstitle" class="col-sm-4 col-form-label">이메일</label>
                    <div class="col-sm-7">{{email}}</div>
                    <label id="sstitle" class="col-sm-4 col-form-label">전화번호</label>
                    <div class="col-sm-7">{{phoneNo}}</div>
				</div>
			</div>
		</div>


        <!-- 주문상품가져오기 -->
		<div class="col-7">
			<div class="sub">
            <h5>주문자</h5>
            <hr style="border: solid 2px #171d55;">
			<div class="mb-3 row">
				<table class="table table-bordered">
					<thead>
						<tr>
							<th scope="col">번호</th>
							<th scope="col">상품명</th>
							<th scope="col">상품가격</th>
							<th scope="col">수량</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="productList in productLists" :key="productList">
							<th scope="row">{{productList.id}}</th>
							<td>{{productList.pname}}</td>
							<td>{{productList.price}}</td>
							<td>{{productList.pamount}}</td>
						</tr>
					</tbody>
				</table>
			</div>
			</div>
        </div>


        <!-- 결제수단 -->
		<div class="col-7">
		<div class="sub">
            <h5>결제하기</h5>
            <hr style="border: solid 2px #171d55;">
			<div class="mb-3 row">
                <select id="dil-select" class="form-select" style="width: 82%">
                        <option selected="selected">결제수단 선택하기</option>
                        <option value="무통장입금">무통장입금</option>
                        <option value="신용카드">신용카드</option>
                        <option value="3">부재시 경비실에 맡겨주세요</option>
                    </select>
            </div>
        </div>
        </div>    
									
									
	<!-- 끝 -->
	</div>
</template>

<script>
export default {
  data() {
    return {
      membername: '안세영',
      email: 'rapa0714@naver.com',
      phoneNo: '01051080714',
      productLists: [
        { id: 1, pname: '편안한침대', price:'500000', pamount:'1'},
        { id: 2, pname: '편안한소파', price:'850000', pamount:'2'}
      ]
    }
  }
}
</script>

<style>
    @import "@/assets/css/order.css";
</style>