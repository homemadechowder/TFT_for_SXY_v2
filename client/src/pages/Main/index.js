import React, { Component } from 'react';
import './style.css';

class ItemTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            item1: '',
            item2: '',
            itemSum: '',
        };
    }

    handleClick = (event) =>{
        // name = event.target.name;
        // value = event.target.value;
    }


    render(){
        return(
            <div className = 'container'>
                <div className = 'equation'>
                    <div className = 'item1'>
                        <img src = {this.state.item1} alt={this.state.item1}>

                        </img>
                    </div>
            +
                    <div className = 'item2'>
                        <img src = {this.state.item2} alt={this.state.item2}>
                    
                        </img>
                    </div>
            =
                    <div className = 'item3'>
                        <img src = {this.state.item3} alt={this.state.item3}>
                    
                        </img>
                    </div>
                </div>

                <div className = 'selection'>
                    <div id = 'bfsword' className ='items'></div>
                    <div id = 'stick' className ='items'></div>
                    <div id = 'tear' className ='items'></div>
                    <div id = 'bow' className ='items'></div>
                    <div id = 'glove' className ='items'></div>
                    <div id = 'belt' className ='items'></div>
                    <div id = 'vest' className ='items'></div>
                    <div id = 'cloak' className ='items'></div>
                    <div id = 'gold' className ='items'></div>
                </div>
            </div>
            
        )
    }
}

export default ItemTable;