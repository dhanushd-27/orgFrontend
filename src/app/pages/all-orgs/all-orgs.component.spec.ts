import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrgsComponent } from './all-orgs.component';

describe('AllOrgsComponent', () => {
  let component: AllOrgsComponent;
  let fixture: ComponentFixture<AllOrgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllOrgsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllOrgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
