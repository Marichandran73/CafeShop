import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmitService } from './emit.service';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {

  data: any;

  constructor(private emitService: EmitService) {}

  ngOnInit() {
  this.emitService.currentData.subscribe(res => {
    if(res) {
      this.data = res;
    }
  });
}
}
