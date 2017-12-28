import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Posts } from '../posts';
import { map, tap } from 'rxjs/operators';
import { filter } from 'rxjs/operators/filter';

const exps: string[] = ['Stime', 'Desjardins'];

@Injectable()
export class CvService {


  constructor( private http: HttpClient) { }

  getExps() {
    return exps;
  }

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map(posts => posts), //optional because we don't return an Observable
        filter((posts, n) => {
          console.log(n); //n est l'index ( = 0 idk why)
          return posts[n].id < 5;
        }),
        tap(_ => console.log('Fetched posts...'))
      );
  }
}
