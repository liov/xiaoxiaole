import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('GameModelTest')
export class GameModelTest extends Component {
}


/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// cc.Class({
//     extends: cc.Component,
// 
//     properties: {
//         // foo: {
//         //    default: null,      // The default value will be used only when the component attaching
//         //                           to a node for the first time
//         //    url: cc.Texture2D,  // optional, default is typeof default
//         //    serializable: true, // optional, default is true
//         //    visible: true,      // optional, default is true
//         //    displayName: 'Foo', // optional
//         //    readonly: false,    // optional, default is false
//         // },
//         // ...
//     },
// 
//     // use this for initialization
//     // onLoad: function () {
//     //     var gameModel = new GameModel();
//     //     gameModel.init();
//     //     gameModel.printInfo();
//     //     for(var i = 1;i<=9;i++){
//     //         for(var j = 1;j<=9;j++){
//     //             console.log(gameModel.checkPoint(i,j).join(" ,"));
//     //         }
//     //     }
//     // },
// 
//     // called every frame, uncomment this function to activate update callback
//     // update: function (dt) {
// 
//     // },
// });
