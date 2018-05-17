import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../../core/services/store.service';

@Component({
  selector: 'app-tinwork-card-action',
  templateUrl: './tinwork-card-action.component.html',
  styleUrls: ['./tinwork-card-action.component.css']
})
export class TinworkCardActionComponent implements OnInit {

  @Input()
  public actionType: String;

  @Input()
  public actions: Array<Object>

  constructor(
    private storeService: StoreService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  handleClick(action: any) {
    if (this.actionType === 'link') {
      this.router.navigate([`/${action.baseUrl}/${action.id}`]);
    }

    this.storeService.setStore(action.data);
  }
}
