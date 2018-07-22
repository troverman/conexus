module.exports = {
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
