## What is jQuery?

* a software library used to traverse and manipulate the DOM, handle events,
create animations, and make asynchronous requests to a server
* is a layer on top of vanilla JavaScript

## Getting jQuery

You can include jQuery in your projects in two ways:
**Method 1:** Download the minified file from http://jquery.com/download/. Then, source that file into your HTML file.

**Method 2:** Include a content delivery network (CDN) source in your HTML file.

**REMEMBER:** Source the jQuery library into your `index.html` file _before_ your JavaScript file.

## The Document Object Model (DOM)

* cross-platform and language-independent convention for representing and interacting with objects in HTML documents
* organized in a tree structure

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/220px-DOM-model.svg.png)

## Event-Driven Programming

To create dynamic web pages, we need JavaScript code that is not completely sequential. We need to react to events.

Our code can run at three events:

1. When the page loads the script.
2. When the browser loads the DOM.
3. When other events occur. (Covered in later lecture.)

```JS
$(document).ready(onReady);

function onReady() {
  // Event 2
  // code here runs after DOM is loaded
});

// Event 1
// code here runs when the script (file) is loaded
// non-DOM code can safely go here
```


**JQUERY EVENTS**
Once the DOM is loaded, we can select elements with the `$()` syntax. When we do this, we get a jQuery object.

To _manipulate_ the DOM, we must first select an element.

## Selectors

* select by ID - `$('#some-id')`
* select by class - `$('.some-class')`
* select descendants - `$('ul li')`
* select multiple elements - `$('.mic, .check')`
* find elements within a selection - `$('#solid').find('.rock')`

**Selectors** return an **Object** that has properties and functions we can call.

## DOM Traversal

Once we select an element, we can navigate to other elements in the DOM tree.

* navigate to parent element - `$('.some-child').parent()`
* get the first-level children of an element - `$('ul').children()`

## Getters and Setters

Some manipulation methods that allow us to **set** (i.e. change or update) properties for jQuery objects, can also be used to **get** the current properties of that object.

```JavaScript
$('#an-element').text('Hello World!'); // sets the text in the element to Hello World!

$('#an-element').text(); // returns the value "Hello World!"

$('#an-input').val(); // returns the value of the input field

$('#an-input').val(''); // clears input text
```


## Handling Click Events

- Events are registered to listeners on DOM ready
  - We can only register events to elements that are on the DOM at this time
  - What about buttons that are created on the fly? Can we still add listeners to them?
  - Adding descendant selectors - `$('#section').on('click', '.dynamicallyCreatedButton', function(){});`
- Callback functions contain logic that occurs when event actually triggered