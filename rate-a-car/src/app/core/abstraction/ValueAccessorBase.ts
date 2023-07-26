import { Injectable, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Injectable()
export abstract class ValueAccessorBase<T> implements OnDestroy {
  public value!: T;

  protected onChanged: Function = () => {};
  protected onTouched: Function = () => {};

  protected subs: Subscription[] = [];

  public writeValue(value: T): void {
    if (value) {
      this.value = value;
    }
  }

  public registerOnChange(fn: Function): void {
    this.onChanged = fn;
  }

  public registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  protected propagateChanges(val?: T): void {
    if (val) {
      this.value = val;
    }
    
    this.onChanged(this.value);
    this.onTouched(this.value);
  }

  public ngOnDestroy(): void {
    this.subs.forEach(sub$ => sub$.unsubscribe());  
  }
}