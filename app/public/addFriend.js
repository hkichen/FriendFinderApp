//when hitting submit, user info is turned into a new friend, then added (using post)
//to new api route that calculates match (/api/new)

$("#submitBtn").on("click", function() {
  event.preventDefault();
  var newFriend = {
    "name": $("#name").val().trim(),
    "photo": $("#photo").val(),
    "scores": [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val() ]
  };
  alert("Searching for your match...");
  $.post("/api/new", newFriend)
  .done(function(data) {
    console.log(data);
    $('#caption').text(data.name);
    $('#imagepreview').attr('src', data.photo);
    $('#imagemodal').modal('show');
  });
  $("#name").val("");
  $("#photo").val("");
  [$("#q1").val(""), $("#q2").val(""), $("#q3").val(""), $("#q4").val(""), $("#q5").val(""), $("#q6").val(""), $("#q7").val(""), $("#q8").val(""), $("#q9").val(""), $("#q10").val("") ]
});