import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post';
import { ModalService } from '../services/modal.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  post: Post = {};
  constructor(
    private postService: PostService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.getSelectedPost();
  }
  getSelectedPost() {
    this.postService.getSelectedPost().subscribe((post) => (this.post = post));
  }
  closeModal() {
    this.modalService.closeViewModal();
  }
}
