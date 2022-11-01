import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudinessComponent } from './cloudiness.component';

describe('CloudinessComponent', () => {
  let component: CloudinessComponent;
  let fixture: ComponentFixture<CloudinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
