import './custom';

import Mock from 'mockjs';

Mock.mock("/data/artical", {
    status: 200,
    statusText: 'OK',
    data: {
        "articals|10": [
            {
                id: '@GUID',
                label: '@CUSTOMARTICALLABEL',
                title: '@TITLE',
                time: '@CUSTOMTIME(5000)',
                author: '@CUSTOMUSER',
                editorInCharge: '@CUSTOMUSER',
                poster: '@DATAIMAGE(100x50)',
                commentNumber: '@NATURAL'
            }
        ]
    }
});

Mock.mock("/data/artical/newest", {
    status: 200,
    statusText: 'OK',
    data: {
        "articals|10": [
            {
                id: '@GUID',
                label: '最新',
                title: '@TITLE',
                time: '@CUSTOMTIME(5000)',
                author: '@CUSTOMUSER',
                poster: '@DATAIMAGE(100x50)',
                commentNumber: '@NATURAL'
            }
        ]
    }
});

Mock.mock('/data/carousel', Mock.mock({
    "data|5": [
        {
            id: '@GUID',
            imgUrl: '@DATAIMAGE(300x100)'
        }
    ]
}).data);

Mock.mock(/\/data\/articaldetail\/*/, {
    status: 200,
    statusText: 'OK',
    data: {
        body: '@CPARAGRAPH(20,30)',
        editorInCharge: '@CUSTOMUSER',
        'relatedArticle|2-5': [
            {
                id: '@GUID',
                title: '@TITLE',
                time: '@CUSTOMTIME(5000)',
                poster: '@DATAIMAGE(100x100)'
            }
        ],
        "comments|3-8": [
            {
                id: '@GUID',
                user: '@CUSTOMUSER',
                time: '@CUSTOMTIME(10000)',
                text: '@paragraph(1)',
                floorNumber: '@NATURAL(0, 50)',
                follow: '@NATURAL(0, 10)',
                support: '@NATURAL(0, 10)',
                oppose: '@NATURAL(0, 10)',
            }
        ]
    }
});
