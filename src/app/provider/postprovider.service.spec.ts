import { TestBed } from '@angular/core/testing';

import { PostproviderService } from './postprovider.service';

describe('PostproviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostproviderService = TestBed.get(PostproviderService);
    expect(service).toBeTruthy();
  });
});
