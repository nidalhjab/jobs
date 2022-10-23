import { Component, OnInit } from '@angular/core';
import { Countries, Country } from '../mock-data/mock-countries';
import { Sectors } from '../mock-data/mock-sectors';
import { Post } from '../post/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.css'],
})
export class FilterSectionComponent implements OnInit {
  constructor(private postService: PostService) { }
  sectors: string[] = [];
  countries?: Country[];
  cities?: string[];
  selectedCountry?: string;
  selectedSector?: string;
  posts: Post[] = [];
  ngOnInit(): void {
    this.getSectors();
    this.getCountries();
    this.getAllPosts();
  }
  getAllPosts() {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  }
  getSectors() {
    this.sectors = Sectors;
  }
  getCountries() {
    this.countries = Countries;
  }
  getSelectedCountry($event: Event) {
    this.selectedCountry = ($event.target as HTMLInputElement).value;
    if (($event.target as HTMLInputElement).checked) {
      this.filterByCountry(this.selectedCountry);
      this.countries?.map((country) => {
        if (country.name.trim() === this.selectedCountry?.trim()) {
          this.cities = country.cities;
        }
      });
    } else {
      this.filterByCountry('')
    }
  }
  getSelectedCity($event: Event) {
    const selectedCity = ($event.target as HTMLInputElement).value;
    if (($event.target as HTMLInputElement).checked) {
      this.filterByCity(selectedCity);
    } else {
      this.postService.filterByCity('')
    }

  }
  getSelectedSector($event: Event) {
    this.selectedSector = ($event.target as HTMLInputElement).value;
    if (($event.target as HTMLInputElement).checked) {
      this.postService.filterBySector(this.selectedSector);
    } else {
      this.postService.filterBySector('');
    }
  }
  filterByCountry(country?: string) {
    this.postService.filterByCountry(country);
  }
  filterByCity(city?: string) {
    this.postService.filterByCity(city);
  }
}
