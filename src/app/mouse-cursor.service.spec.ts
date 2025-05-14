import { TestBed } from '@angular/core/testing';

import { MouseCursorService } from './mouse-cursor.service';

describe('MouseCursorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MouseCursorService = TestBed.get(MouseCursorService);
    expect(service).toBeTruthy();
  });
});
