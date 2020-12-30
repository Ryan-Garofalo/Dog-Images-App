$(document).ready(function(){
  $('.delete-dog-images').on('click', function(){
    var url = '/delete';
    if(confirm('Delete Images')){
      $.ajax({
        url: url,
        type:'Delete',
        success: function(result){
          console.log('Deleting Recipe');
          window.location.href='/'
        },
        error: function(err){
          console.log(err);
        }
      });
    }
  });
});
