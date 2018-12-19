import { Component } from '@angular/core' ;
import { NavController } from 'ionic-angular';
import { SingleHeroPage } from './single-hero/single-hero';

@Component ({
    selector: 'page-heroes',
    templateUrl: 'heroes.html'
})

export class HeroesPage {

    heroesList = [
        {
            name: 'Superman',
            description: [
            'Ne supporte pas la kryptonite',
            ' est l ami de Batman de temps en temps'
            ]
        },
        {
            name : 'The Jocker',
            description: [ 'Ennemi de Batman',
            'meurtrier a Gotham City']
        },
        {
            name: 'felix the Cat',
            description : [
             'A 7 vies',   
            'N aime pas l eau']   
           
        },
    ];

    constructor(private navCtrl: NavController ){}

    onLoadHero(name: string) {
        this.navCtrl.push(SingleHeroPage, {heroName: name})
    }
}