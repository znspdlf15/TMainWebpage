function click_search_button(self){
  var search_text = document.getElementById('search_text');
  var main_area = document.getElementById('content');

  main_area.innerHTML = "안녕하세요";
}

function click_self_introduction(){
  var data = JSON.parse(directory);
  var address = data[0]["ProfileFile"];

  var main_area = document.getElementById('content');
  main_area.innerHTML = getTagInnerHTML(address);
}
