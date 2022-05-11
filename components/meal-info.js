app.component("mealinfo", {
  props: ["image", "name", "customerCategory"],
  emits: ["deselectChosenMeal"],
  template: `
    <figure class="relative h-full w-full z-10">
      <figcaption
        class="flex flex-row gap-6 items-center md:justify-center norse-font border-1 p-4 text-2xl"
        v-bind:class="captionTheme"
      >
        <button class="md:hidden self-center p-2 flex-stretch bg-white rounded" v-on:click="onMenuItemXClick">
          <icon-x
            class="stroke-red-900"
            v-bind:class="{
              'stroke-blue-700': customerCategory === 'young'
            }"
          ></icon-x>
        </button>
        <span>{{ name || 'Välj maträtt för att se bild på rätten.' }}</span>
        
      </figcaption>
      <img v-if="image" class="h-full w-full object-cover object-center" v-bind:src="image" alt="" />
    </figure>
    <span
      v-bind:data-customer-category="customerCategory"
      class="infoContainerImage absolute top-0 h-full w-full z-0"
    ></span>
  `,

  computed: {
    captionTheme () {
      switch (this.customerCategory) {
        case 'adult':
          return 'border-red-900 bg-red-900 text-white'
        case 'couple':
          return 'border-amber-200 bg-amber-200 text-red-900'
        case 'young':
          return 'border-blue-500 bg-blue-500 text-white'
      }
    }
  },

  methods: {
    onMenuItemXClick() {
      this.$emit('deselectChosenMeal')
    }
  }
});
