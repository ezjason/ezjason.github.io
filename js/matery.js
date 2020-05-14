/*
$(function () {
    /!**
     * 添加文章卡片hover效果.
     *!/
    let articleCardHover = function () {
        let animateClass = 'animated pulse';
        $('article .article').hover(function () {
            $(this).addClass(animateClass);
        }, function () {
            $(this).removeClass(animateClass);
        });
    };
    articleCardHover();

    /!*菜单切换*!/
    $('.button-collapse').sideNav();

    /!* 修复文章卡片 div 的宽度. *!/
    let fixPostCardWidth = function (srcId, targetId) {
        let srcDiv = $('#' + srcId);
        if (srcDiv.length === 0) {
            return;
        }

        let w = srcDiv.width();
        if (w >= 450) {
            w = w + 21;
        } else if (w >= 350 && w < 450) {
            w = w + 18;
        } else if (w >= 300 && w < 350) {
            w = w + 16;
        } else {
            w = w + 14;
        }
        $('#' + targetId).width(w);
    };

    /!**
     * 修复footer部分的位置，使得在内容比较少时，footer也会在底部.
     *!/
    let fixFooterPosition = function () {
        $('.content').css('min-height', window.innerHeight - 165);
    };

    /!**
     * 修复样式.
     *!/
    let fixStyles = function () {
        fixPostCardWidth('navContainer', 'articles');
        fixPostCardWidth('artDetail', 'prenext-posts');
        fixFooterPosition();
    };
    fixStyles();

    /!*调整屏幕宽度时重新设置文章列的宽度，修复小间距问题*!/
    $(window).resize(function () {
        fixStyles();
    });

    /!*初始化瀑布流布局*!/
    $('#articles').masonry({
        itemSelector: '.article'
    });

    AOS.init({
        easing: 'ease-in-out-sine',
        duration: 700,
        delay: 100
    });

    /!*文章内容详情的一些初始化特性*!/
    let articleInit = function () {
        $('#articleContent a').attr('target', '_blank');

        $('#articleContent img').each(function () {
            let imgPath = $(this).attr('src');
            $(this).wrap('<div class="img-item" data-src="' + imgPath + '" data-sub-html=".caption"></div>');
            // 图片添加阴影
            $(this).addClass("img-shadow img-margin");
            // 图片添加字幕
            let alt = $(this).attr('alt');
            let title = $(this).attr('title');
            let captionText = "";
            // 如果alt为空，title来替
            if (alt === undefined || alt === "") {
                if (title !== undefined && title !== "") {
                    captionText = title;
                }
            } else {
                captionText = alt;
            }
            // 字幕不空，添加之
            if (captionText !== "") {
                let captionDiv = document.createElement('div');
                captionDiv.className = 'caption';
                let captionEle = document.createElement('b');
                captionEle.className = 'center-caption';
                captionEle.innerText = captionText;
                captionDiv.appendChild(captionEle);
                this.insertAdjacentElement('afterend', captionDiv)
            }
        });
        $('#articleContent, #myGallery').lightGallery({
            selector: '.img-item',
            // 启用字幕
            subHtmlSelectorRelative: true
        });

        // progress bar init
        const progressElement = window.document.querySelector('.progress-bar');
        if (progressElement) {
            new ScrollProgress((x, y) => {
                progressElement.style.width = y * 100 + '%';
            });
        }
    };
    articleInit();

    $('#toggleSearch').click(function () {
        // IOS下获得焦点后会导致视图上移，这里判断如果是 iPhone|iPad|iPod|iOS，就移除焦点属性.
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            $('#searchInput').removeAttr('autofocus');
        }
        $('#searchModal').openModal();
    });

    /!*回到顶部*!/
    $('#backTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 400);
        return false;
    });

    /!*监听滚动条位置*!/
    let $nav = $('#headNav');
    let $backTop = $('.top-scroll');
    $(window).scroll(function () {
        /!* 回到顶部按钮根据滚动条的位置的显示和隐藏.*!/
        let scroll = $(window).scrollTop();
        if (scroll < 100) {
            $nav.addClass('nav-transparent');
            $backTop.slideUp(300);
        } else {
            $nav.removeClass('nav-transparent');
            $backTop.slideDown(300);
        }
    });
});
*/



