import React from 'react';
import './Blog.css'


const Blog = () => {
    return (
        <div className=' mt-10 mb-10'>
            <h3 className='text-4xl text-orange-400 text-center'>Answer to the Question:</h3>
            <div className='section-style  mt-4'>
                <h3 className='text-2xl font-bold text-center mb-7'> Ques:1 What are the different ways to manage a state in a React application?</h3>
                <p><strong>Ans:</strong> Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p>
            </div>
            <div className='section-style  mt-4'>
                <h3 className='text-2xl font-bold text-center mb-7'> Ques:2 How does prototypical inheritance work?</h3>
                <p><strong>Ans:</strong> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the  of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className='section-style  mt-4'>
                <h3 className='text-2xl font-bold text-center mb-7'> Ques:3 What is a unit test? Why should we write unit tests?</h3>
                <p><strong>Ans:</strong> The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className='section-style  mt-4'>
                <h3 className='text-2xl font-bold text-center mb-7'> Ques: React vs. Angular vs. Vue?</h3>
                <p><strong>Ans:</strong> React is a UI library, Angular is a fully-fledged front-end framework, while Vue. js is a progressive framework. They can be used almost interchangeably to build front-end applications, but they're not 100 percent the same, so it makes sense to compare them and understand their differences.</p>
            </div>
        </div>
    );
};

export default Blog;