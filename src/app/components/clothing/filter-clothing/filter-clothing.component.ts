import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-filter-clothing',
  templateUrl: './filter-clothing.component.html',
  styleUrls: ['./filter-clothing.component.css']
})
export class FilterClothingComponent implements OnInit {

  literals: any = {};

  @Output() form = new EventEmitter<NgForm>();

  constructor(private _commonService: CommonService) {}

  ngOnInit(): void {
    this.literals = this._commonService.getLiterals();
  }

  toggleFilter() {
    let filter = document.getElementById('filter') as HTMLElement;
    filter.classList.toggle('hidden');

    let crossFilter = document.getElementById('cross-filter') as HTMLElement;
    crossFilter.classList.toggle('hidden');
  }

  filter(f: NgForm) {
    this.toggleFilter();
    this.form.emit(f);
  }
}
