import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CyoaAngularAppComponent } from '../app/cyoa-angular.component';

beforeEachProviders(() => [CyoaAngularAppComponent]);

describe('App: CyoaAngular', () => {
  it('should create the app',
      inject([CyoaAngularAppComponent], (app: CyoaAngularAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'cyoa-angular works!\'',
      inject([CyoaAngularAppComponent], (app: CyoaAngularAppComponent) => {
    expect(app.title).toEqual('cyoa-angular works!');
  }));
});
