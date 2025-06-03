---
author: "Abu Sadat Md. Sayem"
title: "Understanding RSA: The Backbone of Modern Cryptography"
date: "2025-06-03"
description: "Unravel the complexities of RSA, the foundational public-key cryptosystem. This post explores its mathematical principles, how it secures digital communications, and its enduring relevance in cybersecurity."
tags: ["Cryptography", "RSA", "Security", "Encryption"]
categories: ["Cryptography", "Cybersecurity"]
series: ["Cryptography Fundamentals"]
aliases: ["RSA algorithm", "RSA encryption"]
cover:
  image: images/rsa.png
  caption: "RSA: The Mathematical Magic Behind Secure Digital Communication"
ShowToc: true
TocOpen: true
---

{{< math.inline >}}

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/contrib/auto-render.min.js"
        onload="renderMathInElement(document.body, {
          delimiters: [
              {left: '$$', right: '$$', display: true},
              {left: '$', right: '$', display: false},
              {left: '\\(', right: '\\)', display: false}
          ]
        });">
</script>

{{</ math.inline >}}

In our everyday’s secure internet access, at the heart of this digital security lies RSA encryption, one of the most important cryptographic algorithms ever developed.

This post will demystify RSA, explain its underlying principles, and highlight crucial considerations for architects designing secure systems.

### What is Asymmetric Cryptography? The Foundation of RSA

Before diving into RSA itself, let's understand the revolutionary concept it's built upon: **asymmetric cryptography**, also known as **public-key cryptography**.

Imagine a traditional lock and key. Symmetric cryptography is like having a single key that both locks and unlocks a box. Both parties sharing information need a copy of this exact same key, and keeping it secret is crucial. The challenge, however, is securely exchanging that shared key in the first place.

Asymmetric cryptography solves this by introducing a **pair of mathematically linked keys**:

- **The Public Key:** This key can be freely shared with anyone. Think of it as a padlock that anyone can use to lock a message. Once locked, it can *only* be opened by the corresponding private key.
- **The Private Key:** This key must be kept absolutely secret by its owner. It's the unique key that can unlock messages encrypted with its paired public key, or "sign" messages to prove their origin.

The magic lies in this asymmetry: knowing the public key tells you nothing useful about the private key, making it incredibly powerful for secure communication and verification.

### Enter RSA: Rivest, Shamir, Adleman

RSA, named after its inventors Ron **Rivest**, Adi **Shamir**, and Leonard **Adleman**. Its genius lies in the mathematical difficulty of factoring very large numbers. It's easy to multiply two large prime numbers together, but computationally extremely difficult to reverse that process and find the original prime factors from their product. This "trap-door function" forms the bedrock of RSA's security.

**How RSA Works (Simplified):**

1. **Key Generation:** You pick two very large, distinct prime numbers ($p$ and $q$). These are kept secret. From these, a public key (a pair of numbers, one of which is $n = p \times q$) and a private key (another pair of numbers related to $p$ and $q$) are derived.
2. **Encryption:** If you want to send me a secret message, you use *my* public key to encrypt it.
3. **Decryption:** I then use *my* private key (which only I possess) to decrypt your message.
4. **Digital Signatures:** If I want to prove I sent a message and that it hasn't been tampered with, I can "sign" it using *my* private key. Anyone can then use *my* public key to verify the signature, confirming both my identity and the message's integrity.

---

### The Heart of RSA: Key Generation Explained

The security of RSA begins with the careful generation of its key pair. While actual implementations use immensely larger numbers, here's the conceptual process:

1. **Choose Two Large, Distinct Prime Numbers ($p \text{ and } q$):**
    - This is the foundational step. The security of your RSA keys hinges on '$p$' and '$q$' being truly large, random, and kept secret. In simplified examples (like the one used in the video), they might be small, e.g., $p = 2$ and $q = 7$.
    - In a real-world scenario, these numbers are hundreds of digits long.
2. **Compute the Modulus ($n$):**
    - Multiply $p$ and $q$ to get $n$:
    $$n = p \times q$$
    - This '$n$' will be part of both your public and private keys. For our small example, $n = 2 \times 7 = 14$.
3. **Compute Euler's Totient Function ($\phi(n)$):**
    - This value is critical for deriving the encryption and decryption exponents. For two distinct primes $p$ and $q$:
    $$\phi(n) = (p - 1)(q - 1)$$
    - For our example, $\phi(14) = (2 - 1)(7 - 1) = 1 \times 6 = 6$.
4. **Choose the Public Key Exponent ($e$):**
    - Select an integer '$e$' such that:
        - $1 < e < \phi(n)$
        - '$e$' and $\phi(n)$ are **coprime** (meaning their greatest common divisor is 1).
    - For $\phi(14) = 6$, the possible value for '$e$' (where $e > 1$ and $\text{gcd}(e, 6) = 1$) is $e = 5$.
    - Your **public key** is now $(e, n)$, which is $(5, 14)$ in our example.
