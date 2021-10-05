<template>
  <component
    :is="mainTag"
    :id="mainId"
    class="flex flex-row max-h-700"
  >
    <div class="flex flex-row justify-between w-full">
      <div
        class="flex flex-col items-start justify-center text-left lg:flex-0-60"
      >
        <slot />
      </div>
      <div 
        class="flex-1 hidden md:block"
      >
        <img
          svg-inline
          src="~/assets/logotype.svg"
          alt="WEBO"
        >
      </div>
    </div>
  </component>
</template>
<script>
  export default {
    name: "Carousel",
    props: {
      mainTag: {
        type: String,
        default: "div",
        required: false
      },
      mainClass: {
        type: String,
        default: "",
        required: false
      },
      mainId: {
        type: String,
        default: "banner",
        required: false
      },
      dark: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    data() {
      return {
        // document: "TEST"
      };
    },
    methods: {
      setFocus() {
        var textbox = document.getElementById("email");
        textbox.focus();
        textbox.scrollIntoView();
        // this.$store.commit('contact/focus', true );
      }
    }
  };
</script>
