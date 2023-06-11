import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>Terms and Conditions</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nec velit sit amet tellus efficitur tincidunt.
                Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia Curae; Vivamus sit amet
                dui sit amet tellus efficitur tincidunt. Nulla facilisi.
                Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia Curae; Vivamus sit amet dui sit amet
                tellus efficitur tincidunt. Nulla facilisi. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae; Vivamus sit amet dui sit amet tellus efficitur
                tincidunt. Nulla facilisi. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae;
                Vivamus sit amet dui sit amet tellus efficitur tincidunt.
                Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia Curae; Vivamus sit amet
                dui sit amet tellus efficitur tincidunt. Nulla facilisi.
            </p>
            <p>Go to Register <Link to='/register'>Here</Link></p>
        </div>
    );
};

export default Terms;