<template>
	<div id="app">
		<!-- 头部 -->
		<header>
			<ul class="list">
				<li><router-link exact :to="{name: 'Home'}">主页</router-link></li>
				<li><router-link to="/about">关于</router-link></li>
			</ul>
			
		
		</header>
		<!-- 内容 -->
		<main>
			<router-view></router-view>
			<el-button type="primary" plain >主要按钮</el-button>
		
		<el-button type="warning" plain>警告按钮<i class="el-icon-share"></i></el-button>
		<el-button type="danger" plain>危险按钮<i class="el-icon-s-promotion"></i></el-button>
				<swiper :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<swiper-slide><img src="./assets/01.jpg" alt=""></swiper-slide>
			<swiper-slide><img src="./assets/02.jpg" alt=""></swiper-slide>
			<swiper-slide><img src="./assets/03.jpg" alt=""></swiper-slide>
			<swiper-slide><img src="./assets/04.jpg" alt=""></swiper-slide>
			<swiper-slide><img src="./assets/05.jpg" alt=""></swiper-slide>
			<swiper-slide><img src="./assets/06.jpg" alt=""></swiper-slide>

			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
			<div class="swiper-scrollbar" slot="scrollbar"></div>
		</swiper>
		</main>
	</div>
</template>

<script>
import Qs from "qs";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "app",
  data() {
    return {
      curPage: "News",
      message: "",
      city: "成都",
      swiperOption: {
        loop: true,
        autoplay: true,
        pagination: ".swiper-pagination",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        scrollbar: {
          el: ".swiper-scrollbar"
        }
      }
    };
  },
  created() {
    /*
			const URI = "http://192.168.110.65:8090/info";
			this.$axios.get(URI, {
				params: {
					id: 1,
					city: "chengdu"
				}
			}).then(res => {
				console.log(res);
			}).catch(err => {
				console.log(err.message);
			});*/
    /*
			this.$axios.post("/login", Qs.stringify({
				username: "lihy",
				password: "123"
			})).then(res => {
				console.log(res);
			}).catch(err => {
				console.log(err.message)
			});*/
    let data = this.$mock({
      city: "@county(true)",
      date: '@datetime("yyyy-MM-dd HH:mm:ss")',
      "list|10": [
        {
          "id|+1": 1,
          name: "@cname",
          "star|1-5": "☆"
        }
      ]
    });
    console.log(data);
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
header {
  height: 64px;
  background: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.list li {
  margin: 0 12px;
}
a {
  color: #ffffff;
}
main {
  height: calc(100% - 64px);
}
a.router-link-active {
  color: orange;
}

.swiper-container {
	width: 70%;
		margin: 20px auto;
	}
	.swiper-container img {
		width: 100%;
	}
</style>
