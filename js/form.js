$(document).ready(function(){
    var id = location.href.split('=')[1];

    ////////////////////////get data for this post ////////////////////////
    $.get(`https://jsonplaceholder.typicode.com/posts/${id}` , 
            function(data)
            {
                // console.log(data)
                $('#title').val(data.title);
                $('#body').val(data.body);
            });
    
    /////////////////////////////// save ///////////////////////
    $('form').submit(function(e) {
        e.preventDefault();
        console.log(e)
        if($('#title').val() != '' && $('#body').val()!='')
        {
            $.ajax({
                type: 'PUT',
                url:`https://jsonplaceholder.typicode.com/posts/${id}`,
                data : JSON.stringify({
                    title: $('#title').val(),
                    body: $('#body').val(),
                    userId: 1
                  }),
            }).done(function(){
                alert("this post is apdated");
                window.location.href = 'index.html';
            }).fail(function(error){
                // console.log(error.status)
                if(error.status ==404)
                {
                    alert("This is invalid URL");
                }
            })
        }
        else {
            alert("please enter the full data , title or body is empety")
        }
    });

    ///////////////////////////cancel//////////////////////////////////
         $('.cancel').click(function(){
            var check = confirm("any changes won't be saved , are you sure want to cancel ? ")
            if(check)
            {
                window.location.href = 'index.html';
            }
         })
});