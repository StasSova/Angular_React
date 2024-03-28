import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCompComponent } from './group-comp.component';

describe('GroupCompComponent', () => {
  let component: GroupCompComponent;
  let fixture: ComponentFixture<GroupCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
