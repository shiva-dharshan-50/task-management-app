import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChild } from './service-child';

describe('ServiceChild', () => {
  let component: ServiceChild;
  let fixture: ComponentFixture<ServiceChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
