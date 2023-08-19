import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { TableExampleComponent } from './table-example.component';

export interface Pagination {
  currentPage: number;
  totalPages: number;
  pagesToShow: number;
}

@NgModule({
  declarations: [TableExampleComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [TableExampleComponent],
})
export class TableExampleModule {}
