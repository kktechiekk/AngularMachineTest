import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-http-request-handling',
  templateUrl: './http-request-handling.component.html',
  styleUrls: ['./http-request-handling.component.css'],
})
export class HttpRequestHandlingComponent implements OnInit, OnDestroy {
  releaseSubscription: any;
  charactersUrlArr: any = [];
  constructor(private httpservice: HttpService) {}

  ngOnDestroy(): void {
    if (this.releaseSubscription) {
      this.releaseSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.fetchAllEpisodes();
  }

  fetchAllEpisodes() {
    this.releaseSubscription = this.httpservice.getAllEpisodes().subscribe(
      (episodes) => {
        if (episodes) {
          let updatedObj: any = Object.assign({}, episodes);
          updatedObj.results.forEach((element: any) => {
            this.replaceCharUrlWithCharObj(element);
          });
          console.log(
            'final array with episodes and character json array is',
            updatedObj
          );
        }
      },
      (error) => {
        console.log('episodes error handling here');
      }
    );
  }

  replaceCharUrlWithCharObj(element: any) {
    element.characters.forEach((innerelement: any, innerindex: any) => {
      this.httpservice
        .getCharacterObj(innerelement)
        .subscribe((characterResponseObj) => {
          element.characters[innerindex] = characterResponseObj;
        });
    });
  }
}
