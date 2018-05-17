import { Component, OnInit, Input } from '@angular/core';
import { TinworkCard } from 'src/app/models/tinwork-card'

@Component({
  selector: 'app-tinwork-card',
  templateUrl: './tinwork-card.component.html',
  styleUrls: ['./tinwork-card.component.css']
})
export class TinworkCardComponent implements OnInit {
  @Input() card: TinworkCard;

  constructor() { }

  ngOnInit() {
  }

}
