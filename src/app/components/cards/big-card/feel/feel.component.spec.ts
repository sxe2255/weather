import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelComponent } from './feel.component';

describe('FeelComponent', () => {
  let component: FeelComponent;
  let fixture: ComponentFixture<FeelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeelComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(FeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
