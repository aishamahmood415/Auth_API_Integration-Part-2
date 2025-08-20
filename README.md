# React Authentication App

This is a frontend authentication project built with **React**.  
It includes login, signup, forgot password (OTP-based), reset password, and a protected welcome page.  

Deployed with **Vercel** and connected with an **external authentication API**.  

## Live Demo

- **Vercel Deployment Link:** [Your Vercel Link Here]  
- **GitHub Repository:** [Your Repo Link Here]  

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm start
   ```

4. Build the production version:

   ```bash
   npm run build
   ```

---

## Authentication Flow

1. Login Flow

   * User enters credentials on **Login page**.
   * On success, API returns a **token** → stored in `localStorage`.
   * User is redirected to **Welcome page**, which displays user details.
   * Logout clears token → user goes back to **Login page**.
   * If a protected route is accessed without a valid token → redirect to Login.

2. Signup Flow

   * New users can create an account on the **Signup page**.
   * After successful signup → redirect to **Login page**.

3. Forgot Password & Reset Flow

   * On **Forgot Password page**, user enters registered **email**.
   * API sends an **OTP** to the email.
   * User enters OTP + new password on the **Reset Password page**.
   * On success → alert message shown (*Password reset successfully*).
   * User is redirected to **Login page** to log in with new password.

##  Testing the App

1. Login Test

   * Use correct credentials → should redirect to **Welcome page**.
   * Wrong credentials → should show error.

2. Signup Test

   * Create a new account → should redirect to Login.
   * Try logging in with new credentials.

3. Forgot & Reset Test

   * Enter email → OTP should be sent.
   * Enter OTP + new password → alert + redirect to Login.

4. Protected Routes Test

   * Try accessing `/welcome` without login → should redirect to Login.

## Tools & Frameworks

* React (Frontend Framework)
* React Router (Routing)
* Axios (API calls)
* TailwindCSS / CSS (Styling)
* Vercel (Deployment)

## Author

Developed by *AISHA MAHMOOD*
