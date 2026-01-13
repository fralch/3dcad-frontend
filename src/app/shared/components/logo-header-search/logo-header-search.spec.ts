import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoHeaderSearch } from './logo-header-search';

describe('LogoHeaderSearch', () => {
  let component: LogoHeaderSearch;
  let fixture: ComponentFixture<LogoHeaderSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoHeaderSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoHeaderSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
