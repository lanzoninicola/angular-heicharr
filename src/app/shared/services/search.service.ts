import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchFormControl: AbstractControl;
  fullDataset$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  dataSetFiltered$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() {}

  setupControl(formControl: AbstractControl) {
    this.searchFormControl = formControl;
  }

  setupData(dataSet: BehaviorSubject<any[]>) {
    this.fullDataset$ = dataSet;
    return this.dataSetFiltered$;
  }

  addListener() {
    if (this.searchFormControl === undefined) {
      throw 'SearchService: the formControl is undefined. \n\nMaybe you forgot to provide the FormControl instance through the .setupControl() method before performing a search with the .filter() method';
    }

    combineLatest([
      this.fullDataset$,
      this.searchFormControl?.valueChanges,
    ]).subscribe(([dataSetRecords, searchTerm]) => {
      const dataSetArray = Object.values(dataSetRecords);
      let filteredRecords: any[];

      if (!searchTerm) {
        filteredRecords = dataSetArray;
        return;
      }

      const filteredResults = dataSetArray.filter(
        (item: { [key: string]: any }) => {
          return Object.values(item).reduce((prev, curr) => {
            if (typeof curr === 'string') {
              return (
                prev ||
                curr.toString().toLowerCase().includes(searchTerm.toLowerCase())
              );
            }
          }, false);
        }
      );
      filteredRecords = filteredResults;

      this.dataSetFiltered$.next(filteredRecords);
    });
  }
}