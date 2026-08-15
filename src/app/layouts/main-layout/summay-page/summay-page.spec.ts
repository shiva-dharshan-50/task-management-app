import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummayPage } from './summay-page';

describe('SummayPage', () => {
  let component: SummayPage;
  let fixture: ComponentFixture<SummayPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummayPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummayPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
