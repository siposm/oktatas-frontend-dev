import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('buttonDisabled should return true if username or password is less than 5 characters', () => {
    component.name = 'user';
    component.password = '1234';
    expect(component.buttonDisabled()).toBeTrue();

    component.name = 'user123';
    component.password = '123';
    expect(component.buttonDisabled()).toBeTrue();
  });

  it('buttonDisabled should return false if both username and password are at least 5 characters', () => {
    component.name = 'username';
    component.password = 'password';
    expect(component.buttonDisabled()).toBeFalse();
  });

  it('should have data binding for username and password', () => {
    const nameInput = compiled.querySelector('input[type="text"]') as HTMLInputElement;
    const passwordInput = compiled.querySelector('input[type="password"]') as HTMLInputElement;

    nameInput.value = 'testuser';
    nameInput.dispatchEvent(new Event('input'));
    passwordInput.value = 'testpass';
    passwordInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.name).toEqual('testuser');
    expect(component.password).toEqual('testpass');
  });

  it('should enable the login button when username and password are valid', () => {
    const loginButton = compiled.querySelector('button') as HTMLButtonElement;

    component.name = 'validuser';
    component.password = 'validpass';
    fixture.detectChanges();
    expect(loginButton.disabled).toBeFalse();

    component.name = 'usr';
    component.password = 'pwd';
    fixture.detectChanges();
    expect(loginButton.disabled).toBeTrue();
  });
});
