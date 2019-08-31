import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate } from './billingCycleActions'

class billingCycleList extends Component{

    componentWillMount(){
        this.props.getList()        
    }

    render() {        
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.RenderRows()}
                    </tbody>
                </table>
            </div>
        )
    }

    RenderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <button 
                        className='btn btn-warning' 
                        onClick={() => this.props.showUpdate(bc)}>
                        <i className='fa fa-pencil'/>                            
                    </button>
                </td>
            </tr>
        ))
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(billingCycleList)