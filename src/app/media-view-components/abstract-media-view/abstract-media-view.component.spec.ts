import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractMediaViewComponent } from './abstract-media-view.component';

describe('AbstractMediaViewComponent', () => {
  let component: AbstractMediaViewComponent;
  let fixture: ComponentFixture<AbstractMediaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractMediaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractMediaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
