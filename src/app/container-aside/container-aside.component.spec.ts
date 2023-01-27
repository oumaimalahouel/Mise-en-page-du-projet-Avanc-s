import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAsideComponent } from './container-aside.component';

describe('ContainerAsideComponent', () => {
  let component: ContainerAsideComponent;
  let fixture: ComponentFixture<ContainerAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerAsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
