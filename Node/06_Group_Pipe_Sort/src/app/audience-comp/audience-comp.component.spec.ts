import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceCompComponent } from './audience-comp.component';

describe('AudienceCompComponent', () => {
  let component: AudienceCompComponent;
  let fixture: ComponentFixture<AudienceCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudienceCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudienceCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
