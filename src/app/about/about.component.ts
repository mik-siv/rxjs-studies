import {Component, OnInit} from '@angular/core';
import {fromEvent, interval, noop, Observable, timer} from "rxjs";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    const http$ = new Observable(observer => {
      fetch('/api/courses')
        .then(res => res.json())
        .then(data => {
          observer.next(data)
          observer.complete()
        })
        .catch(error => {
          observer.error(error)
        })
    })

    http$.subscribe(
      courses => console.log(courses),
      noop,
      ()=>console.log('completed')
    )
  }

}
