// Global object

/*


The global object provides variables and functions that are available anywhere. By default, those that are built into the language or the environment.

In a browser it is named window, for Node.js it is global, for other environments it may have another name.

Recently, globalThis was added to the language, as a standardized name for a global object, that should be supported across all environments. It’s supported in all major browsers.

All properties of the global object can be accessed directly:

console.log("Hello");
// is the same as
globalThis.console.log("Hello");

In a browser, global functions and variables declared with var (not let/const!) become the property of the global object:



*/
