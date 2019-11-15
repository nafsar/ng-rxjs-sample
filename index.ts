import { of, Observable } from "rxjs";


const myObservable = Observable.create(function(observer) {
  observer.next(0);
  observer.next(1);
  observer.next(2);
  setTimeout(() => {
    observer.next(3);
    observer.complete();
  }, 2000);
});

myObservable.subscribe({
  next: val => console.log("Value= " + val),
  error: err => console.log("Check for issues:" + err),
  complete: () => console.log("Completed")
});
