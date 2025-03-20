import React from 'react';

function Cards(props) {
    console.log("Cards Component Rendered");
    console.log("props",props);
  return (
    <div className="flex flex-col items-center p-7 rounded-2xl">
      <div>
        <img 
          className="size-48 shadow-xl rounded-lg object-cover" 
          alt="Scenic aerial view of Cape Town" 
          src="https://images.pexels.com/photos/31083893/pexels-photo-31083893/free-photo-of-scenic-aerial-view-of-cape-town-s-coastal-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
        />
      </div>
      {/* Fixed all 'class' to 'className' */}
      <div className="flex">
        <span>Class Warfare</span>
        <span>The Anti-Patterns</span>
        <span className="flex">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
  );
}

export default Cards;
