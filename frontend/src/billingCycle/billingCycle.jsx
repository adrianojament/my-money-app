import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentheader'
import Content from  '../common/template/content'

import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabContent from '../common/tab/tabContent'
import TabHeader from '../common/tab/tabHeader'
import { selectTab, showTabs } from '../common/tab/tabActions'

class BillingCycle extends Component {

    componentWillMount(){
        this.props.selectTab('tablist')
        this.props.showTabs('tablist', 'tabCreate')
    }

    render(){
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small ='Cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tablist'/>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>        
                        <TabsContent>                            
                            <TabContent id='tablist'> 
                                <h1>Lista</h1>
                            </TabContent>
                            <TabContent id='tabCreate'> 
                                <h1>Inclusao</h1>
                            </TabContent>
                            <TabContent id='tabUpdate'> 
                                <h1>Atualizar</h1>
                            </TabContent>
                            <TabContent id='tabDelete'> 
                                <h1>Exclusao</h1>
                            </TabContent>
                        </TabsContent>                
                    </Tabs>
                </Content>
            </div>
        )   
    }
}

const mapDispatchToProps = dispatch => bindActionCreators( {selectTab, showTabs}, dispatch )
export default connect( null, mapDispatchToProps)(BillingCycle)