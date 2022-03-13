import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'ahr-router-loading-spinner',
  template: ` <ahr-loading-spinner *ngIf="loading"></ahr-loading-spinner> `,
})
export class RouterLoadingSpinnerComponent implements OnInit, OnDestroy {
  loading: boolean = false;

  sub = new Subscription();

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.sub.add(
      this._router.events
        .pipe(
          filter(
            (event) =>
              event instanceof ResolveStart || event instanceof ResolveEnd
          )
        )
        .subscribe((event) => {
          console.log('urra');
          if (event instanceof ResolveStart) {
            this.loading = true;
          } else if (event instanceof ResolveEnd) {
            this.loading = false;
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
