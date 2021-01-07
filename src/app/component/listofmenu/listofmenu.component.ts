import {Component, Input, OnInit} from '@angular/core';
import {ListofcommandsService} from '../../services/listofcommands.service';

@Component({
  selector: 'app-listofmenu',
  templateUrl: './listofmenu.component.html',
  styleUrls: ['./listofmenu.component.scss']
})
export class ListofmenuComponent implements OnInit {
  @Input()listOfCommands = [];
  constructor(public listOfCommandService: ListofcommandsService) {
  }

  ngOnInit(): void {
  }

  verifyElement(element): string{
    return typeof element === 'string' ?  element : null;
  }
}
