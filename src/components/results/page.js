import React, { Fragment } from 'react';
// Reinicia algunos estilos que causan conflictos en las páginas.
import CssBaseLine from '@material-ui/core/CssBaseLine'
import AppBar from '../appBar'

function Page(props) {
    return(
        <Fragment>
            <CssBaseLine />
            <AppBar />
        </Fragment>
    );
}

export default Page;