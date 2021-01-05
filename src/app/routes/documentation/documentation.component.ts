import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  listOfCommands = [{title: 'test', commands : ['test1', 'test2', 2]}];
  title: string;
  paragraphe: string;
  constructor() {
  }

  ngOnInit(): void {
  }

  verifyElement(element): string{
    return typeof element === 'string' ?  element : null;
  }

}
