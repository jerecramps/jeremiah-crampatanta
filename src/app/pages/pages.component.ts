import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { BlogDetailsModel } from '../models/blog-details.model';
@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  blogList: BlogDetailsModel[];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(result => {
      this.blogList = result;
    });
  }

}
