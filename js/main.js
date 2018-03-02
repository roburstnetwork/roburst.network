jQuery(document).ready(function($) {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
  $.ajax({
    url: 'https://roburst.co/api/presale_sold_amount',
    data: {

    },
    type: "POST",
    dataType: "json",
    beforeSend: function() {

    },
    success: function(t) {
      console.log(t.amount);
      $('#icoSold').html(('' + t.amount).replace(/./g, function(c, i, a) {
        return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
      }));

    },
    error: function(t) {}
  })
});
