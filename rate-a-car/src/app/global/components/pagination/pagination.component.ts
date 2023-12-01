import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStringPipe } from 'src/app/core/pipes';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, EmptyStringPipe],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
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

    if (val) {
      this.fullCountSignal.set(val);
      this.generatePages();
    }
  };
  @Input() pageSizes: number[] = [10, 20, 30];

  public readonly pages = signal<number[]>([]);
  public readonly pageSizeSignal = signal(20);
  public readonly fullCountSignal = signal(0);

  private generatePages(): void {
    const length = Math.round(this.fullCountSignal() / this.pageSizeSignal());
    this.pages.set(Array.from({ length: 4 }, (_, i) => i + 1));
  }
}
