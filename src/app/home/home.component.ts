import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CvComponent } from '../cv/cv.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(CvComponent) cv: CvComponent;

  constructor() { }

  downloadCV() {
    console.log('CV downloaded');
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
  }

}
