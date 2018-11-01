# Elements

## What is this

It's an exploration of of a design system artifact at planning center.  
It uses standard CSS for styling and theming.  
It uses JS (likely TS soon) functions to augement className composition.  
It will expose React components for use in React environments.  


## What's a design system

Let's start with what it's not.  
It's not an artifact in your favorite tech.  
A design system is rules and boundaries.  
It's like [The Elements of Style](https://www.amazon.com/Elements-Style-William-Strunk-Jr/dp/194564401X) by William Strunk . 
Or [The Elements of Typographic Style](https://www.amazon.com/Elements-Typographic-Style-Version-Anniversary/dp/0881792128/ref=sr_1_3?s=books&ie=UTF8&qid=1541017945&sr=1-3&keywords=robert+bringhurst) by Robert Bringhurst.

A design system is the what and why.  
Not the how.

Our design system lives in articles at [planningcenter.design](https://planningcenter.design).decodeURI

This is an artifact, using the elements of ui style retained there.

## Thinking as of 11/1



## Thinking as of 10/31

This is how it decomposes:

```jsx
// App-level
<LargeCreateButton />
<CreateButton size={6} />
<ActionButton size={6} />
<DestroyButton size={6} />

// primary-library-export
<ElementsButton size={6} variant="create" />

// secondary-library-export
<Button
  className={[
    "button",
    buttonAction("create"),
    buttonSize(6)
  ].join(" ")}
/>

// browser-output
<button
  type="button"
  className="button button--variant_create button--size_6"
/>
```
