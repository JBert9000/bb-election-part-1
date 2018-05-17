document.addEventListener("DOMContentLoaded", function() {

  var ul = document.querySelector('ul1');



  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'JSON'
  }).always(function(responseData) {
    //for (i = 0; i < responseData.length; i++) {
    //console.log(Object.values(Object.values(responseData)[0][1]));
    var candidates = responseData.candidates;
    for (i = 0; i < candidates.length; i++) {
      cNames = candidates[i].name
      cVotes = candidates[i].votes
      console.log($('#ul1').append("<li>" + cNames + " " + cVotes));
      // console.log($('#ul1').append(cVotes + "<li>"));
    }

    // console.log(responseData.candidates);
    //  console.log(responseData[i]);
  //}

  })

});
