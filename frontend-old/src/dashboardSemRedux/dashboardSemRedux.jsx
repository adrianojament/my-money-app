import React, {Component} from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentheader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

const BASE_URL = 'http://localhost:3003/api'

class Dashboard2 extends Component{

    constructor(props){
        super(props)
        this.state = {credit: 0, debt: 0}
    }

    componentWillMount(){
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then(resp => this.setState(resp.data))
    }

    render() {        
        const {credit, debt} = this.state
        return (
            <div >
                <ContentHeader title='Dashboard' small='Versao 1.0 sem Redux' />
                <Content>
                    <Row>
                        <ValueBox 
                            cols='12 4' 
                            color='green' 
                            icon='bank' 
                            value={`R$ ${credit}`}
                            text= 'Total de Créditos'/>     
                        <ValueBox 
                            cols='12 4' 
                            color='red' 
                            icon='credit-card' 
                            value={`R$ ${debt}`}
                            text= 'Total de Débitos'/>     
                        <ValueBox 
                            cols='12 4' 
                            color='blue' 
                            icon='money' 
                            value={`R$ ${credit-debt}`}
                            text= 'Total Consolidados'/>     
                    </Row>
                </Content>
            </div>
        )
    }
}


export default Dashboard2