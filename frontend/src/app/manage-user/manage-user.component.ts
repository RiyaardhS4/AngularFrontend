import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { Globals } from '../_models/globals';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import notify from 'devextreme/ui/notify';

import { first } from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'],
})
export class ManageUserComponent implements OnInit {
  [x: string]: any;

  popupVisible: boolean = false;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  user: any[];
  error: any;

  constructor(private dataService: DataService, private globals: Globals) {
  }
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.dataService.GetUsers().subscribe(data =>
      this.user = data
    );
  }

  btnAddClick() {
    this.clear();
    this.popupVisible = true;

  }

  clear() {
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.userName = "";
  }

  submit() {

    this.dataService.AddUser(this.firstName, this.lastName, this.email, this.userName).subscribe(data => {
      this.getUsers();
      this.globals.ToastSuccessMessage("Successfully added user");
      this.popupVisible = false;
    }, err => {
      this.popupVisible = false;
      this.getUsers();
      this.globals.ToastErrorMessage(err.error.errorMessage);
    });
  
  }

  updateUser(e) {
    this.clear();
    this.setUpdateFields(e);
    this.dataService.UpdateUser(e.oldData.id,this.firstName,this.lastName,this.email,this.userName).subscribe(data => {
      this.globals.ToastSuccessMessage("Successfully updated user");
      this.getUsers();
    }, err => {
      this.getUsers();
      this.globals.ToastErrorMessage(err.error.errorMessage);
    });
  }

  setUpdateFields(e) {

    var valid = true; 
    if (e.newData.firstName == "" || e.newData.firstName == undefined ) {
      this.firstName = e.oldData.firstName;
    } else {
      this.firstName = e.newData.firstName;
    }
    if (e.newData.lastName == "" || e.newData.lastName == undefined) {
      this.lastName = e.oldData.lastName;
    } else {
      this.lastName = e.newData.lastName;
    }
    if (e.newData.email == "" || e.newData.email == undefined) {
      this.email = e.oldData.email;
    } else {
      this.email = e.newData.email;
    }
    if (e.newData.userName == "" || e.newData.userName == undefined) {
      this.userName = e.oldData.userName;
    } else {
      this.userName = e.newData.userName;
    }
  }
}
