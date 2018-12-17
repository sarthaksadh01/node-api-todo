var mongoose = require('mongoose');
mongoose.Promise =global.Promise;
mongoose.connect("mongodb://sarthak01:Sarthak01@@ds237574.mlab.com:37574/stodos" || 'mongodb://localhost:27017/TodoApp');
module.exports={
    mongoose
}
