import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmitService {
  private dataSource = new BehaviorSubject<any>(null);  
  currentData = this.dataSource.asObservable();

  constructor() {}

  dataResiver(data: any) {
    this.dataSource.next(data);
  }
}
