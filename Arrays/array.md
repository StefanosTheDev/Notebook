## Array Map

Mental Model : Take a list -> Produce new Of The Same Length. Every slot is transformed by your callback.
Signature: arr.map((item, index, array) -> newItem, thisArg?) -> newArray
Gurantees Never mutates the original array; hole remains holes
Common Pitfals: returning undefined using async callback.
Cool things I learned:
The comma operator (, ) evaluates both expressiones let say element.id and i but only returns the last one.

````
const userTransform = users.map((element, i) => {
  return element.id, i;
});
``` Would Nto work out. I would just get I  I Would have to do it differnetly.
TLDR:  in JS : return a, b aalways returns B.
## Mental Model  Of What I should remember:
-
````

##### NEW FILE NOTES
