
var CommandBarElements = document.querySelectorAll('.ms-CommandBar');
for (var i = 0; i < CommandBarElements.length; i++) {
  new fabric['CommandBar'](CommandBarElements[i]);
}

var ButtonElements = document.querySelectorAll('.ms-Button');
for (var i = 0; i < ButtonElements.length; i++) {
  new fabric['Button'](ButtonElements[i], function() {
    // Insert Event Here
  });
}
