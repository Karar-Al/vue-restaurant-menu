const app = Vue.createApp({
  data() {
    return {
      priceCategoryIsCheap: false,
      menuCategory: 'appetizers', /* Meny-kategori */
      customerCategory: '', /* Kund-kategori */
      chosenMeal: {},
      order: [],
      showOrder: false,
    };
  },

  computed: {
    menu() {
      return this.customerCategory === ''
        ? []
        : menuNumberArrayToObjectArray(
          this.menuCategory, categoryMenus[this.customerCategory][this.menuCategory]
          //'appetizers'     , categoryMenus['adult']['appetizers']
          ).sort((a, b) => a.name.localeCompare(b.name))
    },

    totalAmount() {
      let total = 0

      for (let index = 0; index < this.order.length; index++) {
        const item = this.order[index];

        total += item.price
      }

      return total
    },

    filteredMenu() {
      if (this.priceCategoryIsCheap === true) {
        return this.menu.filter(item => item.price < 150) // Få tillbaka bara det billiga.
      } else {
        return this.menu // Få tillbaka allt.
      }

      /*
       * return this.priceCategoryIsCheap
       *   ? this.menu.filter(item => item.price < 150) // Få tillbaka bara det billiga.
       *   : this.menu // Få tillbaka allt.
       */
    }
  },

  methods: {
    priceToggle(val) {
      this.priceCategoryIsCheap = val
    },

    changeChosenMeal(index) {
      this.chosenMeal = this.menu[index]
    },
    deselectChosenMeal() {
      this.chosenMeal = {}
    },

    addOrder(index) {
      this.order.push(this.menu[index])
    },
    subtractFromOrder(name) {
      // Ta bort första tillgängliga name i this.order arrayen.

      // object { property: value, property: value }

      const index = this.order.findIndex(item => item.name === name)
      // .findIndex hittar index i arrayen baserat på innehållet.
      this.order.splice(index, 1)
      // .splice tar bort baserat på index, sedan hur många.
    },
  }
})
