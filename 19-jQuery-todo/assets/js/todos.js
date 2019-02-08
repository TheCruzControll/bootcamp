//Check off specific todos by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
    $(this).children().eq(0).toggleClass("checked");
    $(this).children().eq(2).children().toggleClass("confirm");
});


$("ul").on("click",".trash",function(event){
    $(this).parent().fadeOut(200,function(){
        $(this).parent().remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("")
        //create a new li and add to ul
        $("ul").append("<li><span class='checkmark'><i class='far fa-check-circle'></i></span><input type='checkbox'/>"+todoText+"<span><i class='fas fa-times-circle trash'></i></span></li>")
    }
})