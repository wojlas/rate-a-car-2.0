import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStringPipe } from 'src/app/core/pipes';
import { LastElementPipe } from "../../../core/pipes/last-element.pipe";
import { IPaginationChanged } from '../../core/interfaces';

@Component({
    selector: 'app-pagination',
    standalone: true,
    templateUrl: './pagination.component.html',
    styleUrl: './pagination.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, EmptyStringPipe, LastElementPipe]
})
export class PaginationComponent {
  @Input() set pageSize(val: number) {

    if (val) {
      this.pageSizeSignal.set(val);
      this.generatePages();
    }
  };
  @Input() currentPage = 0;
  @Input() set fullAmountOfElements(val: number) {

    if (val >= 0) {
      this.fullCountSignal.set(val);
      this.generatePages();
    }
  };
  @Input() pageSizes: number[] = [10, 20, 30];

  @Output() paginationChanged = new EventEmitter<IPaginationChanged>();

  public readonly pages = signal<number[]>([]);
  public readonly pageSizeSignal = signal(20);
  public readonly fullCountSignal = signal(0);

  public setPageIndex(value: number): void {
    this.currentPage = value;
    this.emitChanges();
  }

  public setListSize(size: number) {
    if (size !== this.pageSizeSignal()) {
      this.pageSizeSignal.set(size);
      this.currentPage = 1;
      this.emitChanges();
    }
  }

  private generatePages(): void {
    const length = Math.ceil(this.fullCountSignal() / this.pageSizeSignal());
    
    this.pages.set(Array.from({ length }, (_, i) => i + 1));    
  }

  private emitChanges(): void {
    this.paginationChanged.emit({ pageNumber: this.currentPage, pageSize: this.pageSizeSignal() });
  }
}
