import React ,{useState} from 'react'

import propTypes from 'prop-types'

export default function Textarea(props) {

const word_count = () =>{
    let sp=Text.toString().split(" ");
    let i,count=0;
    for(i=0;i<sp.length;i++){
      if(sp[i]!=''){
        count+=1;
      }
    }
    // console.log(count);
return count;

}


    const copyOnclick =()=>{
        document.getElementById("mytext").select();
document.execCommand("copy");
props.show_alert("Text have been copied","success");
    }


    const clearOnclick =()=>{
   setText("");
props.show_alert("Text have been cleared","success");
    }
    
const removespacesOnclick =()=>{
    let arr=Text.split(" ");
for(let i=0;i<arr.length;i++){
  arr[i].trim();
}


let i,k=0;
let arr1=[0];
for(i=0;i<arr.length;i++){
 
  if(arr[i]!= ''){
    arr1[k]=arr[i];
    k++;

  }
}


setText(arr1.join(" "));
}




    const upperOnclick = () =>{
        console.log("UpperCase is clicked");
        let newupper= Text.toUpperCase();
    setText(newupper);
    props.show_alert("Text have been Converted to UpperCase","success");
}



const handleChange = (event) =>{
    console.log("OnChange  is invoked");
    setText(event.target.value);
}
const lowerOnclick = ()=> {
    console.log("converted to lower case");
    setText(Text.toLowerCase());
    props.show_alert("Text have been Converted to LowerCase","success");
}

const capOnclick = () =>{
    
    let arr1=Text.toString().split(" ");
    let i;
    for(i=0;i<arr1.length;i++){
        
        let vv=arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1).toLowerCase();
        arr1[i]=vv;
    }
    let mm=arr1.toString().replace(/,/g," ");
    setText(mm);


    props.show_alert("Text have been Converted to Capitalize","success");
    }

//we must use states in same format
// "Text" is name of the variable and "setText" is the function used to change the value of variable "Text"
    const [Text,setText]= useState("Text");


    return (
<>
<div className='container'  >
    {/* Here /\/\/\/\/\/\/\ we had use curly braces two times because here we had written object and whenever we write object it is must to use double curly braces*/}

<h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" value={Text}  onChange={handleChange}  id="mytext"  rows="9" cols="100" ></textarea>
</div>
<button className="btn btn-primary" id="f1" onClick={upperOnclick}>Upper case</button>
<button className="btn btn-primary mx-3" id="f2" onClick={lowerOnclick}>Lower case</button>
<button className="btn btn-primary mx-1" id="f3" onClick={capOnclick}>Capatilise case</button>
<button className="btn btn-primary mx-1" id="f4" onClick={copyOnclick}>Copy</button>
<button className="btn btn-primary mx-1" id="f5" onClick={clearOnclick}>Clear</button>
<button className="btn btn-primary mx-1" id="f6" onClick={removespacesOnclick}>Remove spaces</button>
        {/*btn-primary is a kind of property of bootstrap */}
        </div>

        <div>
         <h1>It's your text Summary.</h1>
         {/* <p>{Text.toString().split(" ").length} words and {Text.length} characters</p> */}
         <p>{word_count()} words and {Text.length} characters</p>
        <p>{0.008*Text.toString().split(" ").length} Minutes requires to read</p>

        <h2>Preview</h2>
        <p>{Text}</p>
        
        </div>

        </>
    );
}

Textarea.propTypes ={
    heading:propTypes.string.isRequired
}

Textarea.default={
    heading:'hey enter your text here'
}