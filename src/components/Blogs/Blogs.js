import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='answer'>
            <h1>Question and Answer Section</h1>
            <div className='question1'>
                <h3>Context API and Its Purpose</h3>
                <p>1. Context gives a way to pass data through the component tree without having to pass props down manually at every level.</p>
                <p>2. In react data is passed by props top to down parents to children for that if need to pass data in a specific component,<br>
                </br> all components before the specific components need to pass data by props.</p>
                <p>3. Context provide us to pass data explicitly to a specific children component.</p>
                <p>4. To avoid to pass data in intermediate element we should need to use context</p>
                <p>5. Context make code efficient by avoiding repeating props. </p>
            </div>
            <div className='question2'>
                <h3>Difference between Inline, Block and Inline-Block Elements</h3>
                <p>1. Inline: The difference is that display: inline-block allows to set a width and height on the element.</p>
                <p>2. Some inline element are ( a  ,  abbr  ,   img  ,  input  ,  small  ,  span  ,  strong  ,  sub  ,  sup  ,  textarea  ) etc.</p>
                <p>3. Inline-block, the top and bottom margins/paddings are allowed, but with display: inline they are not allowed.</p>
                <p>4. Some block elements are ( article  ,  aside  ,  blockquote  ,  canvas  ,  footer  ,  form  ,  h1  - h6,   header,   hr,   li,   main,   nav,   ol,   p,   pre,   section,   table,   tfoot,   ul,   video  ) etc.</p>
                <p>5. The major difference in display: block, is that display: inline-block does not add a line-break after the element, so the element can sit next to others element.</p>
            </div>

        </div>
    );
};

export default Blogs;