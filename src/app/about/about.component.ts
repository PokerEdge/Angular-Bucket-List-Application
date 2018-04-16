import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

//selector is how one nests components, e.g. <app-about> </app-about>
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
