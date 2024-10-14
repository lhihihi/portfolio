$(document).ready(function () {
  let wh = $(window).height();

  $(window).resize(function () {
    location.reload();
    let wh = $(window).height();
    $("html,body")
      .stop()
      .animate({ scrollTop: wh * a }, 500);
  });

  $("#dot span").click(function () {
    let num = $(this).index();
    $("#dot span").eq(num).addClass("active");
    $("#dot span").eq(num).siblings().removeClass("active");
    $("html,body")
      .stop()
      .animate({ scrollTop: wh * num }, 1000);
  });

  let a = 0;
  let area_n = $(".area").length;
  let wheel = true;

  $(".area").on("mousewheel DOMMouseScroll", function (e, delta) {
    if (wheel) {
      let n = $(this).index();

      if (delta < 0) {
        a = n + 1;
      } else {
        a = n - 1;
      }

      if (a <= 0) {
        a = 0;
      }
      if (a >= area_n - 1) {
        a = area_n - 1;
      }

      $("#dot span").eq(a).addClass("active");
      $("#dot span").eq(a).siblings().removeClass("active");
      $("html,body")
        .stop()
        .animate({ scrollTop: wh * a }, 500);
    }
  });

  $(window).scroll(function () {
    let sc = $(document).scrollTop();

    if (sc >= 0 && sc < wh) {
      a = 0;
    }

    if (sc >= wh && sc < wh * 2) {
      a = 1;

      $(".about_contents p:nth-child(2)")
        .delay(200)
        .animate({ top: "0" }, 700, function () {
          $(".about_contents p:nth-child(1)")
            .delay(200)
            .animate({ right: "250px", opacity: "1" }, 700);
        });
    }

    if (sc >= wh * 2 && sc < wh * 3) {
      a = 2;
    }

    if (sc >= wh * 3 && sc < wh * 4) {
      a = 3;
    }

    if (sc >= wh * 4 && sc < wh * 5) {
      a = 4;
    }

    if (sc >= wh * 5 && sc < wh * 6) {
      a = 5;
    }

    if (sc >= wh * 6 && sc < wh * 7) {
      a = 6;
    }

    if (sc >= wh * 7 && sc < wh * 8) {
      a = 7;
    }

    if (sc >= wh * 8 && sc < wh * 9) {
      a = 8;
    }

    if (sc >= wh * 9 && sc < wh * 10) {
      a = 9;
    }
  });

  $(".menu").click(function () {
    wheel = false;
    $(this).next().show();
    return false;
  });

  $(".close").click(function () {
    wheel = true;
    $(".pop").hide();
    return false;
  });

  $(".menu3").click(function () {
    wheel = false;
    $(this).next().show();
    return false;
  });

  $(".close").click(function () {
    wheel = true;
    $(".pop").hide();
    return false;
  });

  $(".main").hover(
    function () {
      $(this).find(".sub").stop().slideDown();
    },
    function () {
      $(this).find(".sub").stop().slideUp();
    }
  );
});

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, options);

const boxList = document.querySelectorAll(".box");

boxList.forEach((el) => observer.observe(el));

