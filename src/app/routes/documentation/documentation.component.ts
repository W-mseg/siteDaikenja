import { Component, OnInit } from '@angular/core';
import {ListofcommandsService} from '../../services/listofcommands.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  title: string;
  paragraphe: string;
  constructor(public listOf: ListofcommandsService) {
  }

  ngOnInit(): void {
  }

}
