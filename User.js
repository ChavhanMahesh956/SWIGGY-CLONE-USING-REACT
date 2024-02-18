// import { useState , useEffect} from "react";

// const User = ({name}) =>{
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//     const timer =  setInterval= (()=>{
//         console.log("Hello");
//      },1000);

//      console.log("useEffect");

//      return()=> {
//      clearInterval = (timer);
//         console.log("Stop");
//      }
    
//     }, []);
//     console.log("Render")

    

//     console.log("BTN is clicked");
//     return (                                      // Functional Component is created using useState();
//         <div className="aboutCard">    
//             <h5>count : {count}</h5>
//             <button className="btn-click" onClick={()=>{
//                 setCount( count + 1);
//             }}>Increment </button>
//             <h5>{name}</h5>
//             <h5>Location: Pune</h5>
//             <h5>Contact: 9529882007</h5>
//         </div>
//     );
// }

// export default User; 