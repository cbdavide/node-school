var http = require('http');

http.get(process.argv[2], function(response1){
    var string1 = '';
    response1.on('data',function(data){
      string1 += data;     
    });

    response1.on('end',function(){
      http.get(process.argv[3], function(response2){
        var string2 = '';
        response2.on('data',function(data){
          string2 += data;
        });

        response2.on('end',function(){
          http.get(process.argv[4], function(response3){
            var string3 = '';
            
            response3.on('data', function(data){
              string3 += data;
            });

            response3.on('end', function(){
              console.log(string1);
              console.log(string2);
              console.log(string3);
            });

          });
        });
      });
    });
});
