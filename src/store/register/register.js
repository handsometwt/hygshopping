import {getCode} from "@/api/ajax";

const register = {
    state: () => ({
    code:""

    }),
    mutations: {
        getyan1(state,value){

            state.code=value
        }
    },
    actions: {
      async  getyan(context,value){

        const {data:res}=   await getCode(value);
        context.commit("getyan1",res.data)
        }


    },
    getters: {


    }
}
export default register

