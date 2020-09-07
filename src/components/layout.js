import React from 'react'
import Wrap from './../hoc/wrap'
import Toolbar from './toolbar'
function Layout(props){
    return (
        <Wrap>
            <Toolbar></Toolbar>
            {props.children}
        </Wrap>

    )

}
export default Layout