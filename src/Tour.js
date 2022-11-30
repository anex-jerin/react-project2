import { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className='post'>
      <img src={image} alt='' />
      <h1>{name}</h1>
      <p>
        {readMore ? info : `${info.substring(0, 250)}...`}{' '}
        <button
          className='readM'
          onClick={() => {
            setReadMore(!readMore);
          }}>
          {readMore ? 'show less' : 'read more'}
        </button>
      </p>
      <h3>$ {price}</h3>
      <button className='notInt' onClick={()=>removeTour(id)}>Not Interested</button>
    </section>
  );
};

export default Tour;
