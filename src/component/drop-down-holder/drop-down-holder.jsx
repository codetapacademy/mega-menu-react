import React, { Component } from 'react'

class DropDownHolder extends Component{
    render(){

        const somethingNew = this.props.somethingNew;
        let dropdownHeaderText =  somethingNew && somethingNew.dropdownHeaderText || 'jhg'
        console.log(somethingNew)
        return(

            <h1>{dropdownHeaderText}</h1>
        )
    }

}
export default DropDownHolder;
