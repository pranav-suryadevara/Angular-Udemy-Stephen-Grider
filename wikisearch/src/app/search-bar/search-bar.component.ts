import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() submitted = new EventEmitter<string>();

  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.term = target.value;
  }

  onFormSubmit(event: any){
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
