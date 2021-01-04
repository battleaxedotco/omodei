# omodei

It's a chore to hunt down common cubic-bezier values for CSS transitions, so why not collect all the best ones and make them easy to retrieve and use instead?

### [Check out the demo here](https://omodei.netlify.app/)

![](https://github.com/Inventsable/omodei-sandbox/blob/master/src/assets/screenshot.png?raw=true)

## Installation

```bash
npm i omodei
```

```js
import omodei from "omodei";

omodei.assignAll(); // Sets all CSS variables
omodei.assignLibraryByAuthor("google"); // Sets all Google CSS variables
```

---

## Functions

<dl>
<dt><a href="#getLibraryByAuthor">getLibraryByAuthor(name)</a> ⇒ <code>Object</code></dt>
<dd><p>Retrieves all cubic-bezier animations of an author</p>
</dd>
<dt><a href="#getAll">getAll()</a></dt>
<dd><p>Collects all cubic-bezier strings from all authors</p>
</dd>
<dt><a href="#assignAll">assignAll()</a></dt>
<dd><p>Assigns all cubic-bezier strings as CSS variables to the active document</p>
</dd>
<dt><a href="#assignLibraryByAuthor">assignLibraryByAuthor(name)</a></dt>
<dd><p>Assigns all cubic-bezier strings of a particular author to active document</p>
</dd>
<dt><a href="#getByName">getByName(name)</a> ⇒ <code>String</code></dt>
<dd></dd>
<dt><a href="#getCSS">getCSS(prop)</a></dt>
<dd><p>Retrieves the current value of a given CSS variable</p>
</dd>
<dt><a href="#setCSS">setCSS(prop, data)</a></dt>
<dd><p>Sets the value of a given CSS variable</p>
</dd>
</dl>

<a name="getLibraryByAuthor"></a>

## getLibraryByAuthor(name) ⇒ <code>Object</code>

Retrieves all cubic-bezier animations of an author

**Kind**: global function  
**Returns**: <code>Object</code> - Collection of cubic-bezier strings

| Param | Type                | Description                               |
| ----- | ------------------- | ----------------------------------------- |
| name  | <code>String</code> | Name of the author to retrieve library of |

<a name="getAll"></a>

## getAll()

Collects all cubic-bezier strings from all authors

**Kind**: global function  
<a name="assignAll"></a>

## assignAll()

Assigns all cubic-bezier strings as CSS variables to the active document

**Kind**: global function  
<a name="assignLibraryByAuthor"></a>

## assignLibraryByAuthor(name)

Assigns all cubic-bezier strings of a particular author to active document

**Kind**: global function

| Param | Type                | Description                               |
| ----- | ------------------- | ----------------------------------------- |
| name  | <code>String</code> | Name of the author to retrieve library of |

<a name="getByName"></a>

## getByName(name) ⇒ <code>String</code>

**Kind**: global function  
**Returns**: <code>String</code> - Cubic bezier string

| Param | Type                | Description                 |
| ----- | ------------------- | --------------------------- |
| name  | <code>String</code> | Name of cubic-bezier timing |

<a name="getCSS"></a>

## getCSS(prop)

Retrieves the current value of a given CSS variable

**Kind**: global function

| Param | Type                | Description                                                 |
| ----- | ------------------- | ----------------------------------------------------------- |
| prop  | <code>String</code> | The target name of variable, with or without leading dashes |

<a name="setCSS"></a>

## setCSS(prop, data)

Sets the value of a given CSS variable

**Kind**: global function

| Param | Type                | Description                                                 |
| ----- | ------------------- | ----------------------------------------------------------- |
| prop  | <code>String</code> | The target name of variable, with or without leading dashes |
| data  | <code>String</code> | The new CSS value to assign to variable                     |
