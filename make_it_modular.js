var fileFilter = require('./file');

fileFilter(process.argv[2],process.argv[3],function(err,data){
  if(err)
    return null;
  data.forEach(function(file){
    console.log(file);
  });
});
