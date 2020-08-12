import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {

  constructor() { }
  content: any;
  ngOnInit(): void {
    this.content = "The font family of a text is set with the font-family property. The font-family property should hold several font names as a 'fallback' system. If the browser does not support the first font, it tries the next font, and so on. Start with the font you want, and end with a generic family, to let the browser pick a similar font in the generic family, if no other fonts are available."
  }

}
