jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // start

  var topBtn = $(".pagetop");
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  //ドロワーメニュー
  $(".drawer-menu__inner").click(function () {
    $(".drawer-menu__inner").toggleClass("open");
    $(".header__nav").toggleClass("open");
    $(".header__inner").toggleClass("open");
    $(".header__li").toggleClass("open");
    // $("html").toggleClass("is-fixed");
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });

  // swiper
  let swipeOption = {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
  };
  new Swiper(".mySwiper1", swipeOption);

  // .swiper.works__mySwiper
  const swiper = new Swiper(".swiper.works__mySwiper", {
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  });

  // scroll位置取得
  $(window).scroll(function () {
    // scroll量を取得
    // var scroll = $(window).scrollTop();
    // console.log(scroll);
    if ($(window).scrollTop() > 800) {
      // $(".header").toggleClass("small");
      $(".header__inner").addClass("color-on");
    } else {
      // .header<770
      $(".header__inner").removeClass("color-on");
    }
  });

  // hover時にハイライト
  // card1
  $(".card__attention1").hover(
    function () {
      $(".card__title--attention1").css("color", "#fff");
      $(".card__text--attention1").css("color", "#fff");
      $(".card__category--attention1").css("color", "#fff");
      $(".card__date--attention1").css("color", "#fff");
      $(".card__img1").css("transform", "scale(1.1)");
      $(".card__img1").css("transition", "0.1s");
      $(".card__contents--attention1").css("background-color", "#333");
    },
    function () {
      // マウスアウト時の処理
      // $(".card__attention1").remove();
      $(".card__title--attention1").css("color", "#333");
      $(".card__text--attention1").css("color", "#333");
      $(".card__category--attention1").css("color", "#333");
      $(".card__date--attention1").css("color", "#333");
      $(".card__img1").css("transform", "scale(1.0)");
      $(".card__img1").css("transition", "0.1s");
      $(".card__contents--attention1").css("background-color", "#fff");
    }
  );
  // .card1

  // card2
  $(".card__attention2").hover(
    function () {
      $(".card__title--attention2").css("color", "#fff");
      $(".card__text--attention2").css("color", "#fff");
      $(".card__category--attention2").css("color", "#fff");
      $(".card__date--attention2").css("color", "#fff");
      $(".card__img2").css("transform", "scale(1.1)");
      $(".card__img2").css("transition", "0.1s");
      $(".card__contents--attention2").css("background-color", "#333");
    },
    function () {
      // マウスアウト時の処理
      // $(".card__attention1").remove();
      $(".card__title--attention2").css("color", "#333");
      $(".card__text--attention2").css("color", "#333");
      $(".card__category--attention2").css("color", "#333");
      $(".card__date--attention2").css("color", "#333");
      $(".card__img2").css("transform", "scale(1.0)");
      $(".card__img2").css("transition", "0.1s");
      $(".card__contents--attention2").css("background-color", "#fff");
    }
  );
  // .card2

  // card3
  $(".card__attention3").hover(
    function () {
      $(".card__title--attention3").css("color", "#fff");
      $(".card__text--attention3").css("color", "#fff");
      $(".card__category--attention3").css("color", "#fff");
      $(".card__date--attention3").css("color", "#fff");
      $(".card__img3").css("transform", "scale(1.1)");
      $(".card__img3").css("transition", "0.1s");
      $(".card__contents--attention3").css("background-color", "#333");
    },
    function () {
      // マウスアウト時の処理
      // $(".card__attention1").remove();
      $(".card__title--attention3").css("color", "#333");
      $(".card__text--attention3").css("color", "#333");
      $(".card__category--attention3").css("color", "#333");
      $(".card__date--attention3").css("color", "#333");
      $(".card__img3").css("transform", "scale(1.0)");
      $(".card__img3").css("transition", "0.1s");
      $(".card__contents--attention3").css("background-color", "#fff");
    }
  );
  // .card3

  // end
});
