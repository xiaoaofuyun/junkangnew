$(document).ready(function () {

    $(function () {
        var widowheight = $(window).height() -90;
        $(".contentright,.contentleft").height(widowheight);

        if( $(window).width() <= 1440 ){
            var widowheight1 = $(window).height() -70;
            $(".contentright,.contentleft").height(widowheight1);
        }
    });







    // 最新更新
    $(function () {
        $(".contentright_box_right_ul_li").click(function () {
            $(this).toggleClass("on").siblings().removeClass("on");
            $(this).children(".contentright_box_right_ul_li_div").slideToggle().parents(".contentright_box_right_ul_li").siblings().children(".contentright_box_right_ul_li_div").slideUp();
        })
        $(".contentright_box_right_ul_li_div").click(function(event){
            event.stopPropagation();
        });
    });


    $(function () {
        $(".inp-fon").focus(function(){
            var oldValue = $(this).val();
            if(oldValue == this.defaultValue){
                $(this).val("").addClass('focus-fon');
            }
        }).blur(function(){
            var oldValue = $(this).val();
            if(oldValue == ""){
                $(this).val(this.defaultValue).removeClass('focus-fon');
            }
        });
    })

});