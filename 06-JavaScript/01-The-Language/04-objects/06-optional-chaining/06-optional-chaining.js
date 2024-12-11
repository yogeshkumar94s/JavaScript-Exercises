// Optional chaining '?.' -- // A recent addition

/*
The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

- The “non-existing property” problem

If you’ve just started to read the tutorial and learn JavaScript, maybe the problem hasn’t touched you yet, but it’s quite common.

As an example, let’s say we have user objects that hold the information about our users.

Most of our users have addresses in user.address property, with the street user.address.street, but some did not provide them.

In such case, when we attempt to get user.address.street, and the user happens to be without an address, we get an error:
*/

// Optional chaining

// Here’s the safe way to access user.address.street using ?.:

let user = {};

alert(user.address?.street);
