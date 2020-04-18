import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { Person } from 'src/app/models/person';
import { Leaderboard } from 'src/app/models/leaderboard';
import * as peopleData from 'src/assets/people.json';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  people: Person[] = (peopleData as any).default;
  leaderboard: Leaderboard[];

  constructor(private papa: Papa) { }

  ngOnInit(): void {
    this.papa.parse('assets/glue.tsv', {
      download: true,
      header: true,
      delimiter: '\t',
      skipEmptyLines: true,
      quoteChar: '',
      complete: results => this.leaderboard = results.data
    });
  }

}
