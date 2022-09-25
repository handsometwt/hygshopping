import {getList} from "@/api/ajax";

const se={
    state: () => ({

        totalList:[]

    }),
    mutations: {
        GetList2(state,value){
            state.totalList=value
        }
    },
    actions: {
  async  GetList(context,value){
      const l=await  getList(value);
      console.log(l)
       context.commit("GetList2",l.data)
    }
    }


    ,
    getters: {

    }




}
export default se
