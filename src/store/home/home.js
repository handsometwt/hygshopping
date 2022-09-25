import  {reqGetCategoryList} from "@/api/ajax"

 const home = {
    state: () => ({
        CategoryList:[]

    }),
    mutations: {
        GetCategoryList1(state,value){
            state.CategoryList=value

        }
    },
    actions: {
     async   GetCategoryList(context,value){

     const {data:res}=   await   reqGetCategoryList()

         if (res.code==200){
             context.commit("GetCategoryList1",res.data)
             console.log(res.data)
         }
        }


    },
    getters: {


    }
}
export default home;
