import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

interface TableItem {
  id: number;
  name: string;
  age: number;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  pagesToShow: number;
}

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.css'],
})
export class TableExampleComponent {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  dataSource: TableItem[] = [];
  displayedColumns: string[] = ['id', 'name', 'age'];
  itemTable: TableItem[] = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Michael Johnson', age: 40 },
    { id: 4, name: 'Emily Brown', age: 28 },
    { id: 5, name: 'David Davis', age: 35 },
    { id: 6, name: 'Alice Johnson', age: 29 },
    { id: 7, name: 'Bob Smith', age: 32 },
    { id: 8, name: 'Eva Brown', age: 41 },
    { id: 9, name: 'Frank Miller', age: 23 },
    { id: 10, name: 'Grace Wilson', age: 37 },
    { id: 11, name: 'Henry Davis', age: 45 },
    { id: 12, name: 'Isabella Taylor', age: 27 },
    { id: 13, name: 'Jack Anderson', age: 33 },
    { id: 14, name: 'Kate White', age: 22 },
    { id: 15, name: 'Liam Harris', age: 39 },
    { id: 16, name: 'Mia Jackson', age: 31 },
    { id: 17, name: 'Noah Martinez', age: 34 },
    { id: 18, name: 'Olivia Lee', age: 26 },
    { id: 19, name: 'Patrick Thompson', age: 36 },
    { id: 20, name: 'Quinn Adams', age: 28 },
  ];

  pagination = {
    currentPage: 1,
    itemsPerPage: 2, // Item por página
    totalPages: 10, // Total das páginas deve ser calculado total de itens / por items por página
    pagesToShow: 5, // Controla quandos botões mostrar na paginação
  };

  visiblePages: (number | '...')[] = [];

  ngOnInit() {
    this.calculateVisiblePages();
    this.updateDataSource();
  }

  goToPage(page: number): void {
    this.pagination.currentPage = page;
    this.calculateVisiblePages();
    this.updateDataSource();
    // You can also adjust your data source here based on the current page
  }

  updateDataSource(): void {
    const startIndex =
      (this.pagination.currentPage - 1) * this.pagination.itemsPerPage;
    const endIndex = startIndex + this.pagination.itemsPerPage;
    this.dataSource = this.itemTable.slice(startIndex, endIndex);
  }

  calculateVisiblePages(): void {
    const halfRange = Math.floor(this.pagination.pagesToShow / 2);
    const startPage = Math.max(this.pagination.currentPage - halfRange, 1);
    const endPage = Math.min(
      this.pagination.currentPage + halfRange,
      this.pagination.totalPages
    );

    this.visiblePages = [];
    for (let i = startPage; i <= endPage; i++) {
      this.visiblePages.push(i);
    }

    if (startPage > 1) {
      this.visiblePages.unshift('...');
    }

    if (endPage < this.pagination.totalPages) {
      this.visiblePages.push('...');
    }
  }
}
