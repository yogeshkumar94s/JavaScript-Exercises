### Grouping and Capturing Script

This script demonstrates how to use regular expressions with grouping and capturing to extract specific parts of a string, such as phone numbers and email addresses. Here’s how you can capture these parts:

1. **Capture area code, central office code, and line number from a US phone number**.
2. **Capture username and domain from an email address**.

```javascript
const text = `
    Contact us at (123) 456-7890 or (987) 654-3210. 
    Also, you can reach out via email at example.user@example.com or support@domain.org.
`;

// 1. Capture area code, central office code, and line number from a US phone number
const phoneNumberRegex = /\((\d{3})\) (\d{3})-(\d{4})/g;

let match;
console.log("Phone Numbers Captures:");
while ((match = phoneNumberRegex.exec(text)) !== null) {
  console.log(`Full Match: ${match[0]}`);
  console.log(`Area Code: ${match[1]}`);
  console.log(`Central Office Code: ${match[2]}`);
  console.log(`Line Number: ${match[3]}`);
}

// 2. Capture username and domain from an email address
const emailRegex = /(\w+@\w+\.\w+)/g;

console.log("\nEmail Addresses Captures:");
while ((match = emailRegex.exec(text)) !== null) {
  console.log(`Full Match: ${match[0]}`);
  const [username, domain] = match[0].split("@");
  console.log(`Username: ${username}`);
  console.log(`Domain: ${domain}`);
}
```

### Explanation

1. **Capture area code, central office code, and line number from a US phone number**:

   - Regular expression: `/\((\d{3})\) (\d{3})-(\d{4})/g`
   - `\(` and `\)` match the literal parentheses.
   - `(\d{3})` captures the area code (3 digits) in the first capturing group.
   - `(\d{3})` captures the central office code (3 digits) in the second capturing group.
   - `(\d{4})` captures the line number (4 digits) in the third capturing group.
   - `g` flag stands for global search.
   - `phoneNumberRegex.exec(text)` returns an array where:
     - `match[0]` is the full matched phone number.
     - `match[1]`, `match[2]`, and `match[3]` are the captured groups for the area code, central office code, and line number respectively.

2. **Capture username and domain from an email address**:
   - Regular expression: `/(\w+@\w+\.\w+)/g`
   - `(\w+@\w+\.\w+)` captures the entire email address in one group.
   - The `g` flag stands for global search.
   - `emailRegex.exec(text)` returns an array where:
     - `match[0]` is the full matched email address.
     - The script splits the email address on '@' to extract the username and domain.
