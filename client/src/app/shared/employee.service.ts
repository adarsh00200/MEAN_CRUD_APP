import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private fb:FormBuilder,private http:HttpClient) { }

  readonly baseURL='http://localhost:4000/api/employees/';

  list:Employee[] = [];

  employeeForm = this.fb.group({
    _id:[''],
    fullName: [''],
    position: [''],
    location: [''],
    salary: [''] 
  })
  
  fetchEmployeeList(){
    this.http.get(this.baseURL)
    .subscribe(data =>{
      this.list = data as Employee[];
      console.log(data);
      
    })
  }

  postEmployee(){
    return this.http.post(this.baseURL,this.employeeForm.value)
  }

  putEmployee(){
    return this.http.put(this.baseURL+this.employeeForm.get('_id')?.value,this.employeeForm.value)
  }

  deletetEmployee(_id:string){
    return this.http.delete(this.baseURL+ _id)
  }
  


}
