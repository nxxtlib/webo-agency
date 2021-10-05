import orderBy from 'lodash/orderBy';

export const state = () => ({
    main: {},
    services: {
        name: "",
        items: []
    },
    company: {
        name: "",
        items: []
    },
    socialMedia: {
        name: "",
        items: [
            {
                acf:{
                    icon: {
                        value: ''   
                    },
                },
                title: '',
                url: ''
            }
        ]
    },
});

export const mutations = {
    saveMain($state, data) {
        Object.assign($state.main, data);
    },
    saveServices($state, data) {
        Object.assign($state.services, data);
    },
    saveCompany($state, data) {
        Object.assign($state.company, data);
    },
    saveSocialMedia($state, data) {
        Object.assign($state.socialMedia, data);
    }
};

export const actions = {
    initMain (context, data) {
        context.commit('saveMain', data);
    },
    initServices (context, data) {
        context.commit('saveServices', data);
    },
    initCompany (context, data) {
        context.commit('saveCompany', data);
    },
    initSocialMedia (context, data) {
        context.commit('saveSocialMedia', data);
    }
}

export const getters = {
    menuMain: function($state){
        //menu_order
        return $state.menu
    },
    menuServices: function($state){
        //menu_order
        return $state.services;
    },
    menuServicesChild: function($state){
        //menu_order
        return orderBy($state.services.items, ['menu_order'], ['asc', 'desc'])
    },
    menuCompany: function($state){
        //menu_order
        return $state.company;
    },
    menuCompanyChild: function($state){
        //menu_order
        return orderBy($state.company.items, ['menu_order'], ['asc', 'desc'])
    },
    menuSocialMedia: function($state){
        //menu_order
        return $state.socialMedia;
    },
    menuSocialMediaChilds: function($state){
        //menu_order
        return orderBy($state.socialMedia.items, ['menu_order'], ['asc', 'desc'])
    }
}