// design
$(document).ready(function () {
  $(".tab-contents").on("wheel", function (e) {
    if (e.originalEvent.deltaY > 0) {
      if (this.scrollTop + this.clientHeight < this.scrollHeight) {
        e.stopPropagation();
      } else {
        e.preventDefault();
      }
    } else {
      if (this.scrollTop > 0) {
        e.stopPropagation();
      } else {
        e.preventDefault();
      }
    }
  });

  $(".tab-1 li, .tab-header .tab li").click(function () {
    let num = $(this).index();
    let move = 109 * num;

    $(".tab-contents div").removeClass("active");
    $(".tab-contents").scrollTop(0);
    $("#" + $(this).attr("data-alt")).addClass("active");

    $(".tab-header .tab-highlight").animate({ top: move }, 300);

    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
});

// uiux
function guide1() {
  $(".w_slide_btn>span").toggleClass("active");
}

setInterval(guide1, 500);

$(".w_tab_slide ul li:nth-child(n)").mouseenter(function () {
  $(this).css("background-position", "0 100%");
});

$(".w_tab_slide ul li:nth-child(n)").mouseleave(function () {
  $(this).css("background-position", "0 0");
});

$(".w_list li").click(function () {
  $(".w_list li").removeClass("btn_active");
  $(this).addClass("btn_active");

  val = $(this).index();

  $(".w_bg ul").css("left", -700 * val + "px");
  $(".w_txt_slide ul").css("left", -330 * val + "px");
  $(".w_tab_slide ul").css("left", -794 * val + "px");
});

$(document).ready(function () {
  let w_pop = 0;

  $(".w_txt_slide>ul>li>span").click(function () {
    w_pop = $(this).parent().index();
    $(".w_page span:nth-child(1)").text(w_pop + 1);

    $(".w_pop>li").eq(w_pop).show();
    $("#w_popup").stop(true, true).fadeIn();

    const bgPosition = $(".w_bg ul").css("left");
    console.log("Background Position:", bgPosition);

    return false;
  });

  $(".w_btn .right_btn").click(function () {
    $("#w_popup").scrollTop(0);

    if (w_pop < 7) {
      $(".w_pop>li").eq(w_pop).stop(true, true).fadeOut();
      w_pop++;
      $(".w_page span:nth-child(1)").text(w_pop + 1);
      $(".w_pop>li").eq(w_pop).stop(true, true).fadeIn();
    }
  });

  $(".w_btn .left_btn").click(function () {
    $("#w_popup").scrollTop(0);

    if (w_pop > 0) {
      $(".w_pop>li").eq(w_pop).stop(true, true).fadeOut();
      w_pop--;
      $(".w_page span:nth-child(1)").text(w_pop + 1);
      $(".w_pop>li").eq(w_pop).stop(true, true).fadeIn();
    }
  });

  $(".w_btn_close, .w_back").click(function () {
    $("#w_popup").stop(true, true).fadeOut();
    $(".w_pop>li").stop(true, true).hide();
    return false;
  });

  $("#w_popup").on("wheel", function (e) {
    let scrollTop = $(this).scrollTop();
    let scrollHeight = $(this)[0].scrollHeight;
    let height = $(this).outerHeight();
    let delta = e.originalEvent.deltaY;

    if (
      (delta > 0 && scrollTop + height >= scrollHeight) ||
      (delta < 0 && scrollTop <= 0)
    ) {
      e.preventDefault();
    }

    e.stopPropagation();
  });

  $(document).on("wheel", function (e) {
    if ($("#w_popup").is(":visible")) {
      e.preventDefault();
    }
  });
});

// web planning
$(document).ready(function () {
  $(".bbtn li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".panel li").removeClass("active");
    $("#" + result).addClass("active");
  });

  $(".bbtn li:first-child").click(function () {
    $(".gallery1 .thumbs li:first").click();
  });

  $(".bbtn li:last-child").click(function () {
    $(".gallery2 .thumbs li:first").click();
  });

  let goldidxA = 0;
  let gidxA = 0;

  function galleryImgA(gidxA) {
    if (goldidxA != gidxA) {
      $(".gallery1 .thumbs li").eq(goldidxA).css({ opacity: 0.3 });
      $(".gallery1 .thumbs li").eq(gidxA).css({ opacity: 1 });
      $(".gallery1 .largeImg li").eq(goldidxA).stop().fadeOut(300);
      $(".gallery1 .largeImg li").eq(gidxA).stop().fadeIn(300);
    }
    goldidxA = gidxA;
  }

  $(".gallery1 .thumbs li").click(function () {
    gidxA = $(this).index();
    galleryImgA(gidxA);
  });

  let goldidxB = 0;
  let gidxB = 0;

  function galleryImgB(gidxB) {
    if (goldidxB != gidxB) {
      $(".gallery2 .thumbs li").eq(goldidxB).css({ opacity: 0.3 });
      $(".gallery2 .thumbs li").eq(gidxB).css({ opacity: 1 });
      $(".gallery2 .largeImg li").eq(goldidxB).stop().fadeOut(300);
      $(".gallery2 .largeImg li").eq(gidxB).stop().fadeIn(300);
    }
    goldidxB = gidxB;
  }

  $(".gallery2 .thumbs li").click(function () {
    gidxB = $(this).index();
    galleryImgB(gidxB);
  });

  $(".gallery").on("wheel", function (e) {
    e.stopPropagation();
  });
});
