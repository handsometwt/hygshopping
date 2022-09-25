import {getTradeInfo} from "@/api/ajax";

const trade = {
    state: () => ({
tradeInfo:{}

    }),
    mutations: {
        getTrade1(state,value){
            state.tradeInfo=value
        }
    },
    actions: {
  async getTrade(context,value){
     const {data:res}=  await  getTradeInfo()
       context.commit("getTrade1",res.data)
   },



    },
    getters: {


    }
}
export default trade

