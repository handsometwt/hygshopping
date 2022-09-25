import { uuid } from 'uuid';
const getUUID=()=>{

    const id=localStorage.getItem("uuidToken")
    if (!id){

       const  u=uuid.v4()

         localStorage.setItem('uuidToken',u);
    }


}
export default getUUID;
