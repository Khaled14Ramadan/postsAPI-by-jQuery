$(document).ready(function(){
    
    var allData =''; 
    ////////////////////get all posts ////////////////////////
    $.get({
        url : 'https://jsonplaceholder.typicode.com/posts'
    }).done(function(data,statue){
        $('.container').html('');
        data.forEach(function(d){
            allData += `
            <div class="card" id="card${d.id}">
            <h4>${d.title}</h4>
            <p>${d.body}.</p>
            <div class="buttons">
            <a href="form.html?id=${d.id}"><button class="edit btn btn-info" id="${d.id}ed">Edit</button></a>
                <button class="delete btn btn-secondary" id="${d.id}de">Delete</button>
            </div>
        </div>
            `
        });
        $('.container').html(allData);

         //////////////////////delete ////////////////////////////////////////
        //  console.log(Array.from($('.delete')));
        $('.delete').click(function(){
            // console.log($(`div:has(div:has(${this}))`).attr('class'));
            // console.log(parseInt(this.id));
            var id = parseInt(this.id);
            var con = confirm("are you want to delete this ?");
            if(con)
            {
                $.ajax({
                    type :'DELETE',
                    url :`https://jsonplaceholder.typicode.com/posts/${id}`
                }).done(function() {
                    $(`#card${id}`).remove();////this to delet this element
                    // alert('the post in id is deleted');
                }).fail(function() {
                    alert('This is invalid URL') // Error
                });
            }
        });
        
    });


   
    
    
});