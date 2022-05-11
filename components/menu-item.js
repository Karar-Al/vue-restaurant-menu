app.component("menuitem", {
  props: ["name", "description", "price", "index", "customerCategory"],
  template: `
    <div class="flex items-center justify-between px-6 py-4">
      <a class="flex flex-1 flex-col cursor-pointer" v-on:click="onMenuItemClick">
        <div class="flex flex-row gap-2 items-center">
          <icon-info alt="Se mer information om rätten."></icon-info>
          <p class="text-2xl">{{ name }}</p>
        </div>
        <p class="text-lg">{{ description }}</p>
      </a>
      <div class="flex h-12 items-center gap-2 text-red-900"
        v-bind:class="{
          'text-amber-200' : customerCategory === 'couple',
          'text-blue-500' : customerCategory === 'young',
        }">
        <p class="text-xl">{{ price }} SEK</p>
        <button
          v-on:click="onOrderClick"
          class="rounded-md border-2 p-1.5 drop-shadow-lg hover:transition-color ease-in-out duration-300"
          v-bind:class="buttonTheme"
        >
          <icon-reservation></icon-reservation>
        </button>
      </div>
    </div>
    <decorhr v-bind:customer-category="customerCategory"></decorhr>
  `,

  computed: {
    buttonTheme() {
      switch (this.customerCategory) {
        case 'adult':
          return 'border-red-900 hover:bg-red-900 hover:text-white'
        case 'couple':
          return 'border-amber-200 hover:bg-amber-200 hover:text-red-900'
        case 'young':
          return 'border-blue-500 hover:bg-blue-500 hover:text-white'
      }
    }
  },

  emits: ["changeChosenMeal", "addOrder"],

  methods: {
    onMenuItemClick() {
      this.$emit("changeChosenMeal", this.index);
    },

    onOrderClick() {
      this.$emit('addOrder', this.index)
    }
  },
});
