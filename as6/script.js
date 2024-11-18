// 時間軸
$(document).ready(function() {
    const items = $('.timeline-item');
    
    // 檢查元素是否進入視窗
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        // 當元素的頂部進入視窗底部往上 20% 的位置時觸發
        const triggerPoint = windowHeight * 0.8;
        
        return rect.top <= triggerPoint;
    }

    // 處理滾動動畫
    function handleScroll() {
        items.each(function() {
            if (isElementInViewport(this) && !$(this).hasClass('active')) {
                $(this).addClass('active');
            }
        });
    }

    // 初始檢查
    handleScroll();

    // 添加滾動事件監聽器
    $(window).on('scroll', function() {
        handleScroll();
    });
});


// 翻翻卡

$(document).ready(function() {
    const flipCardSection = $('#flip_card');
    const questionText = $('.question-text');
    const flipCards = $('.flip-card');
    let cardsShown = false;
    let questionShown = false;
    let cardsFlipped = false;

    function updateElements() {
        const scrollPosition = $(window).scrollTop();
        const sectionOffset = flipCardSection.offset().top;
        const windowHeight = $(window).height();
        const relativeScroll = scrollPosition - sectionOffset;
        
        // 當進入 flip_card section 時顯示卡片
        if (scrollPosition >= sectionOffset && !cardsShown) {
            flipCards.each(function(index) {
                setTimeout(() => {
                    $(this).addClass('show');
                }, index * 200);
            });
            cardsShown = true;
        }

        // 在 150vh 時顯示問題文字
        if (relativeScroll >= windowHeight * 1.5 && !questionShown) {
            questionText.css('opacity', '1');
            questionShown = true;
        }

        // 在 250vh 時翻轉卡片
        if (relativeScroll >= windowHeight * 2.5 && !cardsFlipped) {
            flipCards.each(function(index) {
                setTimeout(() => {
                    $(this).addClass('flipped');
                }, index * 300);
            });
            cardsFlipped = true;
        }

        // 如果滾動回到 section 之前，重置所有狀態
        if (scrollPosition < sectionOffset) {
            flipCards.removeClass('show flipped');
            questionText.css('opacity', '0');
            cardsShown = false;
            questionShown = false;
            cardsFlipped = false;
        }
    }

    // 初始檢查
    updateElements();

    // 滾動時更新
    $(window).on('scroll', updateElements);
});