import React from 'react';
import Fscard from './Fsectioncards';
function Sectionone(){
return (
<div className="container-fluid p-1 my-3 shadow-none px-3" style={{background:"#f1f2f6"}}>
<div className="row mx-auto my-3 p-2 mx-auto rounded" style={{boxShadow:"0 0 0.5rem #535c68"}}>
<Fscard 
    icon="projectimg/read.svg"
    subt="Numbers of learners"
    num="3000+"
/>
<Fscard 
    icon="projectimg/mycontant.png"
    subt="Total courses povided"
    num="300+"
/>
<Fscard 
    icon="projectimg/man.svg"
    subt="Numbers of instructor"
    num="100+"
/>
</div>
</div>



);
}

export default Sectionone;