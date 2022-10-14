import React from "react";
import Sidebar from "./Sidebar";

const Main = () => {
  const myComponent = {
    width: '1000px',
    height: '410px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    align:'left',
};

    return (

    <div>
  <div className="article" style={myComponent}>
    <h1 style={{align:"center"}}>ES-6 Features</h1>
    <br/>
    <h2>What is ES6</h2>
    <p>ES6 or the ECMAScript 2015 is the 6th and major edition of the ECMAScript language specification standard. It defines the standard for the implementation of JavaScript and it has become much more popular than the previous edition ES5.

ES6 comes with significant changes to the JavaScript language. It brought several new features like, let and const keyword, rest and spread operators, template literals, classes, modules and many other enhancements to make JavaScript programming easier and more fun. In this article, we will discuss some of the best and most popular ES6 features that we can use in your everyday JavaScript coding.
<br/>
let and const Keywords<br/>
Arrow Functions<br/>
Multi-line Strings<br/>
Default Parameters<br/>
Template Literals<br/>
Destructuring Assignment<br/>
Enhanced Object Literals<br/>
Promises<br/>
Classes<br/>
Modules</p>
<br/>
<h2>1. let and const keyword</h2>
<p>The keyword "let" enables the users to define variables and on the other hand, "const" enables the 
  users to define constants. Variables were previously declared using "var" which had function scope 
  and were hoisted to the top. It means that a variable can be used before declaration. But, the "let" 
  variables and constants have block scope which is surrounded by curly-braces "{}" and cannot be used before declaration.</p>
  <h2>2. Arrow Functions</h2>
  <p>ES6 provides a feature known as Arrow Functions. It provides a more concise syntax for writing function expressions by removing the "function" and "return" keywords.

Arrow functions are defined using the fat arrow (=>) notation.</p>
let i = 10;<br/>
console.log(i);   //Output 10
<br/>
const PI = 3.14;<br/>
console.log(PI);  //Output 3.14
<h2>3. Multi-line Strings</h2>
<p>ES6 also provides Multi-line Strings. Users can create multi-line strings by using back-ticks(`).
<br/>
It can be done as shown below :
<br/></p>
<pre>let greeting = `Hello World,     
                Greetings to all,
                Keep Learning and Practicing!`</pre>
<h2>4. Default Parameters</h2>
<p>In ES6, users can provide the default values right in the signature of the functions. But, in ES5, OR operator had to be used.</p><br/>
<p>let calculateArea = function(height = 100, width = 50) {  <br/>
    
}</p>
<h2>5. Template Literals</h2>
<p>ES6 introduces very simple string templates along with placeholders for the variables. The syntax for using the string
   template is $(PARAMETER) and is used inside of the back-ticked string.</p>
<h2>6. Destructuring Assignment</h2>
<p>Destructuring is one of the most popular features of ES6. The destructuring assignment is an expression that makes it easy to extract values from arrays, or properties from objects, into distinct variables.

There are two types of destructuring assignment expressions, namely, Array Destructuring and Object Destructuring. It can
 be used in the following manner :</p>
 <h2>8. Promises</h2>
 <p>In ES6, Promises are used for asynchronous execution. We can use promise with the arrow function as demonstrated below.
 var asyncCall =  new Promise((resolve, reject)
 </p>
 <h2>9. Classes</h2>
 <p>Previously, classes never existed in JavaScript. Classes are introduced in ES6 which looks similar to classes in other object-oriented languages, such as C++, Java, PHP, etc. But, they do not work exactly the same way. ES6 classes make it simpler to create objects, implement inheritance by using the "extends" keyword and also reuse the code efficiently.

In ES6, we can declare a class using the new "class" keyword followed by the name of the class.</p>
<h2>10. Modules</h2>
<p>Previously, there was no native support for modules in JavaScript. ES6 introduced a new feature called modules, in which each module is represented by a separate ".js" file. We can use the "import" or "export" statement in a module to import or export variables, functions, classes or any other component from/to different files and modules.</p>
  </div>
    <Sidebar />
    </div>
    )
};

export default Main;
