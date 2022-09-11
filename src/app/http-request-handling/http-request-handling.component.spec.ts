import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRequestHandlingComponent } from './http-request-handling.component';

describe('HttpRequestHandlingComponent', () => {
  let component: HttpRequestHandlingComponent;
  let fixture: ComponentFixture<HttpRequestHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpRequestHandlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpRequestHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
