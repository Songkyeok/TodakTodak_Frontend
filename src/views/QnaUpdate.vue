<template>
    <div class="container">
        <h1>상품 문의</h1>
        <form action="submit_form.php" method="post">
            <hr class="black-line">
            <table>
                <tr>
                    <th><label for="writer">작성자</label></th>
                    <td class="text_font">{{ user_nm }}</td>
                </tr>
                <tr>
                    <th><label for="phone">휴대폰</label></th>
                    <td class="text_font">{{ user_phone }}</td>
                </tr>
                <tr>
                    <th><label for="subject">제목</label></th>
                    <td><input type="text" id="subject" name="subject" v-model="qna_title" required></td>
                </tr>
                <tr>
                    <th><label for="content">본문</label></th>
                    <td><textarea id="content" name="content" rows="10" v-model="qna_content" required></textarea></td>
                </tr>
                <tr class="form-group">
                  <th><label for="is_secret" class="secret">비밀글</label></th>
                  <th><input type="checkbox" class="checkbox" id="is_secret" v-model="qna_secret"></th>
                </tr>
            </table>
            <div class="btn-container">
                <button type="button" onclick="history.back()">이전</button>
                <button type="submit" @click="intoQna()">저장</button>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';

export default {	
    data() {
        return {
        qnaUpdateList: [],
        user_nm:"",
        user_phone:"",
        qna_title: '',
        qna_content: '',
        qna_secret: false, // 비밀글 옵션 추가

        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    created(){
        this.getQnaUpdateList();
    },
    mounted(){
        if (this.user.user_no == '') {
            this.$swal("로그인 이후 사용가능합니다.");
            this.$router.push({ path: '/login' });
        }
    },
    //유저 정보 조회
    methods: {
    getQnaUpdateList() {
        axios({
            url: "http://localhost:3000/qna/selectQnaUser",
            method: "POST",
            data: {
                user_no: this.user.user_no 
            }
        }).then(response => {
            
            this.qnaUpdateList = response.data.results;
            this.user_nm = this.qnaUpdateList[0].USER_NM;
            this.user_phone = this.qnaUpdateList[0].USER_PHONE;
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    },
    //QnA 정보 입력
    intoQna(){
        axios({
            url: "http://localhost:3000/qna/intoQna",
            method: "POST",
            data: {
                goods_no: this.$route.params.goods_no,
                user_no : this.user.user_no,
                qna_title: this.qna_title,
                qna_content: this.qna_content,
                qna_secret: this.qna_secret
            }
        }).then(results => {
            this.qna = results.data;
            this.$swal("작성 완료");
        })
        const goodsno = this.$route.params.goods_no
        this.$router.push(`/goodsDetail/${goodsno}`);
    }

}
}
</script>
<style scoped>
body {
    font-family: Arial, sans-serif;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    text-align: center;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 10px;
    text-align: left;
}

th {
    width: 150px;
    background-color: #f4f4f4;
}

input, select, textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    box-sizing: border-box;
}

textarea {
    resize: vertical;
}

.btn-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color:black;
    color: #FFFFFF;
}
hr.black-line {
            border: 0;
            height: 1px;
            background-color: black;
}
.text_font{
    font-size: 17px;
}
</style>