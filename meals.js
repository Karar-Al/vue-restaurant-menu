/**
 * All our meals are here.
 */
const meals = {
  appetizers: [
    { name: 'Halloumitoast', description: 'Tomat, balsamico & basilika ', price: 99, image: './img/appetizers/Halloumitoast.jpg' },
    { name: 'Calamares', description: 'Panerade bläckfiskringar', price: 75, image: './img/appetizers/Calamares.jpg' },
    /* Vuxen, Par */ { name: 'Räkcocktail', description: '', price: 125, image: './img/appetizers/Rakcocktail.jpg' },
    /* Vuxen, Par*/ { name: 'Löjromstoast', description: '', price: 179, image: './img/appetizers/Lojromstoast.jpg' },
    { name: 'Tzatziki', description: 'Traditionell yoghurtröra med vitlök', price: 65, image: './img/appetizers/Tzatziki.jpg' },
    { name: 'Toast California', description: 'Lax, kaviar', price: 99, image: './img/appetizers/ToastCalifornia.jpg' },
    { name: 'Toast Skagen', description: '', price: 89, image: './img/appetizers/ToastSkagen.jpg' },
   /* Vuxen */ { name: 'Vitlöksbröd', description: '', price: 59, image: './img/appetizers/Vitloksbrod.jpg' },
   /* Vuxen, Par */ { name: 'Fransk löksoppa', description: '', price: 64, image: './img/appetizers/FranskLoksoppa.jpg' },
   /* Vuxen, Par */ { name: 'Hummersoppa', description: '', price: 109, image: './img/appetizers/Hummersoppa.jpg' },
   /* Barn */ { name: 'Minipizza', description: '', price: 29, image: './img/appetizers/minipizza.webp' },
   /* Barn */ { name: 'Fruktspett', description: '', price: 19, image: './img/appetizers/fruktspett.webp' },
  ],
  main: [
    { name: 'Kycklingschnitzel', description: 'Hemmagjord kycklingschnitzel med rödvinssås frästa haricots verts serveras med stekt potatis.', price: 189, image: "./img/mainfood/Kycklingschnitzel.jfif"},
    { name: 'Skogens fiskfilé', description: 'Smörstekt fiskfilé med skogssvampsås serveras med kokt potatis.', price: 119, image: "./img/mainfood/Skogensfiskfile.jpg"},
    /* Vuxen */ { name: 'Fläskfilé med bacon-wrapped stekt potatis', description: 'Helstekt fläskfilé med mild pepparsås serveras med bacon stekt potatis.', price: 219, image: "./img/mainfood/FlaskfileMedBacon-wrappedstektpotatis.jpg" },
    { name: 'Scampi Fritti', description: 'Räkor serverade med ris och Rhode Islandsås.', price: 109, image: "./img/mainfood/ScampiFritti.jpg"},
    /* Vuxen */ { name: 'Fisk på Planka', description: 'Med hemlagat potatismos, béarnaisesås & champinjonstuvning.', price: 159, image: "./img/mainfood/FiskPaPlanka.jpg" },
    /* Vuxen */ { name: 'Mixgrill', description: 'Grillad oxfilé, fläskfilé och färsbiff med pressad potatis, rå lök och hembakat bröd.', price: 164 , image: "./img/mainfood/Mixgrill.jpg"},
    { name: 'Entrêcote', description: 'Entrêcote med vitlöks- persilje- eller Café de Parissmör.', price: 279, image: "./img/mainfood/Entricot.jpg" },
    { name: 'Ackes Oxfilé', description: 'Oxfilé med hemlagat bearnaise- kantarell och rödvinsås.', price: 349, image: "./img/mainfood/AckesOxfile.jpg" },
    { name: 'Biffstek', description: 'Biffstek med lök och stekt potatis.', price: 149, image: "./img/mainfood/biffstek.jpg" },
    { name: 'Tournedos Filé minute', description: 'Tre skivor oxfilé med kantarellsås.', price: 219, image: "./img/mainfood/TournedosFileminute.jpg" },
    /* Vuxen */ { name: 'Quorn Kebab med Hummus', description: 'Quorn Kebab med gräslök och tunnbröd, samt humus.', price: 199, image: "./img/mainfood/QuornKebabMedHummus.jpg" },
    { name: 'Vegan Wok', description: 'Wok med nudlar, tofu och rostade sojabönor.', price: 199, image: "./img/mainfood/VeganWok.jpg" },
    /* Barn-menyn, 12 */
    { name: 'Pannkakor m. sylt och grädde', description: '', price: 75, image: "./img/mainfood/Pannkakor.jpg" },
    { name: 'Hamburgertallrik 90gr', description: '', price: 89, image: "./img/mainfood/Hamburgertallrik90gr.jpg" },
    { name: 'Köttbullar med potatismos', description: '', price: 79, image: "./img/mainfood/KottbullarMedPotatismos.jpg" },
    { name: 'Korvbricka m. pommes', description: '', price: 59, image: "./img/mainfood/KorvbrickaMPommes.jpg" },
    { name: 'Halloumi stroganoff', description: '', price: 79, image: "./img/mainfood/HalloumiStroganoff.jpg" },
    { name: 'Nuggets m. pommes', description: '', price: 64, image: "./img/mainfood/NuggetsMPommes.jpg" },
    { name: 'Grillkorv m. bröd', description: '', price: 39, image: "./img/mainfood/GrillkorvMBrod.jpg" },
    { name: 'Ostfylld Toast', description: '', price: 39, image: "./img/mainfood/OstfylldToast.jpg" },
    { name: 'Hamburgertallrik Special med valfri efterätt', description: 'Två hamburgertallrikar och valfri efterätt.', price: 159, image: "./img/mainfood/Hamburgertallrik90gr.jpg" },
    { name: 'Kompisdealen', description: '2 valfri meny + efterätt', price: 164, image: "./img/mainfood/Kompisdealen.jpg" },
  ],
  desserts: [
    /* Vuxen, Par */ { name: 'Tartufo', description: 'Italiensk chokladglass med hasselnötter, draperad med cacao', price: 159, image: "./img/desserts/Tartufo.jpg"},
    /* Vuxen, Par */ { name: 'Baklavas', description: 'Valnötsfylld filodegbakelse med vaniljglass', price: 89, image: "./img/desserts/Baklavas.jpg" },
    { name: 'Italiensk glassbakelse', description: 'Fylld med citronkräm, serveras på hallonspegel', price: 179, image: "./img/desserts/ItalienskGlassbakelse.jpg" },
    /* Barn, Par */{ name: 'Bananasplit', description: 'Med glass & vispgrädde', price: 69, image: "./img/desserts/Bananasplit.jpg" },
    { name: 'Färska jordgubbar', description: 'Med glass och grädde', price: 79, image: "./img/desserts/FarskaJordgubbar.jpg" },
    { name: 'Camembert', description: 'Med hjortronsylt', price: 159, image: "./img/desserts/Camembert.jpg" },
    /* Barn, Par */ { name: 'Friterad banan', description: 'Med glass', price: 69, image: "./img/desserts/FriteradBanan.jpg" },
    /* Barn */ { name: 'Nutella Pizza', description: 'Valfri topping', price: 109, image: "./img/desserts/NutellaPizza.jpg" },
    { name: 'Vaniljglass med varm hjortronsylt', description: '', price: 59, image: "./img/desserts/VaniljglassHjortronsylt.jpg" },
    { name: 'Vaniljglass med chokladsås', description: '', price: 59, image: "./img/desserts/VaniljglassMChokladsas.jpg" },
  ]
}

