let restaurant = {
    name: 'Alan Lengkoan',
    city: 'Makassar',
    "favorite drink": 'Alpukat',
    "favorite food": 'Bakso Babi',
    isVegan: false
};

// ganti property
restaurant.name = "Saputra Lengkoan";
// hapus property
delete restaurant.isVegan;

console.log(restaurant);
