import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-college-details',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './college-details.component.html',
  styleUrl: './college-details.component.css'
})
export class CollegeDetailsComponent implements OnInit {
  collegeData: any;
  imageUrl: string = 'http://tetervak.dev.fast.sheridanc.on.ca/exams/angular/images/sheridan_davis.jpg';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const dataUrl = 'http://tetervak.dev.fast.sheridanc.on.ca/exams/angular/data/sheridan_college.json';
    this.http.get(dataUrl).subscribe(data => {
      this.collegeData = data;
    });
  }
}
