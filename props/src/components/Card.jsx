import React from 'react';

const Card = (props) => {
    return (
        <div>
            <div className="container">
              <div className="profile-card">
              <img src = {props.img}/>


             <h1 class="profile-name">{props.users}   { props.age}</h1>
             <p class="profile-about">
                Passionate designer and developer creating beautiful digital experiences. 
                 I love turning ideas into reality through clean code and thoughtful design.
             </p>
            <button class="profile-button">View Portfolio</button>
           </div>
          </div>
       </div>
    );
};

export default Card;