import { Component } from '@angular/core';

//Where the template file resides and the styling format (scss)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//Where logic resides for Angular5 app
export class AppComponent {
  title = 'app';
}
