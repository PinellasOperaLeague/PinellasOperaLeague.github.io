$(document).ready(function(){
  document.getElementById("navbar").innerHTML = '\
  <!-- Fixed navbar -->\
  <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">\
    <div class="container">\
      <div class="navbar-header">\
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\
          <span class="sr-only">Toggle navigation</span>\
          <span class="icon-bar"></span>\
          <span class="icon-bar"></span>\
          <span class="icon-bar"></span>\
        </button>\
        <a class="navbar-brand" href="index.html">Pinellas Opera League</a>\
      </div>\
      <div class="navbar-collapse collapse">\
        <ul class="nav navbar-nav">\
          <li id="home"><a href="index.html">Home</a></li>\
          <li id="galleries" class="dropdown">\
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Galleries <b class="caret"></b></a>\
          <ul class="dropdown-menu">\
            <li><a href="jan-16-lunch.html">January 2016 Luncheon</a></li>\
            <li><a href="apr-15-lunch.html">April 2015 Luncheon</a></li>\
            <li><a href="jan-15-lunch.html">January 2015 Luncheon</a></li>\
            <li><a href="dec-14-lunch.html">December 2014 Luncheon</a></li>\
            <li><a href="nov-14-lunch.html">November 2014 Luncheon</a></li>\
            <li><a href="oct-14-lunch.html">October 2014 Luncheon</a></li>\
            <li><a href="apr-lunch.html">April 2014 Luncheon</a></li>\
            <li><a href="cruise.html">Valentines Day Cruise</a></li>\
          </ul>\
          </li>\
          <li id="newsletters" class="dropdown">\
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Newsletters <b class="caret"></b></a>\
          <ul class="dropdown-menu">\
            <li><a href="documents/current.pdf">Most Recent Edition</a></li>\
            <li><a href="documents/previous.pdf">Previous Edition</a></li>\
            </ul>\
          </li>\
          <li id="contact"><a href="contact.html">Contact</a></li>\
          <li id="local_opera"><a href="local_opera.html">Local Opera</a></li>\
        </ul>\
      </div><!--/.nav-collapse -->\
    </div>\
  </div>'
});

function setActiveNavbar(choice) {
  var list_item = document.getElementById(choice);
  list_item.className += list_item.className ? " active" : "active";
}
