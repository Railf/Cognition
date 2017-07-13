//
//  stack.h
//  Stack - Data Structure
//
//  Created by Ralph McCracken, III on 7/11/17.
//  Copyright © 2017 Ralph McCracken, III. All rights reserved.
//
//  Pointer-based Stack

#ifndef stack_h
#define stack_h

template<typename T>
struct Node
// { data }->next
{
    T data;
    Node<T>* next;
};



template<typename T>
class Stack
{
public:
    // House-keeping functions
                Stack();
                Stack(T data);
                Stack(T data, size_t size);
    virtual     ~Stack();
    
    // Stack-based functions
    void        Push(T data);
    T           Pop();
    T           Top();
    size_t      Size();
    void        Clear();
    
    // Helper functions
    bool        Empty();
    
    // Display functions
    void        Display();
    
private:
    // Stack data
    Node<T>*    top;
    size_t      size;
};



template<typename T>
Stack<T>::Stack()
: top(nullptr), size(0)
// Begin the stack: empty
{}

template<typename T>
Stack<T>::Stack(T data)
: top(nullptr), size(0)
// Begin the stack: one node, with data of type T
{
    Push(data);
}

template<typename T>
Stack<T>::Stack(T data, size_t elements)
: top(nullptr), size(0)
// Begin the stack: elements number of nodes, with data of type T
{
    for(size_t i = 0; i < elements; i++) Push(data);
}

template<typename T>
Stack<T>::~Stack()
// Remove all variable-spaced objects
{
    Clear();
}

template<typename T>
void Stack<T>::Push(T data)
// Add node to stack and increase size
{
    Node<T>* newNode = new Node<T>();
    newNode->data = data;
    newNode->next = top;
    
    top = newNode;
    ++size;
}

template<typename T>
T Stack<T>::Pop()
// If not empty, remove node from stack and reduce size
{
    if(!Empty())
    {
        T popped = top->data;
        Node<T>* oldTop = top;
        top = oldTop->next;
    
        delete oldTop;
        --size;
        
        return popped;
    }
    else
    {
        std::cout << "\n\n  ** Unable to Pop an empty stack.  \n\n";
        exit(1);
    }
}

template<typename T>
T Stack<T>::Top()
// Return the top-most element of the stack
{
    return top->data;
}

template<typename T>
size_t Stack<T>::Size()
// Return the size of the stack
{
    return size;
}

template<typename T>
void Stack<T>::Clear()
// Pop a node from the stack until empty
{
    while(!Empty()) Pop();
}

template<typename T>
bool Stack<T>::Empty()
// If the top-most element is equal to nullptr, the stack is empty
{
    return (top == nullptr);
}

template<typename T>
void Stack<T>::Display()
{
    if (!Empty())
    {
        std::cout << "(top) -> ";
        Node<T>* iteratorNode = top;
        while(iteratorNode != nullptr)
        {
            std::cout << iteratorNode->data;
            std::cout << "\n      -> ";
            iteratorNode = iteratorNode->next;
        }
        std::cout << "(bottom)\n\n";

    }
    else
        std::cout << "(top) -> nullptr\n(bottom)  \n\n";
}

#endif /* stack_h */
