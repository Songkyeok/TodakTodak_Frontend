<template>
  <Header />
  <div class="mypage-bar">
    <h3 class="title_text">마이 페이지</h3>
    <div class="mypage_nav">
      <ul>
        <li>
          회원 정보
          <ul>
            <li>
              <span @click="goToMypage">- 내 정보</span>
            </li>
            <li>
              <span @click="goToProfile">- 개인정보 수정</span>
            </li>
            <li>
              <span @click="goToDeleteProfile">- 회원 탈퇴</span>
            </li>
            <li>
              <span @click="logout">- 로그아웃</span>
            </li>
          </ul>
        </li>
        <li>
          나의 쇼핑 정보
          <ul>
            <li>
              <span @click="goToCheck">- 주문 내역</span>
            </li>
            <li>
              <span @click="goToQna">- 문의 내역</span>
            </li>
            <li>
              <span @click="goToReview()">- 리뷰 관리</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <router-view></router-view>
</template>
<script>
import Header from "../layouts/header.vue";

export default {
  computed: {
    user() {
        return this.$store.state.user;
    }
  },
  components: {
    Header,
  },
  methods: {
    goToMypage() {
      this.$router.push({ path: '/mypage' });
    },
    goToProfile() {
      this.$router.push({ path: '/mypage/profile' });
    },
    goToDeleteProfile() {
      this.$router.push({ path: '/mypage/deleteprofile' });
    },
    goToCheck() {
      this.$router.push({ path: '/mypage/check' });
    },
    goToQna() {
      this.$router.push({ path: '/mypage/qna' });
    },
    goToReview() {
      this.$router.push({ path: '/mypage/review' });
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
  }
}
</script>

<style>
  .mypage-bar {
    height: 100%;
    width: 10%;
    position: relative;
    background-color: rgb(255, 255, 255);
    margin: 80px 5% 0 5%;
    min-height: 250px;
    display:inline-block;
  }
  .title_text {
    padding: 0 0 14px 10px;
    border-bottom: 1px solid #ececec;
  }
  .mypage_nav > ul {
    margin: 7px 0 0 0;
  }
  .mypage_nav > ul > li {
    padding: 8px 0 15px 0;
    font-size: 14px;
    font-weight: bold;
    background: url("../assets/img/mypage/lnb_tit.png") no-repeat top left;
  }
  .mypage_nav > ul > li:first-child {
    margin: 30px 0 0 0;
  }
  .mypage_nav > ul > li > ul {
    margin: 5px 0 25px 0;
  }
  .mypage_nav > ul > li > ul > li {
    padding: 1px 0 0 0;
    font-weight: normal;
    font-size: 12px;
    text-indent: 10px;
    padding: 7px 0 6px 0;
  }
  .mypage_nav > ul > li > ul > li > span {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
