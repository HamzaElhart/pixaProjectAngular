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
  picturesDetails: any[] = []; 
  filteredPictures: any[] = []; 
  searchTerm: string = ''; 

  constructor(private pixaData: PixaDataService) {}

  ngOnInit(): void {
    this.pixaData.getData().subscribe((data: any) => {
      this.picturesDetails = data.hits; 
      this.filteredPictures = this.picturesDetails; 
    });
  }

  
  filterPictures(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredPictures = this.picturesDetails.filter(
      (picture) =>
        picture.user.toLowerCase().includes(term) || 
        picture.tags.toLowerCase().includes(term) 
    );
  }

}
