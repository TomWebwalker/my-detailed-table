import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicDetailsComponent } from './periodic-details.component';

describe('PeriodicDetailsComponent', () => {
  let component: PeriodicDetailsComponent;
  let fixture: ComponentFixture<PeriodicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodicDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriodicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
