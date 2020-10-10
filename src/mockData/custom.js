import Mock from 'mockjs';

const users = Mock.mock({
    "users|5": [
        {
            id: '@GUID',
            name: '@name',
            headSculpture: '@DATAIMAGE(150x150)',
            level: '@NATURAL(0, 100)',
            location: '-------'
        }
    ]
}).users;

const articalLabels = ['关注', '最新', '小米', '手机', 'Windows', 'Linux', '电脑', '行业前沿',
    '热榜', 'vivo', '热评', '精读', '原创', '评测', '直播', '5G', '阳台', '数码', '学院', 'VR',
    '智能汽车', '京东精选', '三星', '网络焦点', '华为', '专题', '投票', '魅族', '一加', '游戏电竞',
    '诺基亚', 'OPPO', '安卓', '苹果', 'LG', '科普', '锤子', '索尼', '联想'];

Mock.Random.extend({
    customUser() {
        return this.pick(users);
    },
    customArticalLabel() {
        return this.pick(articalLabels);
    },
    customTime(i = 60) {
        return new Date().getTime() + Math.round(Math.random() * 1000 * i)
    }
});