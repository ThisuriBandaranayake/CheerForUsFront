import { TestBed, inject } from '@angular/core/testing';

import { ArticlePostingService } from './article-posting.service';

describe('ArticlePostingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlePostingService]
    });
  });

  it('should be created', inject([ArticlePostingService], (service: ArticlePostingService) => {
    expect(service).toBeTruthy();
  }));
});
