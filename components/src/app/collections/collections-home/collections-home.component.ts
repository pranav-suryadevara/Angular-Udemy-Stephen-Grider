import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    {name: 'James', age: 24, job: 'Designer'},
    {name: 'Pranav', age: 22, job: 'Engineer'},
    {name: 'Michael', age: 26, job: 'Engineer'}
  ];

  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
