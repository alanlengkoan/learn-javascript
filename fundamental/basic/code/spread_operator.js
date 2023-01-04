const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
const allFavoritesSpread = [...favorites, ...others];
const allFavoritesArray = [favorites, others];

console.log(...favorites, ...others);
console.log(allFavoritesSpread);
console.log(allFavoritesArray);