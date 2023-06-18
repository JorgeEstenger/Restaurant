import { Component } from '@angular/core';

@Component({
  selector: 'app-italian-food-menu',
  templateUrl: './italian-food-menu.component.html',
  styleUrls: ['./italian-food-menu.component.css']
})
export class ItalianFoodMenuComponent {
  menuItems = [
    {
      name: 'Margherita Pizza',
      description: 'Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil.',
      price: '$12.99',
      image: 'https://cdn.sodelicious.recipes/wp-content/uploads/2018/03/28-08-2017-R4-chefs-var3-Pizza-Margherita.jpg'
    },
    {
      name: 'Spaghetti Carbonara',
      description: 'Pasta dish with pancetta, eggs, Parmesan cheese, and black pepper.',
      price: '$14.99',
      image: 'https://i.pinimg.com/originals/3f/8a/09/3f8a099c4d8017f9bc93ea478ec1888c.jpg'
    },
    {
      name: 'Mushroom Risotto',
      description: 'Creamy risotto cooked with mushrooms, white wine, and Parmesan cheese.',
      price: '$16.99',
      image: 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/35/1504128527-delish-mushroom-risotto.jpg'
    },
    {
      name: 'Spaghetti al pesto genovese',
      description: 'Pasta dish with pancetta, eggs, Parmesan cheese, and black pepper.',
      price: '$14.99',
      image: 'https://www.lidl-recettes.fr/var/site/storage/images/8/5/8/2/22858-3-fre-FR/Spaghettis-avec-pesto-alla-genovese.jpg'
    },
    {
      name: 'Sopa Minestrone',
      description: 'Pasta dish with pancetta, eggs, Parmesan cheese, and black pepper.',
      price: '$14.99',
      image: 'https://www.goya.com/media/3655/garden-minestrone-soup.jpg?quality=80'
    },
    {
      name: 'Lasagna',
      description: 'Pasta dish with pancetta, eggs, Parmesan cheese, and black pepper.',
      price: '$14.99',
      image: 'https://wallpapercave.com/wp/wp3030177.jpg'
    },
    {
      name: 'Risotto alla milanese',
      description: 'Pasta dish with pancetta, eggs, Parmesan cheese, and black pepper.',
      price: '$14.99',
      image: 'https://cdn.tasteatlas.com/images/recipes/1ceadf8de08449078ae2562cce59aa09.jpg?mw=1300'
    },
    {
      name: 'Gnocchi',
      description: 'Pasta dish with pancetta, eggs, Parmesan cheese, and black pepper.',
      price: '$14.99',
      image: 'http://prd2-bone-image.s3-website-eu-west-1.amazonaws.com/CAC/var/cui/storage/images/editos/gnocchi/1118028-1-fre-FR/gnocchi.jpg'
    },
    {
      name: 'Ossobuco',
      description: 'Pasta dish with pancetta, eggs, Parmesan cheese, and black pepper.',
      price: '$14.99',
      image: 'https://www.thebutchersmarkets.com/wp-content/uploads/2016/02/Osso-Buco.jpg'
    },
    {
      name: 'Carpaccio',
      description: 'Pasta dish with pancetta, eggs, Parmesan cheese, and black pepper.',
      price: '$14.99',
      image: 'https://s.yimg.com/uu/api/res/1.2/g4DBZR3Mjhy8KS0DtGwteA--~B/aD00OTMzO3c9NzQwMDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/myrecipes_643/6ba930b201bc4c7a40fbaa22ca2cbc3b'
    },
    {
      name: 'Focaccia',
      description: 'Pasta dish with pancetta, eggs, Parmesan cheese, and black pepper.',
      price: '$14.99',
      image: 'https://vistapointe.net/images/focaccia-wallpaper-19.jpg'
    },
    {
      name: 'Melanzane alla parmigiana',
      description: 'Pasta dish with pancetta, eggs, Parmesan cheese, and black pepper.',
      price: '$14.99',
      image: 'https://www.miomyitaly.com/images/melanzane-pixa-4.jpg'
    },


  ];

}
