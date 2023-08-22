import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetalComponent } from './petal.component';

describe('PetalComponent', () => {
  let component: PetalComponent;
  let fixture: ComponentFixture<PetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
