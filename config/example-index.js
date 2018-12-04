var configValues = require('./config');


module.exports = {
    getDbConnectionString : function () {
        return `mongodb://<dbuser>:<dbpassword>@ds123844.mlab.com:23844/nodetodos`;
    }
};