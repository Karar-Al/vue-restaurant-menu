app.component('decorhr', {
  props: ['customerCategory'],
  template: `
    <div v-if="customerCategory === 'couple'" class="flex items-center justify-between bg-opacity-75">
      <span
        class="ml-4 h-0.5 w-full rounded-2xl bg-amber-500 drop-shadow-md"
      ></span>
      <span>
        <icon-heart class="mx-3 h-auto w-4 drop-shadow-md text-amber-200"></icon-heart>
      </span>
      <span
        class="mr-4 h-0.5 w-full rounded-2xl bg-amber-500 drop-shadow-md"
      ></span>
    </div>
    <div v-else-if="customerCategory === 'young'" class="flex items-center justify-between">
      <span
        class="ml-4 h-1 w-full rounded-2xl bg-blue-500 drop-shadow-md"
      ></span>
      <span
        class="mx-1 h-4 w-7 rounded-full border-4 border-blue-500 bg-white drop-shadow-md"
      ></span>
      <span
        class="mr-4 h-1 w-full rounded-2xl bg-blue-500 drop-shadow-md"
      ></span>
    </div>
    <div v-else class="flex items-center justify-between">
      <span
        class="ml-4 h-1 w-full rounded-2xl bg-red-900 drop-shadow-md"
      ></span>
      <span
        class="mx-1 h-4 w-7 rounded-full border-4 border-red-900 bg-white drop-shadow-md"
      ></span>
      <span
        class="mr-4 h-1 w-full rounded-2xl bg-red-900 drop-shadow-md"
      ></span>
    </div>
  `
})