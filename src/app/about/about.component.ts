import { Component, OnInit } from '@angular/core';

//selector is how one nests components, e.g. <app-about> </app-about>
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
