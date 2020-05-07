import { Observable, Subscriber, PartialObserver, from, fromEvent, of } from 'rxjs';
import { map, switchAll, concatAll, mergeAll, delay, switchMap } from 'rxjs/operators'

let btn = document.getElementById("btn");

// Creating an observable using the constructor

// let numObservable = new Observable<number>(observer => {
//     let intervalId = setInterval(() => observer.next(1), 1000);
// });

// let observer = {
//     next: (value: number) => console.log(value),
//     error: (err: Error) => console.log(err),
//     complete: () => console.log("complete")
// }

// let observer2 = {
//     next: (value: number) => console.log(value * 2),
//     error: (err: Error) => console.log(err),
//     complete: () => console.log("complete")
// }

// let subscription1 = observable.subscribe(observer);
// let subscription2 = observable.subscribe(observer2);

// setTimeout(() => subscription1.unsubscribe(), 3000);

// Creating an observable using creation operators

// let obs = from([1, 2, 3]);
// obs.subscribe(observer);

// let eventObs = fromEvent(btn, "click");

// let subscription =  eventObs.subscribe({
//     next: (e: Event) => console.log(e)
// });

// let subscription2 = eventObs.subscribe({
//     next: (e: Event) => null
// })

// Creating an observable using pipable operators

// let obs = from([1, 2, 3]).pipe(delay(1000), map(n => n*n));
// console.log("before")
// obs.subscribe(n => console.log(n));
// console.log("after")

// Flattening an observable of observables

// let complexObs = new Observable<Observable<number>>(observer => {
//     observer.next(numObservable);
//     observer.next(numObservable)
//     observer.next(numObservable)
//     observer.next(numObservable)
//     observer.next(numObservable);
// });

// complexObs.subscribe({ 
//     next: (n: Observable<number>) => n.subscribe({next: n => console.log(n)}) 
// });

// let modifiedComplexObs = complexObs.pipe();

// modifiedComplexObs.subscribe({
//     next: (n: number) => console.log(n) 
// })
