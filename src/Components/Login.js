import React , {useState} from 'react';
  
 const Login = () => {
 const [userdata , setUserdata] = useState('');
 const [password , setPassword] = useState('');
 const [userDataFromApi, setUserDataFromApi] = useState([]);
 const handleApi = ()=>{
          
fetch('https://dummyjson.com/users', {
 method: 'POST',
 headers: { 'Content-Type' : 'application/json' },     
                            
 body: JSON.stringify({
   
   username: `${userdata}`,
   password: `${password}`,
   // expiresInMins: 60, // optional
                       
 }),
})
.then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserDataFromApi(data);
      })
      .catch((error) => {
        console.log(error);
      });
     }
              
            

  return (
    <div>
     <form>
      <label> username : &nbsp;
      <input type='text' placeholder='username' onChange={(e)=>setUserdata(e.target.value)} />
      
      </label> <br/>
      <label> Password : &nbsp;
      <input type='text' placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
      </label> <br/>
      <button onClick={handleApi}>Login</button>
     </form>
     <div>
        <h2>User Data:</h2>
        <ul>
          {userDataFromApi.map((user) => (
            <li key={user.id}>
              <span>{user.firstname}</span> 
               <span>{user.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

 }
export default Login;

 
