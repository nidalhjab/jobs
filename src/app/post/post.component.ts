import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { PostService } from '../services/post.service';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor(
    private postService: PostService,
    private modalService: ModalService
  ) { }
  posts: Post[] = [];
  startPage: number = 1;
  totalPages: number =
    this.posts.length > 5 ? Math.ceil(this.posts.length / 5) : 1;
  @Input() searchText: string | null = '';

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts(): void {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  }
  deletePost(id?: number) {
    this.postService.deletePost(id);
  }
  openDetailsModal(id?: number) {
    this.postService.getPostById(id);
    this.modalService.openViewModal();
  }
}
