import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('buttonDisabled should return true if username or password is less than 5 characters', () => {
    component.loginModel.email = 'user';
    component.loginModel.password = 'pass';
    expect(component.checkInputs()).toBeTrue();

    component.loginModel.email = 'username';
    component.loginModel.password = 'pass';
    expect(component.checkInputs()).toBeTrue();

    component.loginModel.email = 'user';
    component.loginModel.password = 'password';
    expect(component.checkInputs()).toBeTrue();
  });

  it('buttonDisabled should return false if both username and password are at least 5 characters', () => {
    component.loginModel.email = 'validUser';
    component.loginModel.password = 'validPass';
    expect(component.checkInputs()).toBeFalse();
  });

  it('should have data binding for username and password', () => {
    const usernameInput = fixture.debugElement.query(By.css('input[type="text"]')).nativeElement;
    const passwordInput = fixture.debugElement.query(By.css('input[type="password"]')).nativeElement;

    usernameInput.value = 'testUser';
    usernameInput.dispatchEvent(new Event('input'));

    passwordInput.value = 'testPass';
    passwordInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.loginModel.email).toBe('testUser');
    expect(component.loginModel.password).toBe('testPass');
  });

  it('should enable the login button when username and password are valid', () => {
    const usernameInput = fixture.debugElement.query(By.css('input[type="text"]')).nativeElement;
    const passwordInput = fixture.debugElement.query(By.css('input[type="password"]')).nativeElement;
    const loginButton = fixture.debugElement.query(By.css('button')).nativeElement;

    // Initial state should be disabled
    expect(loginButton.disabled).toBeTrue();

    // Set valid values
    usernameInput.value = 'validUser';
    passwordInput.value = 'validPass';
    usernameInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    // Button should be enabled now
    expect(loginButton.disabled).toBeFalse();
  });
});
