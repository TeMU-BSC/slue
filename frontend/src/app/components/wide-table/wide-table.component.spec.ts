import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WideTableComponent } from './wide-table.component';

describe('WideTableComponent', () => {
  let component: WideTableComponent;
  let fixture: ComponentFixture<WideTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WideTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WideTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
