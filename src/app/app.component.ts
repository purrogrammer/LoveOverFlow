import { Component } from '@angular/core';
import { Question } from './models/question.model.ts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stack-clone';
}

export class Question {
  public new: boolean = false;
  constructor(public description: string) { }
}

