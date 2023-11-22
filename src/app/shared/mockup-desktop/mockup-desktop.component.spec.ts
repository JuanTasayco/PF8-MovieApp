import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupDesktopComponent } from './mockup-desktop.component';

describe('MockupDesktopComponent', () => {
  let component: MockupDesktopComponent;
  let fixture: ComponentFixture<MockupDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockupDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MockupDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
