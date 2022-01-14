import react from "react";
import '../style/Interface.css';
function Interface(){
    return(
        <form>
            <label>Query:</label>
            <textarea className="Query" rows={5}></textarea>
            <br></br>
            <button className="Submit" type="submit">Submit</button>
        </form>
    );
}

export default Interface;