# 口袋48成员房间数据统计可视化
[TOC]
## 简介
在棒哥的鼓励下完成的《口袋48成员房间数据统计的可视化》，感谢棒哥！<br>
这依然是一个vue的前端开发，数据需自行获取<br>
有问题加Q群：691963133<br>
或者微博私信[-青春的小尾巴-](https://weibo.com/amber0401)

## 更新记录
- 2019/07/09
    - 拆分了文字信息和暗号为Complete、Dark组件
    - 使用了vuex管理数据
    - 调整了各图表显示的逻辑
    - 调整了打包的资源路径

- 2019/07/06
    - 修复了初始化进入显示错乱的bug，隐藏了敏感内容，新增了输入暗号显示全部信息

- 2019/07/04
    - 首次提交

## 数据结构
- 综合数据
```javascript
// weekData.json
{
    "msg": [ //成员消息
        {
            "name": "普通翻牌",
            "type": "REPLY",
            "value": 469
        },
        {
            "name": "文字消息",
            "type": "TEXT",
            "value": 327
        },
        {
            "name": "图片",
            "type": "IMAGE",
            "value": 73
        },
        {
            "name": "直播/电台",
            "type": "LIVEPUSH",
            "value": 15
        },
        {
            "name": "偶像/匿名 翻牌",
            "type": "FLIPCARD",
            "value": 12
        },
        {
            "name": "视频",
            "type": "VIDEO",
            "value": 2
        },
        {
            "name": "语音",
            "type": "AUDIO",
            "value": 0
        },
        {
            "name": "其他消息",
            "type": "OTHER",
            "value": 0
        }
    ],
    "man": [ // 距离5点最接近的两个时间点
        {
            "time": 1561410151469,
            "dataTime": [
                "2019-06-25",
                "05:02:31"
            ]
        },
        {
            "time": 1559595546359,
            "dataTime": [
                "2019-06-04",
                "04:59:06"
            ]
        }
    ],
    "allNumber": 8978, // 口袋房间诞生的总消息数量
    "idlist": 670 // 口袋房间留言的总人数
}
```
- 每天在房间的留言数量 ``
```javascript
    // day.json
    [
        {
            "name": "2019-06-01",
            "msgTime": 1559404799780,
            "value": 43
        }
    ]
```
- 聚聚一个月总投票数
```javascript
    // gift.json
    [
        {
            "name": "聚聚昵称",
            "value": 1
        }
    ]
```
- 聚聚一个月总留言数
```javascript
    // gift.json
    [
        {
            "user_id": 0000,
            "name": "聚聚昵称",
            "value": 540
        }
    ]
```
- 聚聚一个月被翻牌数
```javascript
    // reply.json
    [
        {
            "name": "聚聚昵称",
            "value": 540
        }
    ]
```