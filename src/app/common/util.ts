import {Observable} from "rxjs";


export function createHttpObservable(url: string): Observable<any> {
  return new Observable(observer => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        observer.next(data)
        observer.complete()
      })
      .catch(error => {
        observer.error(error)
      })
  })
}
