<template>
    <div class="order-container">
        <h2>주문완료</h2>

        <!-- 결제확인내용 -->
        <div class="row">
            <table class="table">
                <tbody>
                    <tr>
                        <th scope="col">배송지</th>
                        <th scope="col">{{}}</th>
                    </tr>
                    <tr>
                        <th scope="row">주문자</th>
                        <td>{{}}</td>
                    </tr>
                    <tr>
                        <th scope="row">주문상품</th>
                        <td>{{}}</td>
                    </tr>
                    <tr>
                        <th scope="row">결제수단</th>
                        <td>{{}}</td>
                    </tr>
                    <tr>
                        <th scope="row">총결제금액</th>
                        <td>{{}}</td>
                    </tr>
                    <tr>
                        <th scope="row">주문일자</th>
                        <td>{{}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-lg-12">
            <div class="main-button">
                <a href="/">돌아가기</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
    @import "@/assets/css/order.css";
</style>