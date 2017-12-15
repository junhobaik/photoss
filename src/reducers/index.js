import { SAVE_SETTING, UPDATE_SEARCH_SITE, UPDATE_OPEN_METHOD } from "../actions/index";

let rwSetting = localStorage.getItem("rwSetting");
let rwSearchSite = localStorage.getItem("rwSearchSite");

if(rwSetting === null){
    const setting = {
        size: {
            code: 3,
            width: 1600,
            height: 1200
        },
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
    size: rwSetting.size,
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
            const size = (()=> {
                switch(action.setting.size){
                    case 1:
                        return {code: 1, width: 640, height: 480};
                    case 2:
                        return {code: 2, width: 1290, height: 720};
                    case 3:
                        return {code: 3, width: 1600, height: 1200};
                    case 4:
                        return {code: 4, width: 2048, height: 1536};
                    case 5:
                        return {code: 5, width: 4000, height: 3000};
                    default:
                        return {code: 3, width: 1600, height: 1200};
                }
            })();

            localStorage.setItem("rwSetting", JSON.stringify({
                size,
                method,
                name,
                openMethod
            }));

            console.log(JSON.parse(localStorage.getItem("rwSetting")));

            return Object.assign({}, state, {
                size,
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