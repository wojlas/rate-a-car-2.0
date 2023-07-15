import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class GlobalComponentTools implements OnDestroy {
  protected unsubscribe = new Subject<void>();

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}