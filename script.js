$(document).ready(function(){

  $("div[class^='answer']").mousedown(function(){
      if ($(this).attr("id") == "0"){
        $(this).css({"background-color":"#e92121"});
      } else if ($(this).attr("id") == "1") {
        $(this).css({"background-color":"#21e93d"});
      }
    });

  $("div[class^='answer']").click(function(){
    $("#q").animate({"margin-left":"-=600px"}, 500);
    var mat = parseFloat($(this).attr("id")) + parseFloat($("#mat").text());
    $("#mat").text(mat);
  });



  $(".answer_1_f,.answer_2_f").click(function(){
    if(parseFloat($("#mat").text()) <= 7){
    	$("#resoult_img").css({"background":"url('../ikt_test/bad.png')"});
        $("#q_box").css({"height":"750px"});
    }
    if(parseFloat($("#mat").text()) > 7 && parseFloat($("#mat").text()) <= 12){
    	$("#resoult_img").css({"background":"url('../ikt_test/norm.png')"});
        $("#q_box").css({"height":"750px"});
    }
    if(parseFloat($("#mat").text()) > 12){
    	$("#resoult_img").css({"background":"url('../ikt_test/krasava.png')"});
        $("#q_box").css({"height":"750px"});
    }
    var mat = $("#mat").text() + "/15";
    $("#mat").text(mat);
  });
});
