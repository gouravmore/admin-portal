import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActiveInactiveUserDialogComponent } from '../active-inactive-user-dialog/active-inactive-user-dialog.component';
import {MatDialog} from '@angular/material/dialog';

export interface UserData {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  organization: string;
  status: string;
}

const ELEMENT_DATA: UserData[] = [
  {organization: "Tekdi", firstName: "Nidhi", lastName: 'Kachhawa', phone: 9782677803, email: 'nidhi.k@tekditechnologies.com', status: "Active"},
  {organization: "Tekdi", firstName: "Nidhi", lastName: 'Kachhawa', phone: 9782677803, email: 'nidhi.k@tekditechnologies.com', status: "Active"},
  {organization: "Tekdi", firstName: "Nidhi", lastName: 'Kachhawa', phone: 9782677803, email: 'nidhi.k@tekditechnologies.com', status: "Inactive"},
  {organization: "Tekdi", firstName: "Nidhi", lastName: 'Kachhawa', phone: 9782677803, email: 'nidhi.k@tekditechnologies.com', status: "Active"},
  {organization: "Tekdi", firstName: "Nidhi", lastName: 'Kachhawa', phone: 9782677803, email: 'nidhi.k@tekditechnologies.com', status: "Inactive"},
];

@Component({
  selector: 'lib-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  displayedColumns: string[] = ['user-organization', 'user-firstName', 'user-lastName', 'user-phone', 'user-email', 'user-status', 'user-action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openActiveInactiveDialog() {
    this.dialog.open(ActiveInactiveUserDialogComponent, {
      width: '450px'
    })
  }

  ngOnInit(): void {
    
  }

}
