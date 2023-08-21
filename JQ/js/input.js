// 点击全选按钮
$("#checkAll").click(function () {
  let isChecked = $(this).prop("checked");
  $(".checkbox").prop("checked", isChecked);
});
// 点击单个商品的复选框
$(".checkbox").click(function () {});
// 点击减少数量按钮
$(".jian").click(function () {
  let quantity = parseInt($(this).next(".v").val());
  if (quantity > 1) {
    quantity--;
    $(this).next(".v").val(quantity);
  }
  updateSubtotal($(this));
});
// 点击增加数量按钮
$(".add").click(function () {
  let quantity = parseInt($(this).prev(".v").val());
  quantity++;
  $(this).prev(".v").val(quantity);
  updateSubtotal($(this));
});
// 更新小计金额
function updateSubtotal(element) {
  let spElement = element.closest(".sp");
  let price = parseFloat(spElement.find(".price").text());
  let quantity = parseInt(spElement.find(".v").val());
  let subtotal = price * quantity;
  spElement.find(".a").text("¥" + subtotal.toFixed(2));
}
// 删除按钮
$(".delete").click(function () {
  $(this).closest(".sp").remove();
});
// 清空购物车按钮
$(".footter a").click(function () {
  $(".nr_box").empty();
});
//删除部分已选商品
$(document).ready(function () {
  $(".foot a").click(function () {
    $("ul.sp input[type='checkbox']:checkbox").each(function () {
      $(this).closest("ul.sp").remove();
    });
  });
});
