import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cardlink',
  templateUrl: './cardlink.component.html',
  styleUrls: ['./cardlink.component.scss']
})
export class CardlinkComponent implements OnInit {
@Input()title: string;
@Input()text: string;
@Input()link: string;
@Input()image: string;
@Input()alt: string;
  constructor() { }

  ngOnInit(): void {
  }

}
