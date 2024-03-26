const express = require('express');


const AppSetting = require('../models/AppSettingDetails')

const fetchApp = async() =>{
    let systemAppDetails = await AppSetting.findOne();
    if(systemAppDetails){
        return systemAppDetails
    }
    else{
        return 'Abel Profile'
    }

}

module.exports = {fetchApp}