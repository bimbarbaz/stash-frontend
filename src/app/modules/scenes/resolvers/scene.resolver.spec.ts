import { TestBed } from '@angular/core/testing';

import { SceneResolver } from './scene.resolver';

describe('SceneResolver', () => {
  let resolver: SceneResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SceneResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
