import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilPage } from '../profil/profil';
import { HeroesPage } from '../heroes/heroes';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  heroesPage = HeroesPage;
  profilPage = ProfilPage;  


}
