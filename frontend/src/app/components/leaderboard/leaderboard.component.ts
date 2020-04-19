import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { Leaderboard } from 'src/app/models/leaderboard';
import * as peopleData from 'src/assets/people.json';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  people: Person[] = (peopleData as any).default;
  leaderboard: Leaderboard[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getLeaderboard().subscribe(data => {
      this.leaderboard = data;
      this.leaderboard.sort((a, b) => Number(b.score) - Number(a.score));
      this.leaderboard.forEach((participant, index) => participant.rank = index + 1);
    });
  }

}
