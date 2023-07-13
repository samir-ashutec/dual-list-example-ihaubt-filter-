import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  private sourceDevice: AssignedDeviceCode[] = [];
  private confirmedDevice: Array<any>;

  tab = 1;
  keepSorted = true;
  key: string;
  display: any;
  filter = true;
  source: AssignedDeviceCode[] = [];
  confirmed: UnAssignedDeviceCode[] = [];
  userAdd = '';
  disabled = false;
  sourceLeft = true;
  AssignDevice = [
    'CAN_LIST_USER',
    'CAN_VIEW_USER',
    'CAN_ADD_USER',
    'CAN_EDIT_USER',
    'CAN_LIST_INVITATION',
    'CAN_VIEW_INVITATION',
    'CAN_ADD_INVITATION',
    'CAN_EDIT_INVITATION',
    'CAN_LIST_EMPLOYEE',
    'CAN_VIEW_EMPLOYEE',
    'CAN_ADD_EMPLOYEE',
  ];
  UnassignDevice = [
    'CAN_DELETE_EMPLOYEE_CERTIFICATION_HISTORY',
    'CAN_EDIT_EMPLOYEE_CERTIFICATION_HISTORY',
    'CAN_LIST_EMPLOYEE_CERTIFICATION_HISTORY',
    'CAN_ADD_EMPLOYEE_CERTIFICATION_HISTORY',
    'CAN_EDIT_CANDIDATE_CERTIFICATION_HISTORY',
    'CAN_DELETE_CANDIDATE_CERTIFICATION_HISTORY',
    'CAN_LIST_CANDIDATE_CERTIFICATION_HISTORY',
    'CAN_ADD_CANDIDATE_CERTIFICATION_HISTORY',
  ];
  format: any = {
    add: 'Assign Privileges to addmin',
    remove: 'unassign Privileges to addmin',
    all: 'Select All',
    none: 'Unselect All',
    direction: 'left-to-right',
    draggable: true,
    locale: undefined,
  };

  ngOnInit(): void {
    this.doReset();
  }
  doReset() {
    this.sourceDevice = JSON.parse(JSON.stringify(this.AssignDevice));
    this.confirmedDevice = JSON.parse(JSON.stringify(this.UnassignDevice));
    console.log(this.confirmedDevice);
    this.populateList();
  }

  private populateList() {
    this.key = 'deviceCode';
    this.display = this.showLabel;
    this.keepSorted = true;
    this.source = [...this.sourceDevice, ...this.confirmedDevice];
    this.confirmed = this.confirmedDevice;
    console.log('source: ' + JSON.stringify(this.source));
    console.log('confirmed: ' + JSON.stringify(this.confirmed));
  }

  private showLabel(item: any) {
    return item;
  }
}

export class AssignedDeviceCode {
  public DeviceCode: number;
}
export class UnAssignedDeviceCode {
  public DeviceCode: number;
}
