import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestlinesCreateComponent } from './requestlines-create.component';

describe('RequestlinesCreateComponent', () => {
  let component: RequestlinesCreateComponent;
  let fixture: ComponentFixture<RequestlinesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestlinesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestlinesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
