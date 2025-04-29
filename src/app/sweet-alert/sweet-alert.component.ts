import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.css']
})
export class SweetAlertComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

  success() {
    this.alertService.success('Success Msg!', 'Success Title');
  }

  error() {
    this.alertService.error('Error Msg!', 'Error Title');
  }

  info() {
    this.alertService.info('Info Msg!', 'Info Title');
  }

  warning() {
    this.alertService.warning('Warning Msg!', 'Warning Title');
  }

  confirm() {
    this.alertService.confirm('Confirm Msg!', 'Confirm Title').then((result) => {
      if (result.isConfirmed) {
        this.alertService.success('Chosen yes!');
      } else {
        this.alertService.success('Chosen no!');
      }
    });
  }

}
