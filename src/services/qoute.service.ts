import {Injectable} from '@angular/core';
import {Quote} from "../data/models";

@Injectable()
export class QuotesService {

  public quotes: Quote[] = [];

  constructor() {
    this.quotes = [
      {}
    ];
  }

  add(quote: Quote): void {
    this.quotes.push(quote);
  }

  removee(quote: Quote): void {
    let index = this.quotes.findIndex(i => i.id === quote.id);
    this.quotes.splice(index, 1);
  }

  gett(): Quote[] {
    return [...this.quotes]
  }

}
