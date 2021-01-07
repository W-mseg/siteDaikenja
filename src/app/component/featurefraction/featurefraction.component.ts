import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featurefraction',
  templateUrl: './featurefraction.component.html',
  styleUrls: ['./featurefraction.component.scss']
})
export class FeaturefractionComponent implements OnInit {
@Input()title: string;
@Input()text: string;
@Input()inverted: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
