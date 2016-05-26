$(document).ready(function() {
    $('#ajax').click(function()
    {
        console.log('ay');
        $.get('mongodb://testuser123:password@ds034279.mlab.com:34279/workoutnotes', function(data) { // don't use db just use the webapi created and you'll get the data retuerned. CREATE ONE NOW'
            console.log('data:' + data);
        })
        .fail(function() {
            console.log('error');
        });
        $('#ajaxworkouts').html('<h2>Click a button</h2>');
    });
    //$('#ajax').click(function() {
    //    $.ajax({
    //      url: 'mongodb://testuser123:password@ds034279.mlab.com:34279/workoutnotes',
    //      type: 'get',
    //      dataType: 'jsonp',
    //      jsonp: 'jsonp', // mongod is expecting the parameter name to be called "jsonp"
    //      success: function (data) {
    //        console.log('success', data);
    //      },
    //      error: function (XMLHttpRequest, textStatus, errorThrown) {
    //        console.log('error', errorThrown);
    //      }
    //    });
    //});
});