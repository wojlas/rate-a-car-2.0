import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITableHeader } from '../../core/interfaces';
import { EmptyDashPipe, SortByPipe } from 'src/app/core/pipes';

@Component({
  selector: 'app-customizable-table',
  standalone: true,
  imports: [CommonModule, SortByPipe, EmptyDashPipe],
  templateUrl: './customizable-table.component.html',
  styleUrls: ['./customizable-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomizableTableComponent {
  @Input() set tableHeader(val: ITableHeader<any>[]) {
    if (val) {
      this._tableHeader = val;
    }
  }

  @Input() set tableBodyList(val: any[]) {
    if (val) {
      this._tableBodyList = val;
    }
  }

  private _tableHeader!: ITableHeader<any>[];
  private _tableBodyList!: any[];

  public get tableHeader(): ITableHeader<any>[] {
    return this._tableHeader;
  }

  public get tableBodyList(): any[] {
    return this._tableBodyList;
  }
}