/**
 * Our customer category specific menus.
 */
const categoryMenus = {
  young: {
    appetizers: [0, 1, 4, 5, 6, 10, 11],
    main: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    desserts: [2, 3, 4, 5, 6, 7, 8, 9],
  },
  adult: {
    appetizers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    main: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    desserts: [0, 1, 2, 4, 5, 8, 9],
  },
  couple: {
    appetizers: [0, 1, 2, 3, 4, 5, 6, 8, 9],
    main: [0, 1, 3, 6, 7, 8, 9, 11],
    desserts: [0, 1, 2, 3, 4, 5, 6, 8, 9],
  }
}

/**
 * Example usage:
 * 
 * `menuNumberArrayToObjectArray('appetizers', categoryMenus.adult.appetizers)`
 */
function menuNumberArrayToObjectArray (menuCategory, menuNumberArray) {
  /* menuCategory = 'appetizers' */
  /* menuNumberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] */

  const mealsObjectArray = meals[menuCategory] /* meals['appetizers'] */

  /**
   * mealsObjectArray = [
   *  { name: 'Halloumitoast', description: 'Tomat, balsamico & basilika ', price: 99, image: './img/appetizers/Halloumitoast.jpg' },
   *  { name: 'Calamares', description: 'Panerade bläckfiskringar', price: 75, image: './img/appetizers/Calamares.jpg' },
   *  { name: 'Räkcocktail', description: '', price: 125, image: './img/appetizers/Rakcocktail.jpg' },
   *  { name: 'Löjromstoast', description: '', price: 179, image: './img/appetizers/Lojromstoast.jpg' },
   *  { name: 'Tzatziki', description: 'Traditionell yoghurtröra med vitlök', price: 65, image: './img/appetizers/Tzatziki.jpg' },
   *  { name: 'Toast California', description: 'Lax, kaviar', price: 99, image: './img/appetizers/ToastCalifornia.jpg' },
   *  { name: 'Toast Skagen', description: '', price: 89, image: './img/appetizers/ToastSkagen.jpg' },
   *  { name: 'Vitlöksbröd', description: '', price: 59, image: './img/appetizers/Vitloksbrod.jpg' },
   *  { name: 'Fransk löksoppa', description: '', price: 64, image: './img/appetizers/FranskLoksoppa.jpg' },
   *  { name: 'Hummersoppa', description: '', price: 109, image: './img/appetizers/Hummersoppa.jpg' },
   *  { name: 'Minipizza', description: '', price: 29, image: './img/appetizers/minipizza.webp' },
   *  { name: 'Fruktspett', description: '', price: 19, image: './img/appetizers/fruktspett.webp' },
   * ],
   */

  const menuObjectArray = [] /* Tom array. */

  /**
   * Turn the number into an object using menuCategory from meals,
   * and current menuNumber from menuNumberArray.
   */

  for (let index = 0; index < menuNumberArray.length; index++) {
    /* index = 1 */

    // Current menuNumber, from menuNumberArray.
    const menuNumber = menuNumberArray[index] /* menuNumberArray[1] */
    /* menuNumber = 1 */

    // Find the object, using menuCategory and menuNumber, in meals.
    const meal = mealsObjectArray[menuNumber] /* mealsObjectArray[1] */

    /**
     * meal = { name: 'Calamares', description: 'Panerade bläckfiskringar', price: 75, image: './img/appetizers/Calamares.jpg' }
    */

    menuObjectArray.push(meal)
  }

  /**
   * menuObjectArray = [
   *   { name: 'Halloumitoast', description: 'Tomat, balsamico & basilika ', price: 99, image: './img/appetizers/Halloumitoast.jpg' },
   *   { name: 'Calamares', description: 'Panerade bläckfiskringar', price: 75, image: './img/appetizers/Calamares.jpg' },
   *   { name: 'Räkcocktail', description: '', price: 125, image: './img/appetizers/Rakcocktail.jpg' },
   *   { name: 'Löjromstoast', description: '', price: 179, image: './img/appetizers/Lojromstoast.jpg' },
   *   { name: 'Tzatziki', description: 'Traditionell yoghurtröra med vitlök', price: 65, image: './img/appetizers/Tzatziki.jpg' },
   *   { name: 'Toast California', description: 'Lax, kaviar', price: 99, image: './img/appetizers/ToastCalifornia.jpg' },
   *   { name: 'Toast Skagen', description: '', price: 89, image: './img/appetizers/ToastSkagen.jpg' },
   *   { name: 'Vitlöksbröd', description: '', price: 59, image: './img/appetizers/Vitloksbrod.jpg' },
   *   { name: 'Fransk löksoppa', description: '', price: 64, image: './img/appetizers/FranskLoksoppa.jpg' },
   *   { name: 'Hummersoppa', description: '', price: 109, image: './img/appetizers/Hummersoppa.jpg' },
   * ]
   */

  return menuObjectArray
}
