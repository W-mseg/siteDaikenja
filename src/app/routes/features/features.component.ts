import { Component, OnInit } from '@angular/core';
import {TextsforfractionService} from '../../services/textsforfraction.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  constructor(public informationText: TextsforfractionService) { }

  ngOnInit(): void {
  }

}
