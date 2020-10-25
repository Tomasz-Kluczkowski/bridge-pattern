import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongMediaViewComponent } from './long-media-view.component';

describe('LongMediaViewComponent', () => {
  let component: LongMediaViewComponent;
  let fixture: ComponentFixture<LongMediaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongMediaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongMediaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
