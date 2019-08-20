export function selectTab(tabId){    
    return {
        type: 'TAB_SELECTED', 
        payload: tabId
    }
}

//Vai passar os parametros e vai gerar array de valores dos parametros
//showTabs('tab01', 'tab02', 'tab03' )
export function showTabs(...tabIds){
    //Criação de Empty
    const tabsToShow = {}
    
    // Criando uma propriedade dentro do tabsToShow
    tabIds.forEach(e => tabsToShow[e] = true)

    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}