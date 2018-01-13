// $("p").css('color','red');
let html = `<p>This is a jQuery test, if appended it works. <br> Should append at the bottom of 'body'</p>`
$("#test").append(html);

window.addEventListener("load", function () {

  /*
  Navbar dropdown med siteIndex->redirects
   */
  $("#navbar-path-dropdown").change(() => {
    location.pathname = $("#navbar-path-dropdown").val();
  });
});