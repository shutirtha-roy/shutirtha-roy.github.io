//Regular Expression
//=============================

//What is Regular Expression
//=============================
//A regular expression is a sequence of characters that define a pattern

//** Learn once use Everywhere **


//validating Email, phone
//============================
//...pattern
//admin@webdeveloperbd.net
//samimfazlu@gmail.com
//text@text.text
//....
//....
//....
//phone number validation
//8801759995266
//01759995266
//01859995266
//01959995266
//+8801759995266

//(+)?(88)?01(number)operator(number)8


//regexr.com
//Special meaning


//Matching sequence or character/

// .: works as an alternative to (Any character)
// *: (match 0 or more of preceding token)
// ?: (match 0 or 1 of preceding token)
// +: (match 1 or more of preceding token)
// \: (escaping .) ("\.")
// (): grouping
// {}: range if number inside
// (grouping)?
// a|b(a or b)
// \bword\b
// \d(digit)
// /w(wordnumber_)
// \s(space, tabs, linebreaks)
// \W(other than \w)
// \D(other than \d)
// \S(other than \s)
// [a-zA-Z0-9_] [\w]
// [^\w] - [\W]
// [0-9] [\d]
// [^\d] [\D]

// () \1 - capturing group
// (?:) - non capturing group
// abc(?=) - positive lookahead
// abc(?!) - Negative lookahead
// \+?(88)?01\d\d{8}