# Networking

## Documentation :

this lib is intended for testing only
do not use it for production .
i will make use of the functional programming paradigm and this mean :

- reducing side effects (no mutation)
- semi pure functions (pure function are not possible cause of IO and fetching external APIs)
- no Class's (even if they are just a syntactic sugar on top of Constructor Functions and Prototypes)

### Dealing with APIs :

- `fetchJsonData` :
  ```js
  // preform post http request on myapi endpoint
  fetchJsonData("https://my/api/endpoint", "post", {
    firstName: "j",
    lastName: "k",
  });
  ```
  this will throw an error or returns a json data
  it is recommended to put this function inside `try` and `catch` blocks
  Another example :

```js
try {
  const myData = fetchJsonData("https://my/api/endpoint"); // this will use the get method by default
  // do somthing with this data ...
} catch (err) {
  // if data not recieved do another thing here ...
}
```
