app.component("orderaside", {
  props: ["order"],
  template: `
    <div class="p-4 flex flex-row gap-6 items-center lg:justify-center">
      <button 
        class="lg:hidden self-center p-2 flex-stretch bg-red-600 rounded"
        v-on:click="onMenuItemXClick"
      >
        <icon-x class="stroke-white"></icon-x>
      </button>
      <h2 class="norse-font text-2xl text-black">Beställning</h2>
    </div>
    <div class="overflow-auto p-4 text-black">
      <div v-for="item in formattedOrder" class="m-2">
        <div class="flex justify-between">
          <p class="p-2">{{ item.amount }}x - {{ item.name }}</p>
          <div class="flex gap-1 items-center">
            <p class="p-2">{{ item.totalPrice }} SEK</p>
            <!--
              <button class="p-2 lg:p-1.5 h-fit text-white bg-red-500 rounded">
                <icon-plus class="lg:w-4 h-auto"></icon-plus>
              </button>
            -->
            <button v-on:click="onSubtractItemClick(item.name)" class="p-2 lg:p-1.5 h-fit text-white bg-red-600 rounded">
              <icon-minus class="lg:w-4 h-auto"></icon-minus>
            </button>
          </div>
        </div>
        <hr class="mt-2 border-1 border-black" />
      </div>
    </div>
  `,

  computed: {
    formattedOrder() {
      const arr = [];

      /**
       * this.order = [
       *   { name: 'Tzatziki', description: 'Traditionell yoghurtröra med vitlök', price: 65, image: './img/appetizers/Tzatziki.jpg' },
       *   { name: 'Toast California', description: 'Lax, kaviar', price: 99, image: './img/appetizers/ToastCalifornia.jpg' },
       *   { name: 'Toast California', description: 'Lax, kaviar', price: 99, image: './img/appetizers/ToastCalifornia.jpg' },
       * ]
       */

      for (let index = 0; index < this.order.length; index++) {
        /* index = 0 */

        const item = this.order[index]; /* this.order[0] */
        /* item = { name: 'Tzatziki', description: 'Traditionell yoghurtröra med vitlök', price: 65, image: './img/appetizers/Tzatziki.jpg' },*/

        // Krävs mer JavaScript om index!

        // Se om arr redan har något med item.name:
        const foundExisting = arr.find(
          (existing) => existing.name === item.name
        );

        // if den finns
        if (foundExisting) {
          // Ändra just den så att amount++, och att totalPrice += item.price
          foundExisting.amount++;
          foundExisting.totalPrice += item.price;
        } else {
          // else, lägg till en från början.
          arr.push({ amount: 1, name: item.name, totalPrice: item.price });
        }
      }

      /**
       * arr = [
       *   { amount: 1, name: 'Tzatziki', totalPrice: 65 }
       *   { amount: 2, name: 'Toast California', totalPrice: 198 },
       * ]
       */

      return arr.sort((a, b) => a.name.localeCompare(b.name));
    },
  },

  emits: ["subtractItem", "deselectShowOrder"],

  methods: {
    onSubtractItemClick(name) {
      this.$emit("subtractItem", name);
    },

    onMenuItemXClick() {
      this.$emit("deselectShowOrder");
    },
  },
});
