<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <component
    :is="mainTag"
    :id="mainId"
    :class="mainClass"
  >
    <div
      v-swiper:projects="projectsOption"
      @sliderMove="onSwipeStart"
      @slideChangeTransitionEnd="onSwipeEnd"
    >
      <div
        class="swiper-wrapper project-slider"
        :class="{'is-swiping': isSwiping}"
      >
        <div
          v-for="entry in slides"
          :key="entry.id"
          class="w-auto swiper-slide"
        >
          <div class="flex-auto max-w-450 max-w-350">
            <img
              :src="entry.project_promoted_screensave.url"
              :alt="entry.project_promoted_screensave.alt"
              class="w-full mb-2"
              width="450"
              height="450"
            >
            <h2
              class="text-xl font-bold"
            >
              {{ entry.project_promoted_title }}
            </h2>
          </div>
        </div>
      </div>
      <div class="relative mt-8 swiper-pagination" />
    </div>
  </component>
</template>

<script>
  export default {
    name: "CSlider",
    props: {
      mainTag: {
        type: String,
        default: "div",
        required: false
      },
      mainClass: {
        type: String,
        default: "relative overflow-hidden",
        required: false
      },
      mainId: {
        type: String,
        default: "technology",
        required: false
      },
      slides: {
        type: Array,
        default: () => [],
        required: false  
      }
    },
    data() {
      return {
        projectsOption: {
          autoplay: 2000,
          slidesPerView: 3,
          spaceBetween: 50,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
            768: {
              slidesPerView: 1,
            },
          },
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
    }
  };
</script>

<style lang="postcss" scoped>
  
  /* .swiper-slide-next {
    opacity: .4;
    transition: opacity .4s ease-out;

    @screen lg {
      opacity: 1;
    }
  } */

  .swiper-slide-active {

    h2 {
      @apply text-main;
    }
  }

  /* .swiper-slide-next + .swiper-slide {
    @screen xl {
      transition: opacity .4s ease-out;
      opacity: .4;
    }
  } */

  /* .is-swiping .swiper-slide-next {
    opacity: 1;
  }

  .is-swiping .swiper-slide-next + .swiper-slide {
    opacity: 1;
  } */

</style>