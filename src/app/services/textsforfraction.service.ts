import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextsforfractionService {
  listOfText = [{
    title: 'economy', text: 'Réunis toutes les commandes pour la parties économie' +
      'cette section réunis des commandes come la possibilité de voir la liste des accessoires ' +
      'disponible a la vente ou de pouvoir vendre ces memes accessoires', image: './assets/slime1.png'
  },
    {
      title: 'Misc', text: 'Donne des informations Hors roleplay tel que des infos sur le bot,' +
        'voir le pingdu bot, gagner une somme d\'argent etc...', image: './assets/slime2.png'
    },
    {
      title: 'RPG', text: 'Comprend toutes les commandes liées au RPG, toutes les commandes pour jouer' +
        'se trouve dans cette section, plus d\'infos se trouvent dans la section "documentation"', image: './assets/slime3.png'
    }];

  constructor() {
  }
}
