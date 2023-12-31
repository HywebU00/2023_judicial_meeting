// 自行加入的JS請寫在這裡
//會議主題限字數
$(function () {
  var meetingtheme_len = 30; // 超過100個字以"..."取代
  $('.meetingblock')
    .find('td.theme')
    .each(function (i) {
      if ($(this).text().length > meetingtheme_len) {
        $(this).attr('title', $(this).text());
        var text =
          $(this)
            .text()
            .substring(0, meetingtheme_len - 1) + '...';
        $(this).text(text);
      }
    });

  $('.single_meeting')
    .find('.title')
    .each(function (i) {
      if ($(this).text().length > meetingtheme_len) {
        $(this).attr('title', $(this).text());
        var text =
          $(this)
            .text()
            .substring(0, meetingtheme_len - 1) + '...';
        $(this).text(text);
      }
    });

  $('.meetingslider').slick({
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 6000,
    arrows: false,
    // fade: true,
    cssEase: 'linear',
  });
});
