import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { Posts } from '../posts';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  exps: string[];
  //posts: Posts[];
  posts: Observable<Posts[]>;

  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.exps = this.cvService.getExps();
    //this.cvService.getPosts().subscribe(posts => this.posts = posts);
    this.posts = this.cvService.getPosts();
  }

  checkIfPostsLoaded() {
    console.log(this.posts);
  }

}
