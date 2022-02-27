import { Rate } from 'antd';
import React from 'react';

function FilterByRate({Rating, isRating, rate, setRate}) {
    let desc=["horrible","bad","good","superb","adorable"]
  return (
  <div>
      {isRating? <div> 
          <Rate disabled value={Rating} />
      </div>:
      <div> 
          <Rate tooltips={desc}
          value={rate}
           onChange={(e)=>setRate(e)} />
      </div>}
  </div>);
}

export default FilterByRate;
