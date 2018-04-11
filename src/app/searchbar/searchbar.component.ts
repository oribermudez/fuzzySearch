import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  mySearch;
  searchChar;
  transactions = [
    { amount: 112.98, date: '27-01-2018T12:34', card_last_four: '2544' },
    { amount: 0.45, date: '01-12-2017T9:36', card_last_four: '4434' },
    { amount: 95.99, date: '23-11-2017T14:34', card_last_four: '3011' },
    { amount: 7774.32, date: '17-07-2017T03:34', card_last_four: '6051' },
    { amount: 1345.98, date: '22-06-2017T10:33', card_last_four: '0059' },
    { amount: 2850.70, date: '27-01-2018T12:34', card_last_four: '4444' },
    { amount: 45.00, date: '10-02-2018T02:34', card_last_four: '0110' },
    { amount: 1.00, date: '17-02-2018T18:34', card_last_four: '1669' },
    { amount: 4.69, date: '01-02-2018T02:34', card_last_four: '8488' },
    { amount: 1111.11, date: '15-01-2018T21:34', card_last_four: '9912' }
  ];
  originalTransactions = this.transactions;
  constructor() { }

  ngOnInit() {
    this.sortByDate();
  }

  sortByDate() {
    this.transactions.sort((a, b) => {
    let aDate: any = a.date.split(/\-|\s/);
    aDate[2] = aDate[2].split('T')[0];
    let bDate: any = b.date.split(/\-|\s/);
    bDate[2] = bDate[2].split('T')[0];
    aDate = new Date (Number(aDate[2]), Number(aDate[1]) - 1, Number(aDate[0]));
    bDate = new Date (Number(bDate[2]), Number(bDate[1]) - 1, Number(bDate[0]));
    return +bDate - +aDate;
    });
  }
}
