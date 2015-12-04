


$(function(){

   $(".reset").click(function(){
      location.reload();  //Reloads to reset buttons, do on new test
   });

   $('#search-term').click(function(event){
      event.preventDefault();
      //searchByKeyword();
      var searchTerm = $('#query').val();
      searchByKeyword(searchTerm);
   });

});

function searchByKeyword(searchTerm) {
       alert('searchTerm:' + searchTerm);
    var results = {
      part: 'snippet',
      key: 'AIzaSyCbpf__hHuSFfdQejBxXxgHG6bwtG4CCek',     
      r: 'jason',
      q: searchTerm,
      maxResults: 10
    };
    
    url = 'https://www.googleapis.com/youtube/v3/search';

    $.getJSON(url, results, function(data){
        
        //  for(var i in data.items) { 
        //      var item = data.items[i];
        //      console.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
        //      console.log(item.snippet.thumbnails.medium.url);
        //  }
        showResults(data);

    }); 
  
    
}

function showResults(data){
      var html = "";
      for(var i in data.items) { 
              var item = data.items[i];
              //console.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
              console.log(item.snippet.thumbnails.medium.url);
              //html += '<p>' + thumbnails-url + '</p>'; 
              html += '<img src=' +'"' + item.snippet.thumbnails.medium.url + '">'; 
      }
      $('.search-results').html(html);

      //$.each(results, function(index,value){
      //  html += '<p>' + item.id.videoId + '</p>';
      //  console.log(item.id.videoId);
      //});
      //$('.search-results').html(html);
}

//background-image: url('../images/ryu-ready-position.gif');
//<img src="url" alt="some_text">