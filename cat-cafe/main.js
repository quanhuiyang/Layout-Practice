$(function(){
  /*=================================================
	jQuery平滑滾動
  ===================================================*/
  // 點擊站內的連結時觸發滾動事件
  $('a[href^="#"]').click(function(){
    // 取得連結屬性值
    let href= $(this).attr("href");
    // 跳往站內連結時的目標元素id設定
    let target = $(href == "#" || href == "" ? 'html' : href);
    // 取得頂部到該目標元素的值
    let position = target.offset().top;
    // animate設置滾動速度，使用offset方法取得目標元素相對於文件頂部的距離
    // 600單位毫秒顯示滑動速度
    $("html, body").animate({scrollTop:position}, 1200, "swing");
    return false;
  });
})