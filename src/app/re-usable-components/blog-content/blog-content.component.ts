import { Component, OnInit, Input } from '@angular/core';
import { BlogDetailsModel } from '../../models/blog-details.model';

//This is required
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {

  @Input("BlogDetails") blogDetails: BlogDetailsModel;
  constructor(private sanitizer:DomSanitizer) { }
  ngOnInit(): void {
  }

  transform(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.blogDetails.blogImage);
  }

}
