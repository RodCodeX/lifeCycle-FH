import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input() price: number = 0;

  public interval$?:Subscription;  //?Signo de dolar para referenciar que es un observable

  ngOnInit(): void {
    console.log('Componente HIJO : ngOnInit');

   this.interval$ = interval(1000).subscribe(value => console.log('Tick'+ value));

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('Componente HIJO : ngOnChanges');
  }
  ngOnDestroy(): void {
    console.log('Componente HIJO : ngOnDestroy');
    this.interval$?.unsubscribe();
  }

  // ? NOTA
  // ? Valores del ngOnChange
  
  //   currentValue: 11  | El nuevo valor
  // ​​​
  // firstChange: false  | boolean ; Es el primer cambio
  // ​​​
  // previousValue: 10   | El anterior valor
}
