import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  toastr: any;

  constructor(public service: EmployeeService, private toaster: ToastrService){}

  ngOnInit(): void {
    this.service.fetchEmployeeList()
  }

  populateForm(selectedRecord:Employee){

    this.service.employeeForm.setValue({
       _id : selectedRecord._id,
       fullName : selectedRecord.fullName,
       position : selectedRecord.position,
       location: selectedRecord.location,
       salary : selectedRecord.salary
    })
  }

  onDelete(_id:string){
    if(confirm('Are you want to delete the Record')){
      this.service.deletetEmployee(_id).subscribe(res =>{
        this.service.fetchEmployeeList();
        this.toastr.error('Delete Successfully','Employee Register')
      })
    }

  }

}
