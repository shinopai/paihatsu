$(function () {
  // slick
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    speed: 2500,
  });

  // tmbs
  $(".cm__tmbs img").on("click", function () {
    // mainに切り替えるimgのsrc取得
    img = $(this).attr("src");
    // currentクラス付け替え(枠線などを変えたい時に)
    $(".cm__tmbs li").removeClass("current");
    $(this).parent().addClass("current");
    // fadeOutできたらsrc変更してfadeIn
    $(".cm__image--main img")
      .not(".play")
      .fadeOut(500, function () {
        $(".cm__image--main img").not(".play").attr("src", img).fadeIn(1000);
      });
  });
});
