import { Hero } from "../models/Hero";

export class HeroesService  {
    heroesList: Hero[] = [
        {
            name: 'Superman',
            description: [
            'Ne supporte pas la kryptonite',
            ' est l ami de Batman de temps en temps'
            ],
            isInCombat: true
        },
        {
            name : 'The Joker',
            description: [ 'Ennemi de Batman',
            'meurtrier a Gotham City'],
            isInCombat: false
        },
        {
            name: 'felix the Cat',
            description : [
             'A 7 vies',   
            'N aime pas l eau'],
            isInCombat: true   
           
        },
    ];
}