### Validation Script

This script uses regular expressions to validate a password and a URL. It checks whether the input meets the specified criteria and logs whether each is valid.

#### 1. Password Validation

- Must include at least one uppercase letter.
- Must include at least one lowercase letter.
- Must include at least one digit.
- Must include at least one special character (e.g., `@`, `#`, `$`, etc.).
- Must be at least 8 characters long.

#### 2. URL Validation

- Validates URLs using a common pattern for most URLs (including optional `http://`, `https://`, and `www.`).

```javascript
// Regular expression for password validation
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@#$%^&+=]{8,}$/;

// Regular expression for URL validation
const urlRegex =
  /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9#]+\/?)*$/;

// Test cases
const passwords = [
  "Password123!",
  "password123",
  "PASSWORD123!",
  "Pass123!",
  "Pass@1234",
];

const urls = [
  "http://www.example.com",
  "https://example.com",
  "www.example.com",
  "example.com",
  "http://example",
  "https://.com",
];

// Validate passwords
console.log("Password Validation Results:");
passwords.forEach((password) => {
  const isValid = passwordRegex.test(password);
  console.log(`Password "${password}" is ${isValid ? "valid" : "invalid"}.`);
});

// Validate URLs
console.log("\nURL Validation Results:");
urls.forEach((url) => {
  const isValid = urlRegex.test(url);
  console.log(`URL "${url}" is ${isValid ? "valid" : "invalid"}.`);
});
```

### Explanation

1. **Password Validation**:

   - Regular expression: `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@#$%^&+=]{8,}$/`
     - `(?=.*[a-z])` ensures at least one lowercase letter.
     - `(?=.*[A-Z])` ensures at least one uppercase letter.
     - `(?=.*\d)` ensures at least one digit.
     - `(?=.*[@#$%^&+=])` ensures at least one special character.
     - `[A-Za-z\d@#$%^&+=]{8,}` ensures the password is at least 8 characters long.

2. **URL Validation**:
   - Regular expression: `/^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9#]+\/?)*$/`
     - `(https?:\/\/)?` optionally matches `http://` or `https://`.
     - `(www\.)?` optionally matches `www.`.
     - `([a-zA-Z0-9-]+\.)+` matches the domain and any subdomains.
     - `[a-zA-Z]{2,6}` matches the top-level domain (e.g., `.com`, `.org`).
     - `(\/[a-zA-Z0-9#]+\/?)*` optionally matches additional path components.
