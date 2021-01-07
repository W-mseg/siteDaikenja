import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListofcommandsService {
  commands = [
    {
      title: 'Common', commands: [
        {name: 'help', description: 'Permet de voir les différantes commandes.'},
        {name: 'ticket', description: 'Permet d\'envoyer un ticket au membre du staff en cas de problèmes.'}]
    },
    {
      title: 'Economy', commands: [
        {name: 'accessory', description: 'Permet de voir la liste des accessoires disponible à la vente.'},
        {name: 'armor', description: 'Permet de voir la liste des armures disponible à la vente.'},
        {name: 'weapon', description: 'Permet de voir la liste des armes et bouclier à la vente.'},
        {name: 'sell', description: 'Permet de vendre un objet dans son inventaire via le nom de l\'item.'},
        {
          name: 'shop',
          description: 'Permet d\'acheter un objet via son label(nombre) avec demande d\'achat. (achat annulé au bout de 5s sans réponse)'
        },
        {name: 'userbalance', description: 'Permet de voir le porte-monnaie du joueur ping ou de son propre porte-monnaie.'}]
    },
    {
      title: 'Misc', commands: [
        {name: 'botinfo', description: 'Donne des informations sur le Bot.'},
        {name: 'daily', description: 'Donne une paie a l\'utilisateur. (cd = 24h temps reel)'},
        {name: 'roue', description: 'Permet de tourner une roue pour gagner une certaine somme d\'argent. (cd = 6h temps reel)'},
        {name: 'ping', description: 'Permet de voir le ping du Bot et de l\'API.'}
      ]
    },
    {
      title: 'RPG', commands: [
        {name: 'battle', description: 'Permet de lancer un combat avec le nom du monstre que vous voulez combattre.'},
        {name: 'equip', description: 'Permet de s\'équiper d\'un objet avec son nom quand il se trouve dans son inventaire.'},
        {name: 'uequip', description: 'Permet de retirer un objet avec son nom quand il est équipé.'},
        {name: 'heal', description: 'Heal le joueur dépendant de son niveaux. (commande payante en po)'},
        {
          name: 'monsterlist',
          description: 'Affiche la liste des monstres disponible a combattre. (attention à la difficulté des monstres)'
        },
        {
          name: 'prestige',
          description: 'Reset les niveaux en gardant les stats. (Prérequis : lvl 1000, cout: 1Milliard jusqu\'à 10Milliard, Prestige max: 10, Les monstres deviennent plus fort si votre prestige monte)'
        },
        {name: 'profil', description: 'Affiche le profil du joueur.'},
        {name: 'ressusrection', description: 'Permet de retourner a la vie si on meurt au combat. (commande payante en po)'},
        {name: 'setup', description: 'Permet de créer son personnage.'}
      ]
    }
  ];
  actualDocumentation = {title: this.commands[0].commands[0].name, description: this.commands[0].commands[0].description};

  constructor() {
  }

  changeActualDocumentation(titre: string, text: string): void{
    this.actualDocumentation = {title: titre, description: text};
  }
}
