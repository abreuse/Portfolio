import { Component, OnInit } from '@angular/core';
import {ToasterService, ToastNotificationConfiguration, ToastType} from 'ngx-toaster/src/lib';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  mail: string = 'alexis.breuse@gmail.com';

  constructor(private toasterService: ToasterService) { }

  ngOnInit() {
  }

  copySuccess() {

    let toastNotificationConfiguration: ToastNotificationConfiguration = {
      message: 'Email address copied to clipboard !',
      displayDuration: 2000,
      autoHide: true,
      showCloseButton: true,
      toastType: ToastType.INFORMATION
    };

    this.toasterService.showToastMessage(toastNotificationConfiguration);
  }
}
