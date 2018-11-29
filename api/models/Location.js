module.exports = {

    //DB OF LOCATIONS
    //MAPPING OF LOCATIONS --> LAT LNG ? 

    attributes: {

        lat: {
            type: 'string',
            required: true
        },
        lng: {
            type: 'string',
            required: true
        },
        user: {
            model: 'user',
            required: true
        }
        
    },
};
