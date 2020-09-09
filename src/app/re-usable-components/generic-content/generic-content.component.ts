import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'generic-content',
  templateUrl: './generic-content.component.html',
  styleUrls: ['./generic-content.component.css']
})
export class GenericContentComponent implements OnInit {
  @Input("BodyContent") bodyContent :string;
  @Input("Title") title : string;
  @Input("Introduction") introduction :string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