/* =========================改变之后的=================== */
$(function() {
  /**
   * 添加文章卡片hover效果.
   */
  let articleCardHover = function() {
    let animateClass = 'animated pulse';
    $('#articles .article, #tags .article, #galleries .article').hover(function() {
      $(this).addClass(animateClass);
    }, function() {
      $(this).removeClass(animateClass);
    });
  };
  articleCardHover();

  /**
   * 根据标签切换文章.
   */
  let changeTagPostByTag = function(tag) {
    $('#tags .chip-active').removeClass('chip-active').addClass('chip-default');
    $(' .tag-chips span[data-tagname="' + tag + '"]').removeClass('chip-default').addClass('chip-active');
      $('#tags .chip-active').empty().text(tag);
    // 获取同样有该标签的帖子，并将其显示出来，其他帖子隐藏.
    $('#tags .tag-post').each(function() {
      let tagArr = $(this).attr('data-tags').split(', ');
      if ($.inArray(tag, tagArr) >= 0) {
        $(this).fadeIn();
      } else {
        $(this).hide();
      }
    });
  };

  /**
   * 切换标签时的帖子显示情况.
   */
  let changeTagPost = function() {
    $('#tags .chip').click(function() {
      // 如果当前标签已经激活了，则直接return.
      /*if ($(this).hasClass('chip-active')) {
        return;
      }*/

      // 获取选中的tag名称，并切换颜色效果.
      changeTagPostByTag($(this).text());
    });
  };

  /* 切换标签帖子. */
  let tagAnchor = decodeURI(window.location.hash);
  if (tagAnchor.indexOf('#') >= 0) {
    changeTagPostByTag(tagAnchor.split('#')[1]);
  }
  changeTagPost();

  /*菜单切换*/
  $('.button-collapse').sideNav();

  /*设置所有文章div的宽度*/
  let setArtWidth = function() {
    let w = $('#navContainer').width();
    if (w >= 450) {
      w = w + 21;
    } else if (w >= 350 && w < 450) {
      w = w + 18;
    } else if (w >= 300 && w < 350) {
      w = w + 16;
    } else {
      w = w + 14;
    }
    $('#articles').width(w);
  };

  /**
   * 修复footer部分的位置，使得在内容比较少时，footer也会在底部.
   */
  let fixFooterPosition = function() {
    $('.content').css('min-height', window.innerHeight - 165);
  };

  setArtWidth();
  fixFooterPosition();

  /*调整屏幕宽度时重新设置文章列的宽度，修复小间距问题*/
  $(window).resize(function() {
    setArtWidth();
    fixFooterPosition();
  });

  /*初始化瀑布流布局*/
  $('#articles').masonry({
    itemSelector: '.article'
  });

  AOS.init({
    easing: 'ease-in-out-sine',
    duration: 700,
    delay: 100
  });

  /*文章内容详情的一些初始化特性*/
  let articleInit = function() {
    $('#articleContent a').attr('target', '_blank');

    $('#articleContent img').each(function() {
      let imgPath = $(this).attr('src');
      $(this).wrap('<div class="img-item" data-src="' + imgPath + '"></div>');
    });
    $('#articleContent, #cd-timeline').lightGallery({
      selector: '.img-item'
    });

    // progress bar init
    const progressElement = window.document.querySelector('.progress-bar');
    new ScrollProgress((x, y) => {
      progressElement.style.width = y * 100 + '%';
    });
  };
  articleInit();

  $('#toggleSearch').click(function() {
    $('#searchModal').openModal();
  });

  /*回到顶部*/
  $('#backTop').click(function() {
    $('body,html').animate({scrollTop: 0}, 400);
    return false;
  });

  /*监听滚动条位置*/
  $(window).scroll(function() {
    /*回到顶部按钮根据滚动条的位置的显示和隐藏*/
    if ($(window).scrollTop() < 100) {
      $('#headNav').addClass('nav-transparent');
      $('.top-scroll').slideUp(300);
    } else {
      $('#headNav').removeClass('nav-transparent');
      $('.top-scroll').slideDown(300);
    }
  });
});
