$(document).ready(function() {
    $('#nav_list a').click(function(event) {
      event.preventDefault();
      var title = $(this).attr('title');
      var jsonFileName = title + '.json';
      $('main').empty();
      $.getJSON(jsonFileName, function(data) {
        var speakerHTML = `
          <h1>${data.title}</h1>
          <h2>${data.month}</h2>
          <h3>${data.speaker}</h3>
          <img src="images/${data.image}" alt="${title}_picture">
          <p>${data.description}</p>
        `;
        $('main').html(speakerHTML);
      }).fail(function(jqxhr, textStatus, error) {
        console.error("Request Failed: " + textStatus + ", " + error);
      });
    });
  });
  