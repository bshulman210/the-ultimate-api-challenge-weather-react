import React, { Fragment } from 'react';
import Header from '../Header';
import styles from './Page.module.css';
import Form from '../Form'
import Error from '../Error'
import Loader from '../Loader'
import Forecast from '../Forecast'
import useForecast from '../../hooks/useForecast';

const Page = () => {
    const {isError, isLoading, forecast, submitRequest} = useForecast()
    const onSubmit = (value) => {
        submitRequest(value)
    }
    return (
        <Fragment>
            <Header />
            {!forecast && (
            <div className={`${styles.box} position-relative`}>
                {!isLoading && <Form submitSearch={onSubmit}/>}
                {isError && <Error message={isError} />}
                {isLoading && <Loader />}
            </div>
            )}
            {forecast && <Forecast forecast={forecast}/>}
        </Fragment>
    );
};

export default Page;
