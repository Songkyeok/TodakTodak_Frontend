<template>
    <div id="header">
        <div class="cm-component pc">
            <div class="sticky-wrap">
                <header class="ki-header cm-header is-fill">
                    <div class="ki-header__inner">
                        <div class="cm-layout">
                            <div class="cm-layout__item">
                                <div class="cm-component">
                                    <div class="cn-mall">
                                        <div class="cn-mall-inner">
                                            <h1 class="logo" @click="goToHome()">
                                                <img src="../assets/logo2.png" alt="">
                                                <span class="blind">토닥토닥</span>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cm-layout__item">
                                <div class="cm-component">
                                    <!-- <ul class="quick-list">
                                        <li><a href="/html/header.html" class="ki-cs"><em class="blind">고객센터</em></a></li>
                                        <li><a href="/html/header.html" class="ki-mypage"><em class="blind">마이페이지</em></a></li>
                                        <li><a href="/basket" class="ki-cart"><span id="cartCnt"></span></a></li>
                                    </ul> -->

                                    <ul v-if="user.user_id == ''" class="join">
                                        <li @click="goToLogin()">로그인</li>
                                        <li @click="goToAgreement()">회원가입</li>
                                    </ul>
                                    <ul v-else-if="user.user_tp == 1" class="join">
                                        <li @click="goToAdmin()">관리 페이지</li>
                                        <li @click="logout()">로그아웃</li>
                                    </ul>
                                    <ul v-else class="join quick-list">
                                        <!-- <li @click="logout()">로그아웃</li> -->
                                        <!-- 카카오톡 링크 추가 예정 -->
                                        <li><a href="https://pf.kakao.com/_xixgxexgG" target="_blank" class="ki-cs"><em class="blind">고객센터</em></a></li>
                                        <li><a href="/mypage" class="ki-mypage"><em class="blind">마이페이지</em></a></li>
                                        <li><a href="/basket" class="ki-cart"><span id="cartCnt"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="cm-component">
                            <nav class="gnb-list">
                                <div class="cm-slider swiper-container main-slider swiper-container-initialized swiper-container-horizontal reach-end bg_r">
                                    <ul class="swiper-wrapper">
                                        <li class="swiper-slide swiper-slide-active" @click="goToAbout()">
                                            <div class="slide-inner">
                                                <a href="#">
                                                    <span >소개글</span>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="swiper-slide swiper-slide-next" @click="goToEvent()">
                                            <div class="slide-inner">
                                                <a href="#"><span>이벤트</span></a>
                                            </div>
                                        </li>
                                        <li class="swiper-slide" @click="goToCategory(1)">
                                            <div class="slide-inner">
                                                <a href="#"><span>유아식기</span></a>
                                            </div>
                                        </li>
                                        <li class="swiper-slide" @click="goToCategory(2)">
                                            <div class="slide-inner">
                                                <a href="#"><span>욕실용품</span></a>
                                            </div>
                                        </li>
                                        <li class="swiper-slide" @click="goToCategory(3)">
                                            <div class="slide-inner">
                                                <a href="#"><span>외출용품</span></a>
                                            </div>
                                        </li>
                                        <li class="swiper-slide" @click="goToCategory(4)">
                                            <div class="slide-inner">
                                                <a href="#"><span>유아도서</span></a>
                                            </div>
                                        </li>
                                        <li class="swiper-slide" @click="goToCategory(5)">
                                            <div class="slide-inner">
                                                <a href="#"><span>위생용품</span></a>
                                            </div>
                                        </li>
                                        <li class="swiper-slide" @click="goToCategory(6)">
                                            <div class="slide-inner">
                                                <a href="#"><span>장난감</span></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sampleData : ''
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    methods: {
        logState() {
            console.log("Current state: ", this.$store.state);
        },
        goToAgreement() {
        this.$router.push({ path: '/agreement'});
        },
        goToLogin() {
        this.$router.push({ path: '/login' });
        },
        goToJoin() {
        this.$router.push({ path: '/join' });
        },
        goToAdmin() {
        this.$router.push({ path: '/admin/analytics' });
        },
        goToMypage() {
        this.$router.push({ path: '/mypage' });
        },
        goToCart() {
        this.$router.push({ path: '/basket' });
        },
        goToAbout() {
        this.$router.push({ path: '/about' });
        },
        goToCategory(category) {
            window.location.href = `http://localhost:8080/categoryGoodsList/${category}`;
        },
        // goToBathStuff() {
        // this.$router.push({ path: '/bathstuff' });
        // },
        // goToOutside() {
        // this.$router.push({ path: '/outside' });
        // },
        // goToBabyStuff() {
        // this.$router.push({ path: '/babystuff' });
        // },
        // goToCleanStuff() {
        // this.$router.push({ path: '/cleanstuff' });
        // },
        // goToToy() {
        // this.$router.push({ path: '/toy' });
        // },
        goToEvent() {
        this.$router.push({ path: '/eventList' });
        },
        logout() {
            this.$store.commit("user", {});
            this.$swal({
                position: 'top',
                icon: 'success',
                title: '로그아웃되셨습니다.',
                showConfirmButton: false,
                timer: 1000
            }).then(() => {
                window.location.href = "http://localhost:8080";
            })
        },
        goToHome() {
            window.location.href = "http://localhost:8080";
        }
    },
    mounted() {
        console.log("Current state: ", this.$store.state);
    }
}
</script>
<style>
@import "../assets/css/main.css";
</style>