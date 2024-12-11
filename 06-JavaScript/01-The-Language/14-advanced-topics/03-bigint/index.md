### **3. BigInt**

BigInt allows representation of integers larger than `Number.MAX_SAFE_INTEGER`.

#### **Key Concepts**:

- Use `n` at the end of a number or `BigInt()` to create BigInt values.
- BigInt cannot be mixed with regular numbers.

#### **Examples**:

1. **Basic BigInt**:

   ```javascript
   const big = 123456789012345678901234567890n;
   console.log(big + 1n); // 123456789012345678901234567891n
   ```

2. **Converting Numbers**:
   ```javascript
   const big = BigInt(123);
   console.log(big + 10n); // 133n
   ```

#### **Use Cases**:

- Cryptography, high-precision computations, or handling very large numbers.

---
