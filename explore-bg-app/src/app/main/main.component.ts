import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Landmark } from '../types/landmark';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
    landmarks: Landmark[] = []
    constructor(private api: ApiService) {}
    ngOnInit(): void {

        this.api.getLandmarks().subscribe((landmarks) => {
            console.log('Data:', landmarks);
            this.landmarks = landmarks
          });
    }
}
