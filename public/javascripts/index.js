// $("p").css('color','red');
let html = `<p>This is a jQuery test, if appended it works. <br> Should append at the bottom of 'body'</p>`;
$("#content-area").append(html);


window.addEventListener("load", function () {

  /*
  Navbar dropdown med siteIndex->redirects
   */
  $("#navbar-path-dropdown").change(() => {
    location.pathname = $("#navbar-path-dropdown").val();
  });
});


const lorem = "<p>\n" +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus vel est nec pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ac egestas eros. Integer iaculis sagittis commodo. In ex nisl, auctor sit amet tristique a, condimentum a velit. Etiam fringilla odio ligula, sed faucibus eros tempor sed. In elementum maximus tortor, sit amet gravida erat suscipit quis. Quisque sollicitudin enim eros, eget posuere quam dapibus eget. Duis tellus nunc, tincidunt id lobortis semper, malesuada sit amet orci. Mauris consequat posuere ipsum, vitae ullamcorper nulla iaculis non. Nunc euismod risus eu tempus ultricies. Suspendisse nec purus non ligula euismod cursus et eget risus. Nullam sed tristique quam. Nunc sit amet nibh ut turpis hendrerit ornare et scelerisque mi. Sed vel ex varius, facilisis lacus non, egestas erat. Donec eu mauris id magna egestas sollicitudin.\n" +
    "</p>\n" +
    "<p>\n" +
    "In viverra quis justo in consectetur. Donec elementum metus dolor, in ultrices massa elementum accumsan. Nunc sollicitudin vehicula ultricies. Ut venenatis, nisi a efficitur sagittis, lacus enim scelerisque nisi, sed efficitur mauris enim quis metus. Quisque rutrum justo sit amet ex fringilla, nec iaculis turpis pellentesque. Donec pharetra sagittis bibendum. In euismod lectus eu massa lobortis viverra. Integer ultricies tincidunt feugiat. Nulla iaculis consequat lectus. Aliquam turpis metus, sollicitudin eget sollicitudin et, dapibus ac dolor. Cras pretium nibh elit, luctus venenatis magna pellentesque at. Integer mollis nisi at felis pretium condimentum. Curabitur non vestibulum quam. Phasellus varius arcu eu diam pellentesque consectetur. Ut at rhoncus neque. Ut et enim sit amet mi cursus aliquet.\n" +
    "</p>\n" +
    "<p>\n" +
    "Curabitur eu pellentesque lectus, quis feugiat dolor. Nullam tempor nisi diam, et accumsan erat facilisis in. In vel massa risus. Sed egestas arcu et eros consequat euismod. Fusce ac quam vitae ex posuere aliquet a sit amet sapien. Aliquam semper mauris ac vulputate sollicitudin. Etiam id tellus tempor, varius ligula ut, faucibus lorem. Ut gravida nunc nec risus viverra convallis. Mauris nec erat a lacus congue placerat in nec justo. Praesent sollicitudin, quam sit amet consectetur faucibus, augue sem tempus lectus, eget suscipit risus enim eu nunc. Aliquam molestie, sapien eget mollis ultrices, ante lorem sagittis arcu, in congue enim velit in est. Aenean pharetra, nisl id vehicula tristique, mauris ante aliquet erat, lacinia aliquet odio eros sed augue. Nulla eget erat eget erat commodo pellentesque ut nec urna. Aliquam luctus volutpat ipsum in suscipit. Vivamus tempor sodales orci ac lacinia. Pellentesque ullamcorper id ligula et pulvinar.\n" +
    "</p>\n" +
    "<p>\n" +
    "Maecenas eget aliquet turpis, sit amet fermentum nibh. Sed id consectetur tortor. Quisque lobortis purus at ligula pulvinar, id faucibus ligula pharetra. Quisque tristique tempor nulla. Nulla ut eros lacinia, laoreet magna vitae, faucibus urna. Nam ac sapien sed enim porttitor placerat. Nunc dignissim rhoncus nisi ac ultricies. Nam porta, turpis pellentesque maximus euismod, ante ligula elementum sapien, quis eleifend neque purus sit amet libero. Praesent commodo lorem sapien, ac bibendum quam egestas sit amet. Duis mollis sapien consequat magna mattis, ut rutrum dui tempor. Curabitur sollicitudin tempus nunc quis fringilla. Donec at sapien id velit ornare varius vel quis justo. Sed vel nulla et metus tempus vulputate. Ut tincidunt purus nec erat suscipit, eget condimentum urna molestie.\n" +
    "</p>\n" +
    "<p>\n" +
    "Integer cursus condimentum enim viverra elementum. Etiam vitae sapien tellus. Vivamus non nunc sit amet arcu malesuada egestas eget non nulla. Integer sit amet ipsum nec felis egestas dignissim vel quis libero. Quisque a blandit nulla. Etiam eu neque felis. Pellentesque dictum lectus imperdiet nunc luctus sollicitudin.\n" +
    "</p>";
$("#lorem").append(lorem);