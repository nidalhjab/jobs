import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../post/post';
import { ModalService } from '../services/modal.service';
import { FormBuilder } from '@angular/forms';
import { startWith, debounceTime } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private postService: PostService
  ) { }
  filterForm = this.formBuilder.group({
    searchTitle: '',
  });
  debouncedControl$ = this.filterForm.controls.searchTitle.valueChanges.pipe(
    startWith(''),
    debounceTime(500)
  );
  addPostModal?: boolean;
  viewDetailsModal?: boolean;
  searchResults?: Post[];
  searchText: string = '';

  ngOnInit(): void {
    this.getAddPostModalStatus();
    this.getPostDetails();
  }
  getAddPostModalStatus() {
    this.modalService
      .getModalStatus()
      .subscribe((status) => (this.addPostModal = status));
  }
  openAddModal() {
    this.modalService.openModal();
  }
  getPostDetails() {
    this.modalService
      .getDetailsModalStatus()
      .subscribe((status) => (this.viewDetailsModal = status));
  }
}
