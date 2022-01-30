

function navbar() {
    return ` <div id="head">
    <div id="left_icons" class="increase"><i class="fas fa-bars"></i></div>
    <div id="navbar">
      <div id="Youtube_icon">
        <a href="./homePage.html"><i id="icon" class="fab fa-youtube"></i></a>

        <div id="Yt_name">YouTube <span id="india">IN</span></div>
      </div>
      <div id="youtube_searchBar">
        <div id="name_input"><input id="input_value" type="text" placeholder="Search" /></div>
        <div class="increase" id="fivepx"><i class="fas fa-search"></i></div>
        <div class="increase" id="microphone">
          <i class="fas fa-microphone"></i>
        </div>
      </div>
      <div id="youtube_profile">
        <div class="increase"><i class="far fa-plus-square"></i></div>
        <div class="increase"><i class="fas fa-th"></i></div>

        <div class="increase"><i class="far fa-bell"></i></div>
        <div class="increase"><i class="fas fa-user-circle"></i></div>
      </div>
    </div>
  </div>`;

}



export default navbar;