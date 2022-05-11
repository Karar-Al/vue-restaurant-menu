app.component('navigationitem', {
  // Todo: Ändra färgen när man väljer barn kundkategori.
  props: ['text', 'selected', 'customerCategory'],

  template: `
    <button
      class="flex-1 border-2 border-r-0 p-2 lg:p-4 lg:text-xl text-md hover:transition-color hover:bg-opacity-75 hover:border-opacity-0 ease-in-out duration-300"
      v-bind:class="{
        'border-red-900 hover:bg-red-900 hover:text-white': customerCategory === 'adult',
        'bg-red-900 text-white': customerCategory === 'adult' && selected,
        'text-red-900': customerCategory === 'adult' && !selected,

        'border-amber-200 hover:bg-amber-200 hover:text-red-900': customerCategory === 'couple',
        'bg-amber-200 text-red-900': customerCategory === 'couple' && selected,
        'bg-red-900 text-amber-200': customerCategory === 'couple' && !selected,

        'border-blue-500 hover:bg-blue-500 hover:text-white': customerCategory === 'young',
        'bg-blue-500 text-white': customerCategory === 'young' && selected,
        'bg-white text-blue-500': customerCategory === 'young' && !selected,
      }"
    >
      {{ text }}
    </button>
  `
})
