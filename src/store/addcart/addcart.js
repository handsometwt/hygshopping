import {AddShop,getCartList,updateCart,deleteCart,updateChange} from "@/api/ajax";
import getUUID from "@/util/uuid-token";

const addCart = {
    state: () => ({
cartList:[]

    }),
    mutations: {
       cartTotal(state,value){
        state.cartList=value
       }
    },
    actions: {
  async  Add(con,value){
      getUUID()
     const res=  await AddShop(value.id,value.num)

    },
      async  getCL(context,value){
             // getUUID()
     const {data:res}= await   getCartList()

          context.commit("cartTotal",res.data[0].cartInfoList)
          console.log("获取执行完毕")
        },
    async    update(context,value){

      await    updateCart(value.gid,value.sNum)
        console.log("更新执行完毕")
        },
      async delete(context,value){
      await   deleteCart(value)

        },
       async updateCheck(context,value){

      await updateChange(value.id,value.checked)

        }

    },
    getters: {


    }
}
export default addCart

