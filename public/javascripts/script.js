
setInterval(function() {
    //The code you want to execute every 5 seconds
    $(()=>{
        //load data
            var load = function(){
                $.ajax  
            ({
                url:'/sensor/',
                contentType:'application/json',
                method:"GET",
                success: (res)=>{
                    console.log(res)
                    var bodyTable = $('tbody');
                    bodyTable.append('\
                        <tr>\
                         <td class="id">' + res.distance+ ' </td>\
                         <td><input type="text" class="name" value="'+res.lux+'" ></td>\
                        </tr> ')
                }
            })}
            load()
        //add member
        //DELETE Members
    })
}, 5000);
//load members data



