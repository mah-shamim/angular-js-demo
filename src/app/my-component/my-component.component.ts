import { Component } from '@angular/core';
import { LipsumService } from 'ngx-lipsum';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  template: '<span>{{ lipsumText }}</span>',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  public text: string;

  public lipsumService: LipsumService;

  constructor(lipsum: LipsumService) {
    this.lipsumService = lipsum;
    this.text = "";
  }

  generateText(count: any, prompt:any) {
    this.text = this.lipsumService.get({
      count: parseInt(count),
      units: 'sentence'
    });
  }
}
