import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';
import {AsyncSubject, BehaviorSubject, interval, Observable, ReplaySubject, Subject} from "rxjs";


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ngOnInit() {
    //Subject is an rxjs entity that can act as observable and observer at the same time When an observer subscribes to a Subject, it will only get notified of events (values being emitted) that happen after the point of subscription. If a value was emitted before the observer subscribes to the Subject, that value would not be received by the observer.
    // const subject = new Subject()
    // When a subscriber subscribes to a BehaviorSubject, it starts getting items from the point at which it subscribed, but also gets the last item that was emitted prior to the subscription. can be mimicked by new Observable().pipe(shareReplay());
    // const subject = new BehaviorSubject(0)
    // An AsyncSubject only emits the last value and only after the completion of the Observable. can be mimicked by new Observable().pipe(last(), share());
    // const subject = new AsyncSubject()
    // ReplaySubject will emit all the values to all the subscribers, even late ones
    const subject = new ReplaySubject()

    const series$ = subject.asObservable()

    series$.subscribe(val => console.log('early ', val))

    subject.next(1)
    subject.next(2)
    subject.next(3)

  }


}