5. **Determine the Private Key Exponent ($d$):**
    - Find an integer '$d$' that satisfies the modular multiplicative inverse relation:
    $$d \cdot e \equiv 1 \pmod{\phi(n)}$$
    - This means that when $d \cdot e$ is divided by $\phi(n)$, the remainder is 1. You're looking for '$d$' such that $d \times e$ is one more than a multiple of $\phi(n)$.
    - For our example, we need to find $d$ such that $5d \equiv 1 \pmod{6}$.
    - By trying values ($5 \times 1 = 5 \equiv 5 \pmod{6}$, $5 \times 2 = 10 \equiv 4 \pmod{6}$, ..., $5 \times 5 = 25 \equiv 1 \pmod{6}$), we find $d = 5$.
    - Your **private key** is $(d, n)$, which is $(5, 14)$ in our example. (It's a rare coincidence that $d=e$ in this tiny example, but not generally true for larger numbers).

You're looking for a focused summary of when to use RSA and its inherent constraints. While the previous blog post covers this within a larger context, I can extract and consolidate these points specifically for you.

### When to Use RSA (Key Use Cases)

RSA is a powerful asymmetric algorithm best suited for specific cryptographic tasks due to its unique properties:

1.  **Secure Key Exchange (especially for Symmetric Keys):**
    * This is arguably RSA's most common and critical application. Since symmetric encryption algorithms (like AES) are much faster for encrypting large amounts of data, RSA is used to securely exchange the *symmetric key* over an insecure channel.
    * **Example:** In TLS/SSL (HTTPS), your browser encrypts a randomly generated symmetric session key using the web server's RSA public key. The server decrypts it with its private key, and then both parties use the shared symmetric key for the rest of the communication.

2.  **Digital Signatures:**
    * RSA provides **authenticity** (proof of sender's identity) and **integrity** (proof that the data hasn't been altered). The sender signs a hash of the message with their private key, and anyone can verify it with the sender's public key.
    * **Examples:** Software updates, code signing, digital documents, emails (S/MIME), and verifying the authenticity of digital certificates (PKI).

3.  **Authentication:**
    * Through digital certificates, RSA can bind a public key to an identity. This allows entities to prove their identity to each other.
    * **Examples:** Client authentication in TLS, verifying server identities in web browsers.

4.  **Non-Repudiation:**
    * Because only the owner of the private key can create a valid signature, RSA provides strong non-repudiation, meaning the sender cannot later deny having sent a signed message.

### Constraints and Limitations of RSA

While indispensable, RSA comes with several constraints that Solution Architects must consider:

1.  **Performance (Speed):**
    * **Computational Intensity:** RSA encryption and decryption are significantly slower and more computationally intensive than symmetric encryption algorithms (like AES). This is its most significant practical constraint.
    * **Not for Bulk Data:** Due to its slowness, RSA should **never be used for direct encryption of large amounts of data** (e.g., entire files, video streams). It's always used in a hybrid approach with a faster symmetric cipher for bulk encryption.

2.  **Key Length Requirements:**
    * **Increasing Key Sizes:** The security of RSA relies on the computational difficulty of factoring large numbers. As computing power increases, the required key lengths for RSA also increase to maintain security.
    * **Performance Impact:** Longer keys (e.g., 2048-bit, 3072-bit, or 4096-bit) provide stronger security but further increase computational overhead for encryption and decryption operations. This is a trade-off.
    * **Minimums:** 1024-bit RSA keys are largely considered insecure for new deployments today; 2048-bit is generally the minimum, with 3072-bit or 4096-bit recommended for high-security, long-term protection.

3.  **Vulnerability to Quantum Computing:**
    * **Shor's Algorithm:** RSA's security fundamentally relies on the difficulty of integer factorization. Quantum computers, if they reach sufficient scale and stability, could execute Shor's algorithm, which can factor large numbers in polynomial time, thus breaking RSA encryption.
    * **Long-Term Threat:** This is a long-term threat, not an immediate one, but it means RSA will eventually become obsolete for confidentiality. Solution Architects need to plan for "crypto agility" and the transition to Post-Quantum Cryptography (PQC).

4.  **Padding Requirement:**
    * **Never Use "Raw" RSA:** RSA, when used without proper padding schemes, is vulnerable to various attacks (e.g., chosen-plaintext attacks, padding oracle attacks, short message attacks).
    * **Mandatory Padding:** Proper padding schemes like OAEP (for encryption) and PSS (for signatures) are absolutely essential for secure RSA implementation. This adds complexity to correct implementation compared to symmetric algorithms which often integrate modes of operation more directly.

5.  **Random Number Generation Quality:**
    * **Critical Dependency:** The security of RSA keys (specifically the prime numbers $p$ and $q$) relies entirely on the quality of the random number generator used during key generation.
    * **Weakness Source:** If the random number generator is weak, predictable, or poorly implemented, the generated primes could be easily guessed or factored, leading to a complete compromise of the private key.

6.  **Message Size Limitations (for Direct Encryption):**
    * When directly encrypting data (which is rare with RSA), the message size must be smaller than the modulus of the RSA key minus the padding overhead. If a message is larger, it must be broken into chunks and encrypted separately, which is inefficient. This limitation further emphasizes why RSA is not used for bulk data encryption.

Understanding these constraints is vital for Solution Architects to design secure, performant, and future-proof systems that leverage RSA appropriately.

## RSA Encryption and Digital Signing with OpenSSL Commands

### 1. RSA Key Pair Generation

First, you need an RSA private key. This key will be used for decryption and signing. From the private key, you can derive the public key, which is used for encryption and signature verification.

### Generate a 2048-bit RSA Private Key:

```
openssl genrsa -out private_key.pem 2048

```

- `genrsa`: Generates an RSA private key.
- `out private_key.pem`: Specifies the output file name for the private key.
- `2048`: Sets the key length to 2048 bits, which is a common and currently recommended minimum.

### Extract the Public Key from the Private Key:

```
openssl rsa -in private_key.pem -pubout -out public_key.pem
```

- `rsa`: OpenSSL's utility for RSA key operations.
- `in private_key.pem`: Specifies the input private key file.
- `pubout`: Instructs OpenSSL to output only the public key part.
- `out public_key.pem`: Specifies the output file name for the public key.

**Security Best Practice:** Your `private_key.pem` file contains your secret key. Protect it rigorously. Do not share it.

### 2. RSA Encryption and Decryption (for Small Data)

These commands demonstrate how to encrypt a small piece of data using the public key and decrypt it using the private key. We will use **OAEP padding**, which is the recommended secure padding scheme for RSA encryption.

### Create a Sample Message File:

```
echo "Hello, secure world! This is a test message." > plaintext.txt
```

### Encrypt the Message using the Public Key (with OAEP Padding):

```
openssl pkeyutl -encrypt -pubin -inkey public_key.pem -in plaintext.txt -out encrypted.bin -pkeyopt rsa_padding_mode:oaep
```

- `pkeyutl`: OpenSSL's public key utility, suitable for various public key operations including encryption/decryption.
- `encrypt`: Specifies the encryption operation.
- `pubin`: Indicates that the input key is a public key.
- `inkey public_key.pem`: Specifies the public key file to use for encryption.
- `in plaintext.txt`: Specifies the input file containing the plaintext.
- `out encrypted.bin`: Specifies the output file for the encrypted (ciphertext) data.
- `pkeyopt rsa_padding_mode:oaep`: **Crucially**, specifies the use of OAEP (Optimal Asymmetric Encryption Padding) mode for security. **Never use RSA encryption without proper padding.**

### Decrypt the Message using the Private Key (with OAEP Padding):

```
openssl pkeyutl -decrypt -inkey private_key.pem -in encrypted.bin -out decrypted_plaintext.txt -pkeyopt rsa_padding_mode:oaep
```

- `decrypt`: Specifies the decryption operation.
- `inkey private_key.pem`: Specifies the private key file to use for decryption.
- `in encrypted.bin`: Specifies the input file containing the ciphertext.
- `out decrypted_plaintext.txt`: Specifies the output file for the decrypted plaintext.
- `pkeyopt rsa_padding_mode:oaep`: **Crucially**, specifies the use of OAEP padding, matching the encryption.

You can then compare `plaintext.txt` and `decrypted_plaintext.txt` to confirm successful encryption and decryption.

### 3. Digital Signing and Verification

Digital signatures provide authenticity and integrity for data. The sender uses their private key to sign a hash of the data, and anyone can verify the signature using the sender's public key. We will use **PSS padding**, which is the recommended secure padding scheme for RSA digital signatures.

### Create a Sample File to Sign:

```
echo "This document confirms the transaction details." > document.txt
```

### Digitally Sign the File using the Private Key (with PSS Padding and SHA256):

```
openssl dgst -sha256 -sign private_key.pem -out signature.bin document.txt -sigopt rsa_padding_mode:pss

```

- `dgst`: OpenSSL's digest (hashing and signing) utility.
- `sha256`: Specifies SHA256 as the hashing algorithm.
- `sign private_key.pem`: Instructs OpenSSL to sign the digest using the specified private key.
- `out signature.bin`: Specifies the output file for the binary signature.
- `document.txt`: The input file whose digest will be signed.
- `sigopt rsa_padding_mode:pss`: **Crucially**, specifies the use of PSS (Probabilistic Signature Scheme) padding for security. **Always use proper padding for digital signatures.**

### Verify the Digital Signature using the Public Key:

```
openssl dgst -sha256 -verify public_key.pem -signature signature.bin document.txt -sigopt rsa_padding_mode:pss
```

- `verify public_key.pem`: Instructs OpenSSL to verify the signature using the specified public key.
- `signature signature.bin`: Specifies the input file containing the digital signature.
- `document.txt`: The original file that was signed.
- `sigopt rsa_padding_mode:pss`: **Crucially**, specifies the use of PSS padding, matching the signing process.

**Expected Output:**

- If the signature is valid and the `document.txt` has not been altered since signing: `Verified OK`
- If the signature is invalid (e.g., `document.txt` was modified, or the wrong key was used): `Verification Failed`