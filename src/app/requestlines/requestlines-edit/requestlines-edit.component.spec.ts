import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestlinesEditComponent } from './requestlines-edit.component';

describe('RequestlinesEditComponent', () => {
  let component: RequestlinesEditComponent;
  let fixture: ComponentFixture<RequestlinesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestlinesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestlinesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
