//Check off specific todos by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
    $(this).children().eq(0).toggleClass("checked");
    $(this).children().eq(2).children().toggleClass("confirm");
});

$("button").on("click",function(){
    console.log($("input[type='text']").val()!="");
    if($("input[type='text']").val()!=""){
        var todoText = $("input[type='text']").val();
        $("input[type='text']").val("");
        $("ul").prepend("<li><span class='checkmark'><i class='far fa-check-circle'></i></span><input type='checkbox'/>"+todoText+"<span><i class='fas fa-times-circle trash'></i></span></li>");
    }
})

$("ul").on("click",".trash",function(event){
    $(this).parent().fadeOut(200,function(){
        $(this).parent().remove();
    });
    event.stopPropagation();
});



$("input[type='text']").keypress(function(event){
    if(($(this).val()!="") && (event.which === 13)){
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").prepend("<li><span class='checkmark'><i class='far fa-check-circle'></i></span><input type='checkbox'/>"+todoText+"<span><i class='fas fa-times-circle trash'></i></span></li>");
    }
});