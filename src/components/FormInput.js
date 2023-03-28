import React  from 'react'

function FormInput() {
    // const[name,update]=useState('');
    function updateform(event){
        event.preventDefault();
        console.log(event.target.value);

    }
  return (
  
   
    <div>
        <form action="">
            <input type="text" onClick={updateform} />
            <button onClick={updateform}>Submit</button>
        </form>
      
    </div>
  )
}

export default FormInput
