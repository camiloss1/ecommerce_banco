import { TestBed } from '@angular/core/testing';

import { HelpersInterceptor } from './helpers.interceptor';

describe('HelpersInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HelpersInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HelpersInterceptor = TestBed.inject(HelpersInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
