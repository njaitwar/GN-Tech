import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <-- Add this import

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // <-- Add CommonModule here
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupForm: FormGroup;
  emailOtpSent = false;
  emailOtpVerified = false;
  mobileOtpSent = false;
  mobileOtpVerified = false;

  // For demo, store OTPs here. In real app, handle via backend.
  private emailOtp = '';
  private mobileOtp = '';

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      emailOtp: [''],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      mobileOtp: [''],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  sendEmailOtp() {
    // Simulate sending OTP
    this.emailOtp = Math.floor(100000 + Math.random() * 900000).toString();
    this.emailOtpSent = true;
    alert('Email OTP sent: ' + this.emailOtp); // Replace with real email sending
  }

  verifyEmailOtp() {
    if (this.signupForm.value.emailOtp === this.emailOtp) {
      this.emailOtpVerified = true;
    } else {
      alert('Invalid Email OTP');
    }
  }

  sendMobileOtp() {
    // Simulate sending OTP
    this.mobileOtp = Math.floor(100000 + Math.random() * 900000).toString();
    this.mobileOtpSent = true;
    alert('Mobile OTP sent: ' + this.mobileOtp); // Replace with real SMS sending
  }

  verifyMobileOtp() {
    if (this.signupForm.value.mobileOtp === this.mobileOtp) {
      this.mobileOtpVerified = true;
    } else {
      alert('Invalid Mobile OTP');
    }
  }

  onSubmit() {
    if (this.signupForm.valid && this.emailOtpVerified && this.mobileOtpVerified) {
      alert('Registration successful!');
      // Submit form to backend here
    }
  }
}