export const SAVE_SETTING = 'SAVE_SETTING';
export const UPDATE_SEARCH_SITE = 'UPDATE_SEARCH_SITE';
export const UPDATE_OPEN_METHOD = 'UPDATE_OPEN_METHOD';

export function saveSetting(setting) {
    return {
        type: SAVE_SETTING,
        setting
    };
}

export function updateSearchSite(siteNum){
    return {
        type: UPDATE_SEARCH_SITE,
        siteNum
    }
}

export function updateOpenMethod(method){
    return {
        type: UPDATE_OPEN_METHOD,
        method
    }
}