import Mock from 'mockjs';
import './custom';

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

Mock.mock('/carouselData', Mock.mock({
    "data|5": [
        {
            id: '@GUID',
            imgUrl: '@DATAIMAGE(300x100)'
        }
    ]
}).data)










// body: '@CPARAGRAPH(20,30)',
//                 'relatedArticle|2-5': [
//                     {
//                         id: '@GUID',
//                         title: '@TITLE',
//                         time: '@CUSTOMTIME(5000)',
//                         poster: '@DATAIMAGE(100x50)'
//                     }
//                 ],
//                 "comments|3-8": [
//                     {
//                         id: '@GUID',
//                         user: '@CUSTOMUSER',
//                         comment: '@paragraph(1)'
//                     }
//                 ]