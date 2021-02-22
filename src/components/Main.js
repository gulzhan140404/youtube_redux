import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Detail } from './Detail/Detail'
import Home from './Home/Home'
import Search from './Search/Search'


export default function Main() {
    return (
        
        <>
        <Search/>
       
            <Switch>
                <Route 
                    path='/' 
                    component={Home} 
                    exact/>
                <Route 
                    path='/:value' 
                    component={Home} 
                    exact/>
                <Route 
                    path='/detail/:videoId' 
                    component={Detail}
                    exact/>
            </Switch>
        </>
    )
}
