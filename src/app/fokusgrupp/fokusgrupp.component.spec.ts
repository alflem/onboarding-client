import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FokusgruppComponent } from './fokusgrupp.component';

describe('FokusgruppComponent', () => {
  let component: FokusgruppComponent;
  let fixture: ComponentFixture<FokusgruppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FokusgruppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FokusgruppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
