import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public employeeList =[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://167.71.80.155:3000/employees')
    .subscribe(resp =>{
      this.employeeList = resp['response']
    });
  }

}
