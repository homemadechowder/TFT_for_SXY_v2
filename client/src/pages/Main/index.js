import React, { Component } from 'react';
import './style.css';

class ItemTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            item1: '',
            item2: '',
            itemSum: '',
            itemName: '',
            itemInfo: ''
        };
    }


    handleClick = (event) =>{
        const id = event.target.id;
        // value = event.target.value;

        if (this.state.item1 === '' && this.state.item2 === ''){
            this.setState({
                item1:id
            }, () => {
                this.handleEquation(this.state.item1, this.state.item2);
            });

        }
        else if (this.state.item1 !== '' && this.state.item2 === ''){
            this.setState({
                item2:id
            }, () => {
                this.handleEquation(this.state.item1, this.state.item2);
            });
           
        }
        else{
            this.setState({
                item1: id,
                item2: '',
                itemSum: '',
                itemName: '',
                itemInfo: ''
            }, () =>{
                this.handleEquation(this.state.item1, this.state.item2);
            });

        }
       
    }

    handleEquation = (item1, item2) =>{
        if (item1 === 'bfsword' || item2 === 'bfsword'){
            if(item1 === 'bfsword' && item2 ==='bfsword'){
                this.setState({
                    itemSum: 'deathblade',
                    itemName: 'Death Blade',
                    itemInfo: '+30 Attack Damage, +30 for every takedown'
                }) 
            }  
            else if(item1 ==='vest' || item2 ==='vest'){
                this.setState({
                    itemSum: 'GA',
                    itemName: 'Guardian Angel',
                    itemInfo: '復活'
                })    
            }   
            else if(item1 ==='belt' || item2 ==='belt'){
                this.setState({
                    itemSum: 'zeke',
                })    
            }   
            else if(item1 ==='stick' || item2 ==='stick'){
                this.setState({
                    itemSum: 'gunblade',
                })    
            }   
            else if(item1 ==='cloak' || item2 ==='cloak'){
                this.setState({
                    itemSum: 'bloodthirster',
                })    
            }   
            else if(item1 ==='bow' || item2 ==='bow'){
                this.setState({
                    itemSum: 'giantkill',
                })    
            }   
            else if(item1 ==='gold' || item2 ==='gold'){
                this.setState({
                    itemSum: 'blademaster',
                })    
            }   
            else if(item1 ==='tear' || item2 ==='tear'){
                this.setState({
                    itemSum: 'shojin',
                })    
            }      
            else if(item1 ==='glove' || item2 ==='glove'){
                this.setState({
                    itemSum: 'infinity',
                })    
            }   
        }

        else if (item1 === 'vest' || item2 === 'vest') {
            if(item1 ==='vest' && item2 ==='vest'){
                this.setState({
                    itemSum: 'bramble',
                })    
            }   
            else if(item1 ==='belt' || item2 ==='belt'){
                this.setState({
                    itemSum: 'redbuff',
                })    
            } 
            else if(item1 ==='stick' || item2 ==='stick'){
                this.setState({
                    itemSum: 'solari',
                })    
            }   
            else if(item1 ==='cloak' || item2 ==='cloak'){
                this.setState({
                    itemSum: 'swordbreaker',
                })    
            }   
            else if(item1 ==='bow' || item2 ==='bow'){
                this.setState({
                    itemSum: 'titanresolve',
                })    
            }   
            else if(item1 ==='gold' || item2 ==='gold'){
                this.setState({
                    itemSum: 'rebel',
                })    
            }   
            else if(item1 ==='tear' || item2 ==='tear'){
                this.setState({
                    itemSum: 'frozen',
                })    
            }      
            else if(item1 ==='glove' || item2 ==='glove'){
                this.setState({
                    itemSum: 'shroudsad',
                })    
            }  
        }

        else if (item1 === 'belt' || item2 === 'belt') { 
            if(item1 ==='belt' && item2 ==='belt'){
                this.setState({
                    itemSum: 'warmog',
                })    
            } 
            else if(item1 ==='stick' || item2 ==='stick'){
                this.setState({
                    itemSum: 'morello',
                })    
            }   
            else if(item1 ==='cloak' || item2 ==='cloak'){
                this.setState({
                    itemSum: 'zephyr',
                })    
            }   
            else if(item1 ==='bow' || item2 ==='bow'){
                this.setState({
                    itemSum: 'rot',
                })    
            }   
            else if(item1 ==='gold' || item2 ==='gold'){
                this.setState({
                    itemSum: 'protector',
                })    
            }   
            else if(item1 ==='tear' || item2 ==='tear'){
                this.setState({
                    itemSum: 'redemption',
                })    
            }      
            else if(item1 ==='glove' || item2 ==='glove'){
                this.setState({
                    itemSum: 'trapclaw',
                })    
            }  
        }

        else if (item1 === 'stick' || item2 === 'stick'){
            if(item1 ==='stick' && item2 ==='stick'){
                this.setState({
                    itemSum: 'hat',
                })    
            }   
            else if(item1 ==='cloak' || item2 ==='cloak'){
                this.setState({
                    itemSum: 'ionic',
                })    
            }   
            else if(item1 ==='bow' || item2 ==='bow'){
                this.setState({
                    itemSum: 'guinsoo',
                })    
            }   
            else if(item1 ==='gold' || item2 ==='gold'){
                this.setState({
                    itemSum: 'demo',
                })    
            }   
            else if(item1 ==='tear' || item2 ==='tear'){
                this.setState({
                    itemSum: 'luden',
                })    
            }      
            else if(item1 ==='glove' || item2 ==='glove'){
                this.setState({
                    itemSum: 'jeweled',
                })    
            }  
        }

        else if (item1 === 'cloak' || item2 === 'cloak') {
            if(item1 ==='cloak' && item2 ==='cloak'){
                this.setState({
                    itemSum: 'dclaw',
                })    
            }   
            else if(item1 ==='bow' || item2 ==='bow'){
                this.setState({
                    itemSum: 'runan',
                })    
            }   
            else if(item1 ==='gold' || item2 ==='gold'){
                this.setState({
                    itemSum: 'celestial',
                })    
            }   
            else if(item1 ==='tear' || item2 ==='tear'){
                this.setState({
                    itemSum: 'icecream',
                })    
            }      
            else if(item1 ==='glove' || item2 ==='glove'){
                this.setState({
                    itemSum: 'quicksilver',
                })    
            }  
        }
        else if (item1 === 'bow' || item2 === 'bow'){
            if(item1 ==='bow' && item2 ==='bow'){
                this.setState({
                    itemSum: 'rpc',
                })    
            }   
            else if(item1 ==='gold' || item2 ==='gold'){
                this.setState({
                    itemSum: 'infiltrator',
                })    
            }   
            else if(item1 ==='tear' || item2 ==='tear'){
                this.setState({
                    itemSum: 'static',
                })    
            }      
            else if(item1 ==='glove' || item2 ==='glove'){
                this.setState({
                    itemSum: 'lastwhisper',
                })    
            }  
        }

        else if (item1 === 'gold' || item2 === 'gold'){
            if(item1 ==='gold' && item2 ==='gold'){
                this.setState({
                    itemSum: 'fon',
                })    
            }   
            else if(item1 ==='tear' || item2 ==='tear'){
                this.setState({
                    itemSum: 'sg',
                })    
            }      
            else if(item1 ==='glove' || item2 ==='glove'){
                this.setState({
                    itemSum: 'darkstar',
                })    
            }  
        }

        else if (item1 === 'tear' || item2 === 'tear'){
            if(item1 ==='tear' && item2 ==='tear'){
                this.setState({
                    itemSum: 'seraph',
                })    
            }      
            else if(item1 ==='glove' || item2 ==='glove'){
                this.setState({
                    itemSum: 'handofjustice',
                })    
            }  
        }

        else if (item1 === 'glove' || item2 === 'glove'){   
            if(item1 ==='glove' && item2 ==='glove'){
                this.setState({
                    itemSum: 'thieve',
                })    
            }  
        }
    }


    render(){
        return(
            <div className = 'container'>
                <h1>ITEM CALCULATOR FOR SXY MY BB</h1>
                <div className = 'equation'>
                    <div id = {this.state.item1} className = 'item1'>
                    </div>
                    <div className = 'operation'> &#43; </div>
                    <div id = {this.state.item2} className = 'item2'>
                    </div>
                    <div className = 'operation'> &#61; </div>
                    <div id = {this.state.itemSum} className = 'item3'>
                    </div>
                    <br/>
                    <div className = "description">
                        <div id = {this.state.itemSum} className = 'item3'></div>
                        <h1>{this.state.itemName}</h1>
                        <p>{this.state.itemInfo}</p>
                    </div>
                </div>

                <div className = 'selection'>
                    <div onClick = {this.handleClick} id = 'bfsword' item = 'bfsword' className = 'items'></div>
                    <div onClick = {this.handleClick} id = 'stick' item = 'stick' className = 'items'></div>
                    <div onClick = {this.handleClick} id = 'tear' item = 'tear' className = 'items'></div>
                    <div onClick = {this.handleClick} id = 'bow' item = 'bow' className = 'items'></div>
                    <div onClick = {this.handleClick} id = 'glove' item = 'glove' className = 'items'></div>
                    <div onClick = {this.handleClick} id = 'belt' item = 'belt' className = 'items'></div>
                    <div onClick = {this.handleClick} id = 'vest' item = 'vest' className = 'items'></div>
                    <div onClick = {this.handleClick} id = 'cloak' item = 'cloak' className = 'items'></div>
                    <div onClick = {this.handleClick} id = 'gold' item = 'gold' className = 'items'></div>
                </div>
            </div>
            
        )
    }
}

export default ItemTable;