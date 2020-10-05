import { schema } from 'normalizr';

let user = new schema.Entity('users');
let comment = new schema.Entity('comments', {
    user
});
let artical = new schema.Entity('articals', {
    author: user,
    editorInCharge: user,
    comments: [comment]
});

export { artical, comment, user };