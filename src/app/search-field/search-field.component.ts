import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {
  @Output() valueAction = new EventEmitter<string>();
  value = '';

  constructor() { }

  ngOnInit(): void {
  }

  change(value) {
    this.valueAction.emit(value.toLowerCase());
  }
}
