import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgCardComponentComponent } from './org-card-component.component';

describe('OrgCardComponentComponent', () => {
  let component: OrgCardComponentComponent;
  let fixture: ComponentFixture<OrgCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
