import {Observable} from "rxjs";

export function createHttpObservable(url: string): Observable<any> {
  return new Observable(observer => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(url, {signal})
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          observer.error('Response failed with status code: ' + res.status)
        }
      })
      .then(data => {
        observer.next(data)
        observer.complete()
      })
      .catch(error => {
        observer.error(error)
      })
    return () => controller.abort()
  })
}
