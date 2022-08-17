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

  // swiper
  deviceWidth = $(window).width();

  if (deviceWidth <= 768) {
    $(".interior__vols, .exterior__vols").addClass("swipper");
    $(".interior__item, .exterior__item").addClass("swiper-slide");
  }

  // header search form
  headerIcon = $(".header__icon");
  formWrap = $(".header__search-form--wrap");

  headerIcon.click(function () {
    formWrap.fadeToggle(600);
  });

  // header nav for sp
  headerButton = $(".header__button--sp");
  headerOverlay = $(".header__sp-nav--overlay");
  headerNav = $(".header__sp-nav");

  headerButton.click(function () {
    if (headerNav.hasClass("active")) {
      headerButton.removeClass("active");
      headerNav.removeClass("active");
      headerOverlay.fadeOut(300);
      headerNav.animate({
        top: "-565px",
      });
    } else {
      headerButton.addClass("active");
      headerNav.addClass("active");
      headerOverlay.fadeIn(300);
      headerNav.animate({
        top: "53px",
      });
    }
  });
  headerOverlay.click(function () {
    headerButton.removeClass("active");
    headerNav.removeClass("active");
    headerOverlay.fadeOut(300);
    headerNav.animate({
      top: "-565px",
    });
  });
});
