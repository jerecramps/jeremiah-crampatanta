import { Injectable } from '@angular/core';
import { ApiCallsService } from './api-calls/api-calls.service';
import { BlogDetailsModel } from '../models/blog-details.model';
import { BlogsMapper } from '../models/blog-details.mapper';
import { Observable, Subject, of, observable } from 'rxjs';
import { catchError, map, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public apiService: ApiCallsService) { }
  blogList: BlogDetailsModel[] = [];
  subject: Subject<{isCompleted : boolean ,result: any, resultCount : 0}>;
  
  blogSubject:Subject<{isCompleted : boolean ,result: any, resultCount : 0}> = new Subject();
  blogObservable$ = this.blogSubject.asObservable();
  getBlogs(): Observable<BlogDetailsModel[]> 
  {
    return this.apiService.getBlogs().pipe(
      catchError(err => of(err)),
      map(response => {
        //this.blogSubject.next({isCompleted : true ,result: response, resultCount : response.length});
        //this.blogList = new BlogsMapper().map(response).values;
        let res = new BlogsMapper().map(response).values;
        this.blogSubject.next({isCompleted : true ,result: res, resultCount : res.length});
        this.blogList = res;
        // this.blogSubject.next({isCompleted : true ,result: res, resultCount : response.length});
        return res;
      })
    );
  }
 
}
