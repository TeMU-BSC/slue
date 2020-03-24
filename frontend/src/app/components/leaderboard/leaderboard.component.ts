import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  dataFromFile: any[];
  selectedFile: File;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  /**
   * Set the content of the uploaded file to the 'data' property.
   * @param event JSON file upload
   */
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, 'UTF-8');
    fileReader.onloadend = () => this.dataFromFile = JSON.parse(fileReader.result as string);
    fileReader.onerror = error => console.error(error);
  }

  processData() {
    this.api.getDataFromBackend(this.dataFromFile).subscribe(result => alert(JSON.stringify(result)));
  }

}
