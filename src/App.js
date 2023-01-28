import logo from './logo.svg';
import './App.css';



function App() {
  const data =[
    {
      amount:"$0",
      users:"✔ single user",
      storage:"✔ 5GB storage",
      projects:"✔ 100 public projects",
      access:"✖ community access",
      privateprojects:" ✖ unlimited private projects",
      support:"✖ dedicated phone suppport",
      domain:"✖ domain",
      monthlystatus:" ✖ monthly status reports", 
    },
    {
      amount:"$12",
      users:"✔ 2 user",
      storage:"✔ 50GB storage",
      projects:"✔ 500 public projects",
      access:"✔ community access",
      privateprojects:"✔unlimited private projects",
      support:"✖ dedicated phone suppport",
      domain:"✖ free domain",
      monthlystatus:"✖ monthly status reports",
    },
    {
      amount:"$30",
      users:"✔ multiple user",
      storage:" ✔ 500GB storage",
      projects:"✔ unlimited public projects",
      access:"✔ community access",
      privateprojects:"✔ unlimited private projects",
      support:"✔ dedicated phone suppport",
      domain:"✔ free domain",
      monthlystatus:"✔ monthly status reports",
    }
  ]
  
  
  return (
    <div className="App">
        {data.map((item, idx)=>( 
        <Samplecard 
        key={idx}
       amount={item.amount}
        users={item.users}
         storage={item.storage}
         projects={item.projects}
         access={item.access}
         privateprojects={item.privateprojects}
         support={item.support}
         domain={item.domain}
         monthlystatus={item.monthly} 
           /> 
          ))}
        
    </div>
  );
}
export default App;


function Samplecard (props) {
  
  return (
    <div className='card-content'>
       <h2 class="first"> {props.amount}</h2>
       <hr></hr>

    <div class="tick"> <div class="tick-mark"></div> <p class="first">--{props.users}</p></div>
       <p class="first"> {props.storage}</p>
       <p class="first">{props.projects}</p>
       <p class="first">{props.access}</p>
       <p class="first">{props.privateprojects}</p>
       <p class="first">{props.support}</p>
       <p class="first">{props.domain}</p>
       <p class="first">{props.monthlystatus}</p>
       <input class="button" type="button" value="apply" />
       
    </div>
  )
}
