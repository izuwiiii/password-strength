import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongPasswordComponent } from './strong-password.component';

describe('StrongPasswordComponent', () => {
  let component: StrongPasswordComponent;
  let fixture: ComponentFixture<StrongPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrongPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrongPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
