import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post/post';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], searchedText: string | null) {
    if (!posts) {
      return [];
    }
    if (!searchedText) {
      return posts;
    }
    if (posts.length === 0 || searchedText === '')
      searchedText = searchedText.toLocaleLowerCase();

    return posts.filter(post => {
      return post.jobTitle?.toLocaleLowerCase().includes(searchedText ? searchedText : '');
    });
  }
}


