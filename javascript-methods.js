/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  res=[]
  for (let i=0; i<this.length; i++) {
      if (this[i]==undefined) continue;
      res.push(callbackFn(this[i]));
  }
  return res
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  res=[];
  for (let i=0; i<this.length;i++) {
	  if (this[i]==undefined) continue;
      if (callbackFn(this[i])) res.push(this[i]);
  }
  return res
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  for (let i=0; i<this.length; i++) {
      if (this[i]==undefined) continue;
      if (callbackFn(this[i])) return true;
  }
  return false;
};


// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for (let i=0; i<this.length; i++){
      if (this[i]==undefined) continue;
      if (!callbackFn(this[i])) return false;
  }
  return true;
};


// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
    let res;
    for (let i=0; i<this.length; i++) {
        if (i==0) {
            res=callbackFn(this[i],this[i]);
        }
        else {
            res=callbackFn(res,this[i]);
        }
    }
    return res;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for (let i=0; i<this.length; i++) {
      if (this[i]==searchElement) return true;
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
    for (let i=0; i<this.length ;i++){
        if (this[i]==searchElement) return i;
    }
    return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
    for (let i=this.length-1; i>=0; i--) {
        if (this[i]==searchElement) return i;
    }
    return -1;
};


// KEYS //
Object.myKeys = function(object) {
    let res=[];
    for (var key in object) {
        if (key=="myKeys") continue; // "myKeys" key included by default
        res.push(key);
    }    
    return res;
};

// VALUES //
Object.myValues = function(object) {
    res=[];
    for (var key in object) {
        res.push(object[key]);
    }
    res.pop(); // [Function] being appended and I don't know why
    return res;
};