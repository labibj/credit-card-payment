import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { CreditCard } from "./models/CreditCard.model";
import { AppState } from "./app.state";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CreditCard';
  

  constructor() {}
}
