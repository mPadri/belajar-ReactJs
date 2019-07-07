import React, {Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import DataBuku from './DataBuku'
import Popular from './Popular'
import Navbar from './Navbar';

class App extends Component{


    render(){
        return(
            <BrowserRouter>
            <div className="container">
                <h1>Web Buku</h1>
                <Navbar/>
                <Route exact path="/" component={Popular}/>
                <Route path="/daftar-buku" component={DataBuku}/>  
            </div>
            </BrowserRouter>
        )
    }
}

export default App