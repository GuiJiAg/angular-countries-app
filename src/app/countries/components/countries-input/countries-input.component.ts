import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Constants } from '../../../utils/constants';

@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html',
  styleUrls: ['./countries-input.component.css']
})
export class CountriesInputComponent implements OnInit {
  public searchInput: string = Constants.EMPTY;
  @Input() placeHolder: string = Constants.EMPTY;
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  public debouncer: Subject<string> = new Subject()

  constructor() { }

  ngOnInit(): void {
    this.debouncer //"pipe()" se encarga de ejecutar funcionalidades antes de ejecutar el "suscribe()"
      .pipe(
        debounceTime(Constants.DEBOUNCE_MILISECONDS) //"debounceTime()" detiene la funcionalidad hasta pasado unos milisegundos. En este caso, esperará 300 milisegundos antes de ejecutar el "suscribe()"
      )
      .subscribe(value => {
        this.onDebounce.emit(value);
    })
  }

  searchCountries(): void {
    this.onEnter.emit(this.searchInput);
  }

  keyPressed(event: any): void {
    this.debouncer.next(this.searchInput);
  }
}
