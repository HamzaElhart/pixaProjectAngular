import { CommonModule } from '@angular/common';
import { PixaDataService } from './../../../services/pixa-data.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  mediaDetails: any[] = []; 
  filteredMedia: any[] = []; 
  userInput: string = ''; 

  constructor(private pixaData: PixaDataService) {}

  ngOnInit(): void {
    this.fetchInitialData(); 
  }

  fetchInitialData(): void {
    this.pixaData.fetchData().subscribe((data: any) => {
      this.mediaDetails = data.hits; 
      this.filteredMedia = this.mediaDetails; 
      this.pixaData.updateCache(this.mediaDetails); 
    });
  }

  searchMedia(): void {
    const term = this.userInput.toLowerCase();

    
    const cachedData = this.pixaData.getCachedData();
    const filtered = cachedData.filter((media) => {
      return (
        media.user.toLowerCase().includes(term) || 
        media.tags.toLowerCase().includes(term) 
      );
    });

    if (filtered.length > 0) {
      this.filteredMedia = filtered; 
    } else {
      
      this.pixaData.fetchData(term).subscribe((data: any) => {
        this.mediaDetails = data.hits; 
        this.filteredMedia = this.mediaDetails; 
        this.pixaData.updateCache([
          ...cachedData,
          ...this.mediaDetails, 
        ]);
      });
    }
  }
}
