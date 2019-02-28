function getData(val) {
  $.ajax({
    type: "GET",
    url: "http://api.duyiedu.com/api/chat/sendMsg",
    data: {
      msg:val,
      appkey: 'st001_1550205967294'
    },
    success: function(data) {
      var json = JSON.parse(data)
      console.log(data)
      randerDom(json.data.text, "rabit");
    }
  });
}

function bindEvent() {
  $("#inp").on("keydown", function(e) {
    // console.log(e)
    if (e.keyCode === 13) {
      $("#btn").trigger("click");
    }
  });
  $("#btn").on("click", function(e) {
    var val = $("#inp").val();
    if (!val) {
      return;
    } else {
      randerDom(val, "mine");
      getData(val);
    }
  });
}
//  渲染聊天
function randerDom(text, str) {
  if (str == "mine") {
     var dom =
      '<div class="mine_talk">\
                <div class="avitor-mine">&nbsp;</div>\
                <div class="headportrait"></div>\
                <div class="text">' +
      text +
      "</div>\
      </div>";
  } else {
    var dom = $(
      '<div class="rabit_talk">\
            <div class="avitor-rabit">&nbsp;</div>\
            <div class="text">' +
        text +
        "</div>\
        </div>"
    );
  }
  $(".position").append(dom);
  console.log( $("#mine")[0].scrollTop = $('#mine')[0].scrollHeight );
  $("#inp").val("");
}
bindEvent();

//整体思路： 1： 利用ajax访问接口，
