import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessorBase } from 'src/app/core/abstraction/ValueAccessorBase';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PaginationComponent),
    multi: true
  }],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent extends ValueAccessorBase<number> implements ControlValueAccessor, AfterViewInit {
  @Input() pageSize!: number;
  @Input() pageSizesList: number[] = [10, 20, 30];
  @Input() set fullResultCount(val: number) {
    if (val) {
      this._fullResultsCount = val;
    }
  }

  @Output() pageSizeListChange = new EventEmitter<number>();

  public pagesList: number[] = [];
  public currentIndex = 1;

  private _fullResultsCount!: number;

  public ngAfterViewInit(): void {
    if (this.pageSize && this._fullResultsCount) {
      this.generatePagesList();
    }
  }

  public get fullResultCount(): number {
    return this._fullResultsCount;
  }

  public changePageSizeChange(size: number): void {
    this.pageSizeListChange.emit(size);
  }

  public togglePage(index: number): void {
    this.propagateChanges(index);
    this.currentIndex = index;
  }

  public setLastPage(): void {
    this.togglePage(this.pagesList.lastElement());
  }

  private generatePagesList(): void {
    const pagesCount = this._fullResultsCount / this.pageSize;

    for (let i = 1; i <= Math.round(pagesCount); i++) {
      this.pagesList.push(i);
    }
  }
}
