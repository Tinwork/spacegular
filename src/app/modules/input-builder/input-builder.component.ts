import { Component, OnInit, Input, Inject, Directive } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { CDK_DESCRIBEDBY_HOST_ATTRIBUTE } from '@angular/cdk/a11y';

@Component({
  selector: 'app-input-builder',
  templateUrl: './input-builder.component.html',
  styleUrls: ['./input-builder.component.css']
})

export class InputBuilderComponent {
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
    'status',
    'land_success'
];

private INPUT_TYPE_SELECT = [
];

private INPUT_TYPE_DATE = [
    'launch_year',
    'launch_date_local',
    'launch_date_utc'
];

  constructor(
    public dialogRef: MatDialogRef<InputBuilderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.buildInput();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }  

  buildInput() {
    let options = this.data['option'][0];
    for (let option in options) {
      if (option === 'query_type') {
        this.inputs.push({
          label: this.formatKeyToLabelStandard('query_type'),
          key: 'query_type',
          type: "select",
          value: [ 
            { key: 'all', value: 'All'},
            { key: 'entity', value: 'Entity Detail'}, 
            { key: 'upcoming', value: 'Upcoming'},
            { key: 'latest', value: 'Latest'}, 
          ]   
        }); 
        continue;
      } 
      if (option === 'query_filter_status') { 
        this.inputs.push({
          label: this.formatKeyToLabelStandard('query_filter_status'),
          key: 'query_filter_status',
          type: "select",
          value: [ 
            { key: 1, value: 'Yes'},
            { key: 0, value: 'No'},
          ]   
        });
        continue;
      } 
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
  