import React, {useState} from 'react';

const BoxForm = () =>{

    const[boxColor, setBoxColor] = useState("");


    const[allBoxes, setAllBoxes] = useState([]);



    //changehandler
    const changeHandler = (e) =>{
        setBoxColor(e.target.value);
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log("Submitted the form")

        setAllBoxes([...allBoxes, boxColor])
        setBoxColor("");
    }


    return(
        <div>
            <form onSubmit = {submitHandler} className="form-inline">
                <div className="form-group">
                    <label for="boxColor">BoxColor:</label>
                    <input onChange = {changeHandler} type="text" className="form-control" name="boxColor" value = {boxColor}></input>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Add</button>
            </form>


            
            <div>
                {
                    allBoxes.map(box=>{
                        return <div className = "container" style = {{backgroundColor:box, height:"50px", width:"50px"}} >
                            {box}
                        </div>
                    })
                
                }
                
            </div>

        </div>
    )
}
export default BoxForm;








    