$(function() {

    /*顶部nav*/
    var swiper = new Swiper('.nav-container', {
        slidesPerView: 'auto',
        paginationClickable: true
    });
    $(".nav-ul .swiper-slide").click(function() {
        $(this).addClass("active-li").siblings().removeClass("active-li");
    });




    /*瀑布流初始化设置*/
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        gutter: 10
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().done(function() {
        console.log('uuuu===');
        $grid.masonry('layout');
    });
    var pageIndex = 0;
    var dataFall = [];
    var totalItem = 10;
    $(window).scroll(function() {
        $grid.masonry('layout');
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();
        if (scrollTop + windowHeight == scrollHeight) {
            var json = [{
                    "id": 1,
                    "title": "寻找民间工艺",
                    "articlePic": "finishing/img/works1.jpg",
                    "name": "莫听",
                    "commentCount": 1300.00,
                    "browseCount": 20,
                    "praiseCount": 30
                },
                {
                    "id": 2,
                    "title": "寻找墨花工艺",
                    "articlePic": "finishing/img/works2.jpg",
                    "name": "梨花淡白",
                    "commentCount": 133.00,
                    "browseCount": 8,
                    "praiseCount": 9
                },
                {
                    "id": 3,
                    "title": "林下漏月光",
                    "articlePic": "finishing/img/works4.jpg",
                    "name": "也无晴。",
                    "commentCount": "非卖品",
                    "browseCount": 20,
                    "praiseCount": 30
                },
                {
                    "id": 4,
                    "title": "绿叶在风中飞舞",
                    "articlePic": "finishing/img/works2.jpg",
                    "name": "花满城",
                    "commentCount": 133.00,
                    "browseCount": 8,
                    "praiseCount": 9
                },
                {
                    "id": 5,
                    "title": "我们在大草原的湖边",
                    "articlePic": "finishing/img/works5.jpg",
                    "name": "樱花草",
                    "commentCount": 13.00,
                    "browseCount": 20,
                    "praiseCount": 30
                },
                {
                    "id": 6,
                    "title": "看候鸟飞来",
                    "articlePic": "finishing/img/works4.jpg",
                    "name": "花满城",
                    "commentCount": 1335.00,
                    "browseCount": 8,
                    "praiseCount": 9
                },
                {
                    "id": 7,
                    "title": "我们都长大啦",
                    "articlePic": "finishing/img/works6.jpg",
                    "name": "杨花",
                    "commentCount": 103.00,
                    "browseCount": 20,
                    "praiseCount": 30
                },
                {
                    "id": 8,
                    "title": "就像一个娃娃",
                    "articlePic": "finishing/img/works5.jpg",
                    "name": "美丽",
                    "commentCount": 133.00,
                    "browseCount": 8,
                    "praiseCount": 9
                },
                {
                    "id": 9,
                    "title": "如果有来生",
                    "articlePic": "finishing/img/works3.jpg",
                    "name": "料峭春风",
                    "commentCount": 133.00,
                    "browseCount": 8,
                    "praiseCount": 9
                },
                {
                    "id": 1,
                    "title": "寻找民间工艺",
                    "articlePic": "finishing/img/works1.jpg",
                    "name": "莫听",
                    "commentCount": 1300.00,
                    "browseCount": 20,
                    "praiseCount": 30
                },
                {
                    "id": 1,
                    "title": "寻找民间工艺",
                    "articlePic": "finishing/img/works1.jpg",
                    "name": "莫听",
                    "commentCount": 1300.00,
                    "browseCount": 20,
                    "praiseCount": 30
                }
            ];
            dataFall = json
            setTimeout(function() {
                appendFall();
            }, 500)
        }

    })



    function appendFall() {
        $.each(dataFall, function(index, value) {
            var dataLength = dataFall.length;
            $grid.imagesLoaded().done(function() {
                $grid.masonry('layout');
            });
            var detailUrl;
            var $griDiv = $('<div class="grid-item item">');
            var $img = $("<img class='item-img'>");
            $img.attr('src', value.articlePic).appendTo($griDiv);
            var $section = $('<section class="section-p">');
            $section.appendTo($griDiv);
            var $p1 = $("<p class='title-p'>");
            $p1.html(value.title).appendTo($section);
            var $p2 = $("<p class='name-p'>");
            $p2.html(value.name).appendTo($section);
            var $p3 = $("<p class='price-p'>");
            $p3.html(value.commentCount).appendTo($section);
            var $items = $griDiv;
            $items.imagesLoaded().done(function() {
                $grid.masonry('layout');
                $grid.append($items).masonry('appended', $items);
            })
        });
    }






















})
