/*  
    	Array Manipulation
        	Array Arithmetic
        
    	Ralph McCracken, III
    	November 18, 2016
*/

#include <iostream>

const int arraySize = 5;          	// Global const, integer variable, arraySize
                                  	// Initialized to 5 -- arbitrary

int main()
{
	int ar[arraySize];              // Create integer array, ar, using arraySize variable (size of 5).
	ar[3] = 7;                      // Assign the value of 7 to the array, location 3 (0 - 4).
	
	int *A = ar;                    // Create integer pointer, A, and assign integer array, ar, to it.
	
	                                // ================================================================
	                                // = OUTPUT TO SCREEN                                             =
	                                // ================================================================
	                                // Different methods to output the value stored at arr[3].
	                            
	std::cout << ar[3]   << "\n";   // Display ar[3], 7; newline
	
	std::cout << *(A+3)  << "\n";   // Display dereferenced (A+3), 7; newline
	
	std::cout << *(ar+3) << "\n";   // Display dereferenced (ar+3), 7; newline
	
	std::cout << A[3]    << "\n";   // Display A[3], 7; newline
}

/* 
	Outputs:
            	7
            	7
            	7
	    	7
*/
