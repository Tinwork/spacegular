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
          label: this.formatKeyToLabelStandard(option),
          key: option,
          type: "select",
          value: [
            { key: 1, value: 'Yes'}, 
            { key: 0, value: 'No'}
          ]   
        });

        continue;
      }
      if (this.INPUT_TYPE_DATE.indexOf(option) !== -1) {
        this.inputs.push({
          label: this.formatKeyToLabelStandard(option),
          key: option,
          type: "date",
          value: this.now 
        });

        continue;
      }

      this.inputs.push({
        label: this.formatKeyToLabelStandard(option),
        key: option,
        type: "text",
        value: null   
      });
    }
  }

  observeFilteringAction() {
    
  }

  private formatKeyToLabelStandard(key: String) : String {
    let result = '', strArr = key.split('_');
    for (let word in strArr) {
      result = result + this.toCamelCase(strArr[word]) + ' '
    }

    return result;
  }

  private toCamelCase(str: String) : String {
    return str
        .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')
        .replace(/^(.)/, function($1) { return $1.toUpperCase(); });
  }
}
