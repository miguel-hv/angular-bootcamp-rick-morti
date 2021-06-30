import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-observables-page',
  templateUrl: './observables-page.component.html',
  styleUrls: ['./observables-page.component.scss']
})
export class ObservablesPageComponent implements OnInit {

  counterSubject = new ReplaySubject(1);
  counter;

  constructor() { }

  ngOnInit(): void {
    // this.counterSubject.subscribe(newCounter => {
    //   console.log(counter);
    //   this.counter = newCounter;
    // })
  }

  // plus() {
  //   this.counterSubject.next(this.counter + 1);
  // }

}
