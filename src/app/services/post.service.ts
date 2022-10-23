import { Injectable } from '@angular/core';
import { Posts } from '../mock-data/mock-posts';
import { Post } from '../post/post';
import { BehaviorSubject, map, Observable, ObservableInput, of, tap } from 'rxjs';
import { FilterPipe } from '../filter.pipe';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: BehaviorSubject<Post[]> = new BehaviorSubject(Posts);
  selectedPost: BehaviorSubject<Post> = new BehaviorSubject({});
  constructor(private filterPipe: FilterPipe) { }
  getPosts() {
    return this.posts.asObservable();
  }
  addNewPost(values: Post) {
    const currentPosts = this.posts.getValue();
    const lastId = currentPosts[0].id
    let id;
    if (lastId) {
      id = lastId + 1
    } else {
      id = 1;
    }
    const newPost = { ...values, id };
    currentPosts.unshift(newPost);
    this.posts.next(currentPosts)
  }
  deletePost(id?: number) {
    const currentPosts = Array.from(this.posts.getValue());
    const objWithIdIndex = currentPosts.findIndex((obj) => obj.id === id);
    currentPosts.splice(objWithIdIndex, 1);
    this.posts.next(currentPosts);
  }
  getPostById(id?: number) {
    const currentPosts = this.posts.getValue();
    const selectedPost = currentPosts.filter(post => post.id === id);
    this.selectedPost.next(selectedPost[0]);
  }
  getSelectedPost() {
    return this.selectedPost.asObservable();
  }

  filterBySector(sector?: string) {
    if (sector === '') {
      this.posts.next(Posts)
      return
    }
    const currentPosts = this.posts.getValue();
    const searchResult = currentPosts.filter(post => post.sector?.toLowerCase().trim() === sector?.toLocaleLowerCase().trim());
    this.posts.next(searchResult);
  }
  filterByCountry(country?: string) {
    if (country === '') {
      this.posts.next(Posts)
      return
    }
    const currentPosts = this.posts.getValue();
    const searchResult = currentPosts.filter(post => post.country?.toLowerCase().trim() === country?.toLocaleLowerCase().trim());
    this.posts.next(searchResult);
  }
  filterByCity(city?: string) {
    if (city === '') {
      this.posts.next(Posts)
      return
    }
    const currentPosts = this.posts.getValue();
    const searchResult = currentPosts.filter(post => post.city?.toLowerCase().trim() === city?.toLocaleLowerCase().trim());
    this.posts.next(searchResult);
  }

}
