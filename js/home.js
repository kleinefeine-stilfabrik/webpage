var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    let active_collapsible = document.getElementsByClassName("collapsible-active");
    for(let e = 0; e < active_collapsible.length; e++) {
      active_collapsible[e].click();
    }
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      this.classList.remove("collapsible-active");
      document.getElementsByClassName('text')[0].classList.remove('text-active')
      content.style.maxHeight = null;
    } else {
      this.classList.add("collapsible-active");
      document.getElementsByClassName('text')[0].classList.add('text-active')
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
