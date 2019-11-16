# Triple Step

A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time.
Implement a method to count how many possible ways a child can run up the stairs.

<<<<<<< HEAD

### Hint 1
Think about base cases. What if there were only one step; how many possible ways would there be?

### Hint 3
Approach this from the top down. What is the very last step the child made? 

### Hint 3
We can compute the number of steps to 100 by the number of steps to 99, 98, ands 97.
This corresponds to the child hopping 1, 2, or 3 steps at the end. 
Therefore, f(100) = f(99) + f(98) + f(97)
=======
### Hint 1
Think about base cases. What if there were only one step; how many possible ways would there be?

### Hint 2
Approach this from the top down. What is the very last step the child made? 

### Hint 3
We can compute the number of steps to 100 by the considering the number of steps to 99, 98, and 97.
This corresponds to the child hopping 1, 2, or 3 steps at the end. 
Therefore, f(100) = f(99) + f(98) + f(97)
>>>>>>> 0724dcb8f8415fe381eb0e190f2c9fe1119a679d