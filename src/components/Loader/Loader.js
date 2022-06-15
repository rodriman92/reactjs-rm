import {Spinner} from 'react-bootstrap';


export const Loader = () => {
    return (
        <Spinner size='xl' role="status" variant='danger' className='spinnerNewRelease'>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}