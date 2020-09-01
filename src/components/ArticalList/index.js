import React, { Fragment } from 'react';
import ArticalItem from '../ArticalItem';

function ArticalList({articals: { byId, allIds }}) {
    return (
        <Fragment>
            {
                allIds.map(item => {
                    return (
                        <ArticalItem key={byId[item].id} artical={byId[item]} />
                    );
                })
            }
        </Fragment>
    );
}

export default ArticalList;