import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css'],
})
export class AdderComponent implements OnInit {
  @Input() n1: string;
  @Input() n2: string;

  constructor() {}

  ngOnInit() {}

  getSum() {
    return Number(this.n1) + Number(this.n2);
  }
}
