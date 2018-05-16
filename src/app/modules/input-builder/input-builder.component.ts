import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-builder',
  templateUrl: './input-builder.component.html',
  styleUrls: ['./input-builder.component.css']
})

export class InputBuilderComponent implements OnInit {
  @Input() option: Object;
  inputs = [];
  now = new Date();

  private INPUT_TYPE_BOOLEAN = [
      'core_reuse',
      'side_core1_reuse',
      'side_core2_reuse',
      'fairings_reuse',
      'capsule_reuse',
      'launch_success',
      'reused',
      'land_success'
  ];

  private INPUT_TYPE_SELECT = [
  ];

  private INPUT_TYPE_DATE = [
      'launch_year',
      'launch_date_local',
      'launch_date_utc'
  ];
  
  constructor() { }

  ngOnInit() {
    this.buildInput();
  }

  buildInput() {
    let options = this.option;
    for (let option in options) {
      if (this.INPUT_TYPE_BOOLEAN.indexOf(option) !== -1) {
        this.inputs.push({
          key: option,
          type: "select",
          value: ['Yes', 'No']   
        });

        continue;
      }
      if (this.INPUT_TYPE_DATE.indexOf(option) !== -1) {
        this.inputs.push({
          key: option,
          type: "date",
          value: null   
        });

        continue;
      }

      this.inputs.push({
        key: option,
        type: "text",
        value: null   
      });
    }
  }

  observeFilteringAction() {
    
  }
}
