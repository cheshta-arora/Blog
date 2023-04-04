import "./Write.css";
import gif from '../../components/images/travel6.gif'
import Navbar from "../../components/navbar/Navbar"

export default function Write() {
  return (
    <>
    {/* <Navbar/> */}
    <div className="write">
          <div className="title"><h3 style={{textAlign:'center',  fontFamily: "Varela Round, Arial, Helvetica, sans-serif",   color: 'rgb(138, 209, 232)'}}>share your story <br/>with us </h3></div>
      <img
        className="writeImg"
        src={gif}
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <hr />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Send
        </button>
      </form>
    </div>
    </>
  );
}