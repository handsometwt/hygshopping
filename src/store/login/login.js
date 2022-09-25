import {login,getUserInfo,logout} from "@/api/ajax"


const logIn = {
    state: () => ({

user:{},name:""
    }),
    mutations: {
        userLogin1(state,value){
        state.user=value

        },
        getUserMessage1(state,value){
            state.name=value

        }
    },
    actions: {
      async  userLogin(context,value){
            const {data:res} = await login(value)
          if (res.code==200){
              context.commit("userLogin1",res)
          }else {

              return Promise.reject(new Error("fail"))
          }


        },
     async   getUserMessage(context){
      const {data:res}= await    getUserInfo()
         console.log(res)
          context.commit("getUserMessage1",res.data.loginName)
        },

    async  tuichu(){ const {data:res}=await logout()
     if (res.code==200){
         return "ok"
     }else {
       return   Promise.reject(new Error("退出失败"))
     }
      }

    },
    getters: {


    }
}
export default logIn

