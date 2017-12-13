import { SAVE_SETTING, UPDATE_SEARCH_SITE, UPDATE_OPEN_METHOD } from "../actions/index";

let rwSetting = localStorage.getItem("rwSetting");
let rwSearchSite = localStorage.getItem("rwSearchSite");

if(rwSetting === null){
    const setting = {
        method: "tag",
        name: "Random",
        openMethod: 1
    };
    localStorage.setItem("rwSetting", JSON.stringify(setting));
    localStorage.setItem("rwSearchSite", 0);
    rwSetting = setting;
    rwSearchSite = 0;
}else{
    rwSetting = JSON.parse(rwSetting);
}

const counterInitialState = {
    search: rwSearchSite,
    method: rwSetting.method,
    name: rwSetting.name,
    openMethod: rwSetting.openMethod
};

const reducer = (state = counterInitialState, action) => {
    switch(action.type) {
        case SAVE_SETTING:
            const method = action.setting.method;
            const name =  action.setting.name;
            const openMethod = action.setting.openMethod;

            localStorage.setItem("rwSetting", JSON.stringify({
                method,
                name,
                openMethod
            }));

            return Object.assign({}, state, {
                method,
                name,
                openMethod
            });
        case UPDATE_SEARCH_SITE:
            localStorage.setItem("rwSearchSite", action.siteNum);
            return Object.assign({}, state, {
                search: action.siteNum
            });
        case UPDATE_OPEN_METHOD:
            localStorage.setItem("rwOpenMethod", action.method);
            return Object.assign({}, state, {
               openMethod: action.method
            });
        default:
            return state;
    }
};


export default reducer;