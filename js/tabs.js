const tabGroups = document.querySelectorAll('.tab-group');

tabGroups.forEach(tg => {
    assginEventListenersToItems(tg)
});

function assginEventListenersToItems(tabGroup) {
    let tgItemList = tabGroup.querySelector('.tab-item-list')
    let tgItems = tgItemList.querySelectorAll('.tab-item');
    
    let tgPaneList = tabGroup.querySelector('.tab-pane-list')
    
    tgItems.forEach(item => {
        item.addEventListener('click', (e) => {
            let item = e.target;
            let targetId = item.getAttribute('data-target')

            // make current item inactive
            makeCurrentTabItemInactive(tgItemList);
            // make new item active
            item.classList.add('active');

            // make current pane inactive
            makeCurrentTabPaneInactive(tgPaneList);
            //make new pane active
            tgPaneList.querySelector(targetId).classList.add('active');
        })
    })
}

function makeCurrentTabItemInactive(tabItemList) {
    tabItemList.querySelector('.active').classList.remove('active');
}

function makeCurrentTabPaneInactive(tabPaneList) {
    tabPaneList.querySelector('.active').classList.remove('active');
}