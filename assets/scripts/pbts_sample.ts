
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

import $pb from '../proto/proto.js' // 这里一定要引入 proto.js, 引入 proto 不行

@ccclass('PbtsSample')
export class PbtsSample extends Component {

    start() {
        console.log($pb);
        // 创建结构
        let msg = new $pb.response.UserInfo()
        msg.age = 2; // 赋值
        // 编码成二进制文件
        const data = $pb.response.UserInfo.encode(msg).finish();
        // 从二进制文件解码到指定结构
        const userInfo = $pb.response.UserInfo.decode(data);
        console.log(userInfo);
    }

}
