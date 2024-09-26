import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-blog-details',
  imports:[CommonModule],
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
}

)
export class BlogDetailsComponent implements OnInit {
  blogPost: any;
  blogPosts = [
    // Your blog posts data array
    { title: 'Post 1', imgSrc: 'link_to_image_1', author: 'Author 1', description: 'Description 1', comments: 'Comment count 1', content: 'Content of Post 1' },
    { title: 'Post 2', imgSrc: 'link_to_image_2', author: 'Author 2', description: 'Description 2', comments: 'Comment count 2', content: 'Content of Post 2' },
    // Add more posts as needed
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const indexStr = this.route.snapshot.paramMap.get('id'); // Get the ID as a string
    const index = indexStr ? +indexStr : -1; // Convert to number or set to -1 if null

    if (index >= 0 && index < this.blogPosts.length) {
      this.blogPost = this.blogPosts[index];
    } else {
      console.error('Invalid index: ', index); // Log error if index is invalid
      // Optionally, you can redirect to a 404 page or a default post here
    }
  }
}
