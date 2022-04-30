import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'i[icon]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./material-symbols.component.scss']
})
export class MaterialSymbolsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
