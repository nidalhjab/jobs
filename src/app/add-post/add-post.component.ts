import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Post } from '../post/post';
import { ModalService } from '../services/modal.service';
import { Sectors } from '../mock-data/mock-sectors';
import { Countries, Country } from '../mock-data/mock-countries';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  sectors?: string[];
  countries?: Country[];
  cities?: string[];
  selectedCountry?: string;
  id?: number;
  newPostForm = this.newPostFormBuilder.group({
    jobTitle: ['', Validators.required],
    sector: ['', Validators.required],
    country: ['', Validators.required],
    city: ['', Validators.required],
    description: ['', Validators.required],
  });
  constructor(
    private newPostFormBuilder: FormBuilder,
    private postService: PostService,
    private modalService: ModalService
  ) { }
  ngOnInit(): void {
    this.getInitValues();
  }
  onSubmit() {
    this.postService.addNewPost(this.newPostForm.value);
    this.newPostForm.reset();
    this.modalService.closeModal();
  }
  closeModal() {
    this.modalService.closeModal();
  }
  getInitValues() {
    this.sectors = Sectors;
    this.countries = Countries;
  }
  getSelectedCountry($event: any) {
    this.selectedCountry = $event.target.value;
    this.countries?.map((country) => {
      if (country.name === this.selectedCountry) {
        this.cities = country.cities;
      }
    });
  }
}
