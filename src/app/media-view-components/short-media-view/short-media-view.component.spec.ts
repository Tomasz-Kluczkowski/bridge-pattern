import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortMediaViewComponent } from './short-media-view.component';

describe('ShortMediaViewComponent', () => {
  let component: ShortMediaViewComponent;
  let fixture: ComponentFixture<ShortMediaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortMediaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortMediaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
