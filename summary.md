### Array
#### Time complexity
* Access	            O(1)	
* Search	            O(n)	
* Search (sorted array)	O(log(n))	
* Insert	            O(n)	Insertion would require shifting all the subsequent elements to the right by one and that takes O(n)
* Insert (at the end)	O(1)	Special case of insertion where no other element needs to be shifted
* Remove	            O(n)	Removal would require shifting all the subsequent elements to the left by one and that takes O(n)
* Remove (at the end)	O(1)
#### Corner cases
* Empty sequence
* Sequence with 1 or 2 elements
* Sequence with repeated elements
* Duplicated values in the sequence
#### Techniques
* Sliding window
* Two pointers
* Traversing from the right
* Sorting the array
* Precomputation
* Index as a hash key
* Traversing more than once

### String
#### Time complexity
* Access	O(1)
* Search	O(n)
* Insert	O(n)
* Remove	O(n)
#### Corner cases
* Empty string
* String with 1 or 2 characters
* String with repeated characters
* Strings with only distinct characters
#### Techniques
* Counting characters
* String of unique characters
* Anagram
* Palindrome
### Hash Table
#### Time Complexity
Access	N/A	  Accessing not possible as the hash code is not known
Search	O(1)*	
Insert	O(1)*	
Remove	O(1)*	