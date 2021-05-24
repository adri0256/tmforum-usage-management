import { UsageComponent } from './../usage/usage.component';
import { Observable, throwError } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usage } from 'src/app/shared/models/usage.model';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-usage',
  templateUrl: './list-usage.component.html',
  styleUrls: ['./list-usage.component.scss']
})

export class ListUsageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'href', 'description', 'status', 'usageDate', 'usageType', 'actions' ];
  list$: Observable<Usage[]> | null = null;

  @Output() editItemEvent = new EventEmitter<string>();

  errorObject = null;

  constructor(private service: FbBaseService<Usage>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.errorObject = null;
    this.list$ = this.service.get('usage').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  log(item: any): void {
    console.log(item);
  }

  edit(item: Usage): void{
    const dialogRef = this.dialog.open(UsageComponent, {
      data: {editItem: item}
    });

    dialogRef.afterClosed().subscribe((usage: Usage) => {
      if (usage?.description){
        console.log(usage);
      }
    }, err => {
      console.warn(err);
    });
  }

  delete(itemId: string): void {
    if (confirm('Are you sure to delete ' + itemId)) {
      this.service.delete('usage', itemId);
    }
  }

}
