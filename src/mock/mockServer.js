
import Mock from "mockjs"
import banner from "./banner.json"
import floor from "./floor.json"
Mock.mock("/mock/bannerList",{code:200,data:banner})
Mock.mock("/mock/floorList",{code:200,data:floor})
