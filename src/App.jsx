import { useState } from 'react'



function App() {
  const [title, setTitle] = useState('');
   const [details, setdetails] = useState('');
   const [task,setTask]= useState([]);



  const submition = (e)=>{
    e.preventDefault();
    console.log(title);
    console.log(details);
    const newtask=[...task]
    newtask.push({
      title,
      details
    })
    console.log(newtask)

    setTitle('')
    setdetails('')

    setTask(newtask);
    
  }
  function deletetask(id){

    const copytask=[...task];
    console.log(copytask[id]);
    copytask.splice(id,1);
    setTask(copytask)
    // console.log("deleted.......",iid);


  }
  


  // function detailsEdit(e){
  //   setdetails(e.target.value);
  //     console.log(details)
  // }

  return (
    <div className="bg-gray-900 text-white min-h-screen p-10 lg:flex lg:gap-10  ">
      <form className="flex flex-col gap-4 lg:w-1/2" onSubmit={(e)=>{
        submition(e);
      }}>
        <h1 className="text-3xl font-bold mb-4">Notes App</h1>
        <input type="text" className='bg-blue-200 text-black w-100 p-4 rounded-xl' placeholder="Enter Title" value={title} onChange={(e)=>{
          setTitle(e.target.value)
         
        }}/>
        <textarea className='bg-blue-200 text-black w-100 h-30 p-2 rounded-[7px]' placeholder="Write your note here..." value={details} onChange={(elem)=>{
         setdetails(elem.target.value)
        }}></textarea>
        <button type="submit" className="bg-blue-500 text-white p-4 rounded-xl hover:bg-green-600 w-fit">Add Note</button>
      </form>
      <div className=" bg-gray-900  lg:w-1/2 p-4 ">
        <h2 className="text-2xl font-bold mb-4">Your Notes</h2>
        <div className= 'flex flex-wrap gap-4 '>
          {task.map((params,idx)=>{
            
             return (
            <div className="bg-gray-700 p-5 rounded-xl w-50 min-h-60 gap-4  flex flex-col justify-between overflow-auto " key={idx}>
              <div>
                 <h1 className='text-2xl font-bold mb-5 wrap-break-word'>{params.title}</h1>
              <p className='wrap-break-word'>{params.details}</p>
              </div>
              <button className='bg-red-500 p-2  rounded-[10px]' onClick={(e)=>{
                deletetask(idx)
              }}>delete</button>
        </div>
          )
          })}
          
         
        
       
       
       
       

          </div>
      </div>
      </div>
  )
}

export default App
