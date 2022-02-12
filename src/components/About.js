import React,{useState} from 'react'

export default function About() {
//     let style_obj={
// color:"black",
// backgroundColor:"white"
//     };

const [style_obj,setStyle_obj]=useState({
    color:"black",
    backgroundColor:"white"
        
});

const [mode,setMode]=useState("Dark Mode");

 const toggle =()=>{
     if(style_obj.color === 'black'){
        setStyle_obj({
            color:'white',
            backgroundColor:'black',
            border:'1px solid white'
        });
        setMode("Light Mode");
    }
    else 
    {
        setStyle_obj({
            color:'black',
            backgroundColor:'white'
        });
        setMode("Dark Mode");
    }
 }

    return (
        <div className='container my-1' style={style_obj}>
            <h1>About Us</h1>
            <div class="accordion" id="accordionExample" style={style_obj}>
  <div class="accordion-item" style={style_obj}>
    <h2 class="accordion-header" id="headingOne" style={style_obj}>
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={style_obj}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={style_obj}>
      <div class="accordion-body" style={style_obj}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
       </div>
  <div class="accordion-item" style={style_obj}>
    <h2 class="accordion-header" id="headingTwo" style={style_obj}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={style_obj}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={style_obj}>
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={style_obj}>
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={style_obj}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={style_obj}>
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
 <button className='btn btn-primary my-3' onClick={toggle}>{mode}</button>
        </div>
    )
}
