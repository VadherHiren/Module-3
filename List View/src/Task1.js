

function Task() {

    const getAPI = ()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=>{return res.json()})
      .then((data)=>{
        let header = "---API DATA---";
        data.map((v)=>{
         return header = header + `<li>${v.name}</li>`
        })
        document.getElementById('d1').innerHTML = header
      })  
    }
  
    
    return (
      <div >
        <li id='d1'></li>
        <button className="task_button" onClick={getAPI}>Get Api</button>
        <br/>
        <input type="text" ></input>
        <button id="search">Sreach</button>
      </div>
    );
  }
  
  export default Task;