import {getDetail} from "@/api/ajax";

const detail = {
    state: () => ({
    detailList:[]

    }),
    mutations: {
        mdetails(state,value){
             state.detailList=value
        }
    },
    actions: {
      async  details(context,value){

       const {data:res}=  await  getDetail(value)
          console.log(res.data)
          context.commit("mdetails",res.data)
        }


    },
    getters: {


    }
}
export default detail

