import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackTrace } from './track-trace';

describe('TrackTrace', () => {
  let component: TrackTrace;
  let fixture: ComponentFixture<TrackTrace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackTrace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackTrace);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
