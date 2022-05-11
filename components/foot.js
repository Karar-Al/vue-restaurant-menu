app.component('foot',{
  template: `
    <div class="flex flex-col">
      <p class="text-lg md:text-2xl">Restaurant Ivars</p>
      <p class="text-sm">072 123 123 12</p>
      <p class="text-sm">info@restaurantivars.se</p>
    </div>
    <div class="flex flex-1 flex-col items-center justify-center md:justify-start">
      <p class="md:text-2xl">&copy; Copyright 2022 - Grupp 5</p>
      <div class="hidden md:block text-sm">
        <p>Michel Stjärnfelt - Design | Johanna Uppa - Vue | Karar Al-Remahy - Upplägg</p>
      </div>
    </div>
    <div class="flex flex-col items-end">
      <p class="text-lg md:text-2xl">Allergier?</p>
      <p class="text-sm">Fråga gärna servitriserna!</p>
    </div>
  `
})