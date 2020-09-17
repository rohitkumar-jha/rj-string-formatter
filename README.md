# rj-string-formatter

This is the basic string formatter where we can format string currently in two ways

## 1 toProper:

This takes string as a input and first removes the multiple white spaces and after it converts first letter of a string inUpperCase.

- eg. 
- const stringFormatter=require('rj-string-formatter');
- let string='Hello Rohit. How are you doing?'
- let output =stringFormatter.toProper(string);
- console.log(output)
- Hello Rohit. How Are You Doing?

## 2  removeWhiteSpace:

This takes string as input and removes multiple white spaces,tabs,and new line and keep only single white space.

- eg. 
- const stringFormatter=require('rj-string-formatter'); 
- let string='Hello       Rohit.      How       are     you       doing?'
- let output =stringFormatter.removeWhiteSpace(string);
- console.log(output)
- Hello Rohit. How are you doing?

