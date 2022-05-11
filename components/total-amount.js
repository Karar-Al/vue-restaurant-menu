app.component('totalamount', {
  props: ['number'],
  template: `
    <button class="rounded-md bg-white p-2">
      Totalt pris: <strong>{{ number }} SEK</strong>
    </button>
  `
})