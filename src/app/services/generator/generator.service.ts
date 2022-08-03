import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  public generate(count: number): Observable<number> {
    return new Observable((observer: Observer<number>) => {
      const timerId = setInterval(() => {
        try {
          if (count > 0) {
            const num = Math.floor(Math.random() * 100);
            observer.next(num); // report success // if its observer.error then report error
            count--;
          } else {
            clearInterval(timerId);
            observer.complete();
          }
        } catch (err: any) {
          observer.error(err); // Kill observable
        }
      }, 500);
    });
  }
}
