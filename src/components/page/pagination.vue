<template>
<div class="details">
  <div class="fr page">
    <div class="sui-pagination clearfix">
      <ul>
        <li class="prev disabled">
          <a href="#">«上一页</a>
        </li>
        <li class="active">
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li class="dotted"><span>...</span></li>
        <li class="next">
          <a href="#">下一页»</a>
        </li>
      </ul>
      <div><span>共10页&nbsp;</span></div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "pagination"
}
</script>

<style scoped>
.details .page {
  width: 733px;
  height: 66px;
  overflow: hidden;
  float: right;

}
.details .page .sui-pagination {
  margin: 18px 0;
}
.page .sui-pagination ul {
  margin-left: 0;
  margin-bottom: 0;
  vertical-align: middle;
  width: 490px;
  float: left;
}
.details .page .sui-pagination ul li {
  line-height: 18px;
  display: inline-block;
}
.details .page .sui-pagination ul li a {
  position: relative;
  float: left;
  line-height: 18px;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #e0e9ee;
  margin-left: -1px;
  font-size: 14px;
  padding: 9px 18px;
  color: #333;
}
.details .page .sui-pagination ul li.active a {
  background-color: #fff;
  color: #e1251b;
  border-color: #fff;
  cursor: default;
}
.details .page .sui-pagination ul li.prev a {
  background-color: #fafafa;
}
.details .page .sui-pagination ul li.disabled a {
  color: #999;
  cursor: default;
}
.details .page .sui-pagination ul li.dotted span {
  margin-left: -1px;
  position: relative;
  float: left;
  line-height: 18px;
  text-decoration: none;
  background-color: #fff;
  font-size: 14px;
  border: 0;
  padding: 9px 18px;
  color: #333;
}
.details .page .sui-pagination ul li.next a {
  background-color: #fafafa;
}
.page .sui-pagination div {
  color: #333;
  font-size: 14px;
  float: right;
  width: 241px;
}

</style>
