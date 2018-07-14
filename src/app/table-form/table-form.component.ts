import { Component, OnInit } from '@angular/core';

export interface books {
  Name: string;
  Price: number;
  Author: string;
  Pages: number;
}

const ELEMENT_DATA: books[] = [

  {"Name" : "C" , "Price" : 500 , "Author" : "Dennis Ritchie" , "Pages" : 1500 },
  {"Name" : "C++" , "Price" : 700 , "Author" : "Bjarne Stroustrup" , "Pages" : 1000 },
  {"Name" : "Java" , "Price" : 900 , "Author" : "James Gosling" , "Pages" : 2000 },
  {"Name" : "PHP" , "Price" : 200 , "Author" : "Rasmus Lerdorf" , "Pages" : 500 },
];

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['Name', 'Price', 'Author', 'Pages'];
  dataSource = ELEMENT_DATA;
  


   

}
