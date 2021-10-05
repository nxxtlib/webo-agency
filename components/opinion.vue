<template>
  <div class="relative opinion">
    <img 
      src="~/assets/quote.png" 
      alt="quote"
      class="absolute top-0 left-0 z-negative"
    >

    <div class="mb-5">
      <img 
        src="~/assets/avatar.png" 
        :alt="`${company} - ${author}`"
        class="mx-auto"
      >
      <cite class="not-italic">
        <strong>{{ author }}</strong>
        <span>{{ company }}</span>
      </cite>
    </div>
    <blockquote
      class="text-sm italic font-bold md:text-base"
    >
      {{ content }}
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'Opinion',
  props: {
    title: {
      type: String,
      default: "",
      required: false,
    },
    content: {
      type: String,
      default: "",
      required: false,
    },
    author: {
      type: String,
      default: "",
      required: false,
    },
    company: {
      type: String,
      default: "",
      required: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
  .opinion {
    display: block;

    strong,
    em {
      display: block;
    }
  }
</style>
