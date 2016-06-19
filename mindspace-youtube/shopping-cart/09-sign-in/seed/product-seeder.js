var Product = require('../models/product');
var mongoose = require('mongoose');

// since this script will run once we need to do it manually
mongoose.connect('localhost:27017/shopping');

var products = [
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic Video Game',
    description: 'Awesome Game!!!!',
    price: 10
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/2/29/World_of_Warcraft_-_The_Burning_Crusade_coverart.jpg',
    title: 'World of Warcraft Video Game',
    description: 'Also Awesome? But of course it was better in vanilla...',
    price: 20
  }),
  new Product({
    imagePath: 'http://firsthour.net/screenshots/call-of-duty-4-modern-warfare/call-of-duty-4-modern-warfare-cover.jpg',
    title: 'Call of Duty Video Game',
    description: 'Meh ... nah, it\'s okay I guess',
    price: 40
  }),
  new Product({
    imagePath: 'http://www.mobygames.com/images/covers/l/291301-minecraft-playstation-4-edition-xbox-one-front-cover.png',
    title: 'Minecraft Video Game',
    description: 'Now that is super awesome!',
    price: 15,
  }),
  new Product({
    imagePath: 'http://www.gamingrefined.com/wp-content/uploads/2016/03/dark-souls-3-cover.jpg',
    title: 'Dark Souls 3 Video Game',
    description: 'I died!',
    price: 50
  })
];

function exit() {
  mongoose.disconnect();
}

// save is an asynchronous method so we have to use a callback to handle it
var done = 0;
products.forEach(function(product) {
  product.save(function(err, result) {
    done++;
    if(done === products.length) {
      exit();
    }
  });
});