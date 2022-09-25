import request from "./re"
import re from  "./mockAjax"
export const reqGetCategoryList = () =>request.get(`/api/product/getBaseCategoryList`);
export  const  getBannerList=()=>re.get("bannerList");
export  const  getFloorList=()=>re.get("floorList");
export const getList=(params)=>request.post('/api/list',params);
export  const  getDetail=(gid)=>request.get(`/api/item/${gid}`);
export  const  AddShop=(skuid,num)=>request.post(`/api/cart/addToCart/${skuid}/${num}`)
export  const  getCartList=()=>request.get('/api/cart/cartList')
export  const  updateCart=(Id,Num)=>request.post(`/api/cart/addToCart/${Id}/${Num}`)
export  const  deleteCart=(id)=>request.delete(`/api/cart/deleteCart/${id}`)
export  const   updateChange=(skuID,isChecked)=>request.get(`/api/cart/checkCart/${skuID}/${isChecked}`)
export  const  getCode=(phone)=>request.get(`api/user/passport/sendCode/${phone}`)
export  const  register=(params)=>request.post(`/api/user/passport/register`,params)

export  const  login=(params)=>request.post(`/api/user/passport/login`,params)
export  const  getUserInfo=()=>request.get('api/user/passport/auth/getUserInfo')
export  const  logout=()=>request.get("/api/user/passport/logout")
export  const   getTradeInfo=()=>request.get('/api/order/auth/trade')
export  const  commitTrade=(tradeNo,params)=>request.post(`/api/order/auth/submitOrder?tradeNo=${tradeNo}`,params)
export  const  payMessage=(id)=>request.get(`/api/payment/weixin/queryPayStatus/${id}`)
