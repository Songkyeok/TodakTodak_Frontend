<template>
    <main class="mt-3">
        <div class="container">
            <div class="row mb-2">
                <div class="col-12">
                </div>
            </div>
            <hr>
            <div class="content cate-list">
                <h2 class="home_title">이벤트</h2>
                <br>
            </div>
            <div v-if="events.length>0">
                <div class="event_container" v-for="(event, i) in events" :key="i">
                    <div class="img">
                        <a :href="'http://localhost:8080/goodsDetail/' + good.goods_no">
                            <img class="img" :src="goods.goods_img ? require(`../../../TodakTodak_Backend/uploads/uploadGoods/$${goods.goods_img}`) : '/goodsempty.jpg'"
                            alt="상품 이미지">
                        </a>
                        <a @click="goToDetail()"></a>
                    </div>
                    <div class="name">{{ good.goods_nm }}</div>
                    <div class="span">{{ $currencyFormat(good.goods_price) }}</div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import {
    Splide,
    SplideSlide
} from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import axios from 'axios';

export default {
    

    components: {
        Splide,
        SplideSlide,
    },

    data() {
        return {        
            events: [],
        };
    },
    mounted() {
         this.eventList();
    },
    methods: {
        filteredGoodsList(category) {
            return this.GoodsList.filter((goods) => goods.GOODS_CATEGORY === category);
        },
        eventList() {
            axios({
                url: "http://localhost:3000/goods/eventList/:event",
                method: "GET",
            }).then(results => {
                console.log(results.data);
                this.goods = results.data;
                
            })
        },
        goTogoodsDetail(goodsno) {
            window.localStorage.href = `http://localhost:8080/Detail/${goodsno}`;
        }
    }
}
</script>