import React, { Component } from 'react'
import axios from 'axios'
import Loading from './Loading';
export default class Users extends Component {

    state={users:[],isLoaded:false,error:false}

    componentDidMount() {
        setTimeout(() => {
          
          axios.get("https://jsonplaceholder.typicode.com/users").then(
            (result) => {
              this.setState({
                isLoaded: true,
                users: result.data,
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error,
              });
            }
          );
        }, 5000);
      }
  render() {
   const {isLoaded, users,error}= this.state;

    if(error){
        return <div>error:  {error.message}</div>
    }
    else if(!isLoaded){
        return <div><Loading/></div>
    }
    else{
        return (
            <div>
        
           <ul>
              {users.map(user => 
                  <li key={user.id}>
      
      {user.username} - {user.name}
                  </li>
                  )}
           </ul>
                
            </div>
          )
            
    }
  }
}