import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;
  height: number = 0;
  miles: number = 0;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  }

  onMilesChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = parseFloat(target.value);

    this.miles = value;
  }

  onNameChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.name = value;
  }

  onDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.date = value;
  }

  onAmountChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = parseFloat(target.value);

    this.amount = value;
  }

  onHeightChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = parseFloat(target.value);

    this.height = value;
  }
}
