app.component("pricetoggle", {
  props: ["customerCategory", "checked"],

  template: `
    <div
      class="custom-checkbox"
      v-bind:data-customer-category="customerCategory"
      v-bind:class="theme"
    >
      <input v-bind:checked="checked" id="status" type="checkbox" v-on:input="emitToggle" name="status"/>
      <label for="status">
        <div
          class="status-switch norse-font"
          data-unchecked="Alla"
          data-checked="Billiga"
        ></div>
      </label>
    </div>
  `,

  computed: {
    theme () {
      switch (this.customerCategory) {
        case 'adult':
          return 'text-red-900 bg-white'
        case 'couple':
          return 'text-amber-200 bg-red-900 border-2 border-amber-200 rounded-md'
        case 'young':
          return 'text-blue-500 bg-white'
      }
    }
  },

  emits: ["checked"],

  methods: {
    emitToggle(ev) {
      this.$emit("checked", ev.currentTarget.checked);
    },
  },
});
