# Assignment-4

*Refactor the below stack implementation, using the concept of closure, such that there is no way to access items array outside of createStack() function scope:*

```javascript
function createStack() {
  return {
    items: [],
    push(item) {
      this.items.push(item);
    },
    pop() {
      return this.items.pop();
    }
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => [10]
stack.items = [10, 100, 1000]; // Encapsulation broken!
```

> In the above code snippet "items" property is exposed as this property wrote in return body. In this way anyone can modify the items's value directly.

### Refactor the above stack implementation:

```javascript
function createStack() {
  const items = [];
  return {
    get() {
      return items;
    },
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    }
  };
};

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // => 5
console.log(stack.items); // => undefined
console.log(stack.get()); // => [10]
```

> We've moved "items" variable inside createStack() function scope. Now we can't access or modify "items" array from outer scope of createStack() function.