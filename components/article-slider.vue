<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <component
    :is="mainTag"
    :class="mainClass"
  >
    <div 
      v-swiper:articles="sliderOptions"
      class="relative w-full"
      @sliderMove="onSwipeStart"
      @slideChangeTransitionEnd="onSwipeEnd"
    >
      <div
        class="swiper-wrapper"
        :class="{'is-swiping': isSwiping}"
      >
        <slot />
      </div>
    </div>
    <div class="relative swiper-pagination lg:hidden" />
  </component>
</template>

<script>
  export default {
    name: "ArticleSlider",
    props: {
      mainTag: {
        type: String,
        default: "div",
        required: false
      },
      mainClass: {
        type: String,
        default: "container relative overflow-hidden flex flex-col",
        required: false
      },
    },
    data() {
      return {
        sliderOptions: {
          autoplay: 2000,
          slidesPerView: 1.2,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        isSwiping: false
      };
    },
    methods: {
      onSwipeStart() {
        this.isSwiping = true;
      },
      onSwipeEnd() {
        this.isSwiping = false;
      },
    },
  };
</script>

<style lang="postcss" scoped>

  .swiper-slide-next {
    opacity: .4;
    transition: opacity .4s ease-out;
  }

  .is-swiping .swiper-slide-next {
    opacity: 1;
  }
  
</style>