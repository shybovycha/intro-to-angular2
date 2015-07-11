/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, formDirectives} from 'angular2/angular2';

@Component({
  selector: 'tweet-box'
})
@View({
  directives: [formDirectives],
  templateUrl: 'src/tweet-box.html'
})
class TweetBox {
  text: string;
  maxLength: integer;

  constructor() {
    this.maxLength = 140;
    this.text = '';
  }
}

bootstrap(TweetBox);
