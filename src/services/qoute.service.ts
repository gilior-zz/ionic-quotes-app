import {Injectable} from '@angular/core';
import {Quote} from "../data/models";

@Injectable()
export class QuotesService {

  public quotes: Quote[] = [];

  constructor() {
    this.quotes = [
      {
        id: '1',
        person: 'Theodore Roosevelt',
        text: 'Believe you can and you\'re halfway there'
      },
      {
        id: '2',
        person: 'Norman Vincent Peale',
        text: 'Change your thoughts and you change your world.'
      },
      {
        id: '3',
        person: 'Robert H. Schuller',
        text: 'What great thing would you attempt if you knew you could not fail?'
      }
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
    const c = [...this.quotes];
    return c;
  }

  isBelong(quote: Quote) {
    let index = this.quotes.findIndex(i => i.id === quote.id);
    return index != -1;
  }

}
