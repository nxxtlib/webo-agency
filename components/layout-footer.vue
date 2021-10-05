<template>
  <component
    :is="mainTag"
    :class="mainClass"
    class="relative pt-2 overflow-hidden text-white footer xs:pt-8"
  >
    <SectionWrapper
      main-tag="div"
      :main-title="footerData.call_to_action_section.title"
      class="bg-backgroundDark text-lightText"
      container-class="flex-col items-start mt-4 mb-4 xs:mt-10 lg:mb-10 md:flex-row"
      height-auto
    >
      <SectionHeader
        :position-header="true"
        :number-header="0"
        :subtitle="footerData.call_to_action_section.title"
        :title="footerData.call_to_action_section.text"
        title-class="text-xl leading-tight xs:text-4xl sm:text-5xl md:text-5xl lg:text-small-header"
        subtitle-class="text-xs xs:text-base md:text-sm lg:text-base"
        class="w-full mb-8 md:mb-0 md:w-2/3 lg:w-1/3"
      />
      <ContactButton
        class="mt-auto mb-4 xs:mb-8 lg:mb-0 md:mb-0 md:ml-auto lg:ml-0"
        :text="footerData.call_to_action_section.button.title"
        :link="footerData.call_to_action_section.button.hyperlink"
        :main-class="'button-primary button-with-line button-with-line-dark'"
      />
    </SectionWrapper>

    <div class="container flex flex-row flex-wrap xl:pb-8">
      <div class="flex flex-col w-full lg:w-2/3 lg:order-2">
        <div class="w-full lg:w-4/5">
          <h2 class="mb-1 text-base font-medium xs:ml-4 xs:text-xl">
            {{ menuServices.name }}
          </h2>

          <ul class="flex flex-row flex-wrap w-full mb-4 text-xs font-medium break-all lg:w-2/3 list-dash xs:mb-10 xs:break-normal xs:text-base">
            <li 
              v-for="(item, index) in menuServices.items"
              :key="index"
              class="w-full mb-2 xs:w-1/2 xs:mb-1 md:mb-0"
            >
              <a 
                :href="item.url"
                :target="!includeRoot(item) ? '_blank' : ''"
                :rel="!includeRoot(item) ? 'noopener noreferrer' : ''"
              >
                {{ item.title }}
              </a>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-4/5">
          <h2 class="mb-1 text-base font-medium xs:ml-4 xs:text-xl">
            {{ menuCompany.name }}
          </h2>

          <ul class="flex flex-row flex-wrap mb-4 text-xs font-medium break-all list-dash xs:mb-10 xs:break-normal xs:text-base">
            <li 
              v-for="(item, index) in menuCompany.items"
              :key="index"
              class="w-full mb-2 xs:w-1/2 lg:w-1/3 xs:mb-1 md:mb-0"
            >
              <a 
                :href="item.url"
                :target="!includeRoot(item) ? '_blank' : ''"
                :rel="!includeRoot(item) ? 'noopener noreferrer' : ''"
              >
                {{ item.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col w-full mt-0 mb-2 text-xs sm:w-1/3 lg:order-1 xs:mt-8 lg:mt-0 xs:mb-6 xs:text-base">
        <div class="mb-8">
          <h2 class="mb-1 text-base font-medium xs:ml-4 xs:text-xl">
            {{ footerData.adress.city }}
          </h2>

          <address class="not-italic leading-loose address">
            {{ footerData.adress.street }}<br>
            {{ footerData.adress.zip_code }} {{ footerData.adress.city }}
          </address>

          <a :href="footerData.telephone.link">
            {{ footerData.telephone.title }}
          </a>
        </div>

        <p class="mb-5 leading-tight">
          {{ footerData.call_to_action_footer.description }}
          <a 
            class="block text-main text-overflow" 
            :href="footerData.call_to_action_footer.link.link"
          >
            {{ footerData.call_to_action_footer.link.title }}
          </a>
        </p>


        <ul class="flex flex-wrap">
          <li 
            v-for="(item, index) in menuSocialMedia.items"
            :key="index"
            class="flex-initial mb-4 mr-2"
            :class="item.acf.icon.value"
          >
            <a 
              :href="item.url"
              :target="!includeRoot(item) ? '_blank' : ''"
              :rel="!includeRoot(item) ? 'noopener noreferrer' : ''"
              :title="item.title"
            >
              <svg
                v-show="item.acf.icon.value === 'fb'"
                width="30"
                height="30"
                viewBox="0 0 4 7"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="1.41421"
                xml:space="preserve"
              >
                <path
                  fill="none"
                  d="M-212.18-1325.52h460.8v1952h-460.8z"
                />
                <path
                  fill="#FFFFFF"
                  d="M3.258 3.611h-.953v3.398H.892V3.611H.22v-1.2h.672v-.777c0-.555.264-1.425 1.425-1.425l1.046.004v1.165h-.759c-.124 0-.299.062-.299.327v.707H3.38l-.122 1.199z"
                />
              </svg>

              <svg
                v-show="item.acf.icon.value === 'in'"
                width="30"
                height="30"
                viewBox="0 0 7 7"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="1"
                xml:space="preserve"
                class="mr-2"
              >
                <path
                  fill="none"
                  d="M-241.46-1325.52h460.8v1952h-460.8z"
                />
                <path
                  d="M2.029.209A1.89 1.89 0 00.14 2.098V5.12a1.89 1.89 0 001.889 1.889h3.023A1.888 1.888 0 006.94 5.12V2.098A1.888 1.888 0 005.052.209H2.029zm3.778.755a.378.378 0 110 .757.378.378 0 010-.757zM3.54 1.72a1.89 1.89 0 110 3.779 1.89 1.89 0 010-3.779zm0 .755a1.14 1.14 0 00-1.133 1.134c0 .622.512 1.133 1.133 1.133.622 0 1.134-.511 1.134-1.133A1.14 1.14 0 003.54 2.475z"
                  fill="#fff"
                  fill-rule="nonzero"
                />
              </svg>

              <svg
                v-show="item.acf.icon.value === 'li'"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="1.414"
                xml:space="preserve"
                class="mr-2"
              >
                <path 
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" 
                  fill="#FFFFFF"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <img
        src="~assets/slice3.svg"
        alt="shape"
        class="background-shape-4"
      >
    </div>

    <div class="w-full ml-auto font-medium text-black lg:w-5/12 bg-main lg:pl-4 text-micro xs:text-xs">
      <div class="container">
        {{ copyrightDate }} {{ footerData.company_short }}. <br class="block xs:hidden">{{ footerData.copyright }}
      </div>
    </div>
  </component>
</template>
<script>
  export default {
    name: "LayoutFooter",
    props: {
      mainTag: {
        type: String,
        default: "",
        required: false
      },
      mainClass: {
        type: String,
        default: "",
        required: false
      }
    },
    data: function() {
      return {
        emoji: '_(^.^)_',
        copyrightDate: `© ${ new Date().getFullYear() < 2020 ? '2019' : '2019 ~ ' + new Date().getFullYear() }`
      };
    },
    computed: {
      footerData () {
        return this.$store.getters["general/getFooterData"]
      },
      menuData () {
        return this.$store.getters["menu/menuData"]
      },
      menuServices: function(){
        return this.$store.getters['menu/menuServices'];
      },
      menuCompany: function(){
        return this.$store.getters['menu/menuCompany'];
      },
      menuSocialMedia: function(){
        return this.$store.getters['menu/menuSocialMedia'];
      }
    },
    methods: {
      includeRoot: function(item){
        return item.url.includes('www.webo.agency')
      },
      telephoneFormat(number){
        let numberArray = Array.from(number);

        numberArray.splice( 3, 0, " ");
        numberArray.splice( 6, 0, " ");
        numberArray.splice( 10, 0, " ");
        numberArray.splice( 13, 0, " ");

        return numberArray.join('');
      },
      focusContact(event){
        if( this.$route.path !== '/'){
          window.location = event.target.href;
        }
        this.$root.$emit('contactFooterFocus');      
      }
    }
  };
</script>

<style lang="postcss">

  .background-shape-4 {
    display: none;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 0;
    width: 530px;
    
    @media (min-width: 1550px) {
      display: block;
    }
  }
</style>