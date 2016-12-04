/*  
    operator = Calls
        Right-To-Left, Binary Operator
        
    Ralph McCracken, III
    December 03, 2016
*/

#include <iostream>

int main() {
    int a = 1;
    int b = 2;
    int c = 4;
    
    std::cout << "a: " << a << '\n';
	std::cout << "b: " << b << '\n';
	std::cout << "c: " << c << '\n';
	std::cout << '\n';
    
    a = b = c;
    
    std::cout << "a: " << a << '\n';
	std::cout << "b: " << b << '\n';
	std::cout << "c: " << c << '\n';
	std::cout << '\n';
	
	a = (b = c);
	
	std::cout << "a: " << a << '\n';
	std::cout << "b: " << b << '\n';
	std::cout << "c: " << c << '\n';
	std::cout << '\n';
}

/*  
    Output:
            a: 1 
            b: 2 
            c: 4 

            a: 4 
            b: 4 
            c: 4 

            a: 4 
            b: 4 
            c: 4
*/
