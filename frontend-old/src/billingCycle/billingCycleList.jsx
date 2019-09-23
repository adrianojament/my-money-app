import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './billingCycleActions'

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
                            <th className='table-actions'>Ações</th>
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
                    <button 
                        className='btn btn-danger' 
                        onClick={() => this.props.showDelete(bc)}>
                        <i className='fa fa-trash-o'/>                            
                    </button>
                </td>
            </tr>
        ))
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(billingCycleList)