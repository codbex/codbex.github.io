<template>
  <swiper
    :modules="[Autoplay, Pagination, Navigation]"
    :slides-per-view="5"
    :space-between="20"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :pagination="{ clickable: true }"
    :navigation="true"
    class="mySwiper"
  >
    <swiper-slide><div class="slide-box"><a href="https://aareon.com/" target="_blank">Aareon</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://allane.com/" target="_blank">Allane</a></div></swiper-slide>
		<swiper-slide><div class="slide-box"><a href="https://amista.be" target="_blank">Amista</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://anthill.one/" target="_blank">Anthill</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://apollogic.com/" target="_blank">Apollogic</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://arcware.io" target="_blank">Arcware</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://atos.net/" target="_blank">Atos</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://bix-consulting.com/" target="_blank">biX</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://boomdata.com.au/" target="_blank">BOOMDATA</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://bosch.com/" target="_blank">Bosch</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://clolytic.com/" target="_blank">Clolytic</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://www.telekom.com/en" target="_blank">Deutsche Telekom</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://digitall.com" target="_blank">Digitall</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://eviden.com" target="_blank">Eviden</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://lights.digital" target="_blank">Digital Lights</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://glencore.com" target="_blank">Glencore</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://heliconialabs.com/" target="_blank">Heliconia Labs</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://ikea.com/" target="_blank">IKEA</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://pythian.com/" target="_blank">Pythian</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://www.reflectionsglobal.com/" target="_blank">Reflections</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://sap.com/" target="_blank">SAP</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://snowflake.com/" target="_blank">Snowflake</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://www.sofia.bg/web/sofia-municipality" target="_blank">Sofia Municipality</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://www.t-systems.com/" target="_blank">T.Systems</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://tredence.com/" target="_blank">Tredence</a></div></swiper-slide>
    <swiper-slide><div class="slide-box"><a href="https://valantic.com/" target="_blank">valantic</a></div></swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height:10em;
}

.slide-box {
  border-radius: 8px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.25rem;
}
</style>
