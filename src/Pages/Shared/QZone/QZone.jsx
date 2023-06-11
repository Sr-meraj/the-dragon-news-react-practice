import QZone1 from '../../../assets/qZone1.png';
import QZone2 from '../../../assets/qZone2.png';
import QZone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-body-secondary p-3 position-relative'>
            <h3 className="fs-4 fw-bold pb-2">Q-Zone</h3>
            <div className="text-center">
                <img src={QZone1} alt="" className=' img-thumbnail bg-transparent border-0 p-0' />
                <img src={QZone2} alt="" className=' img-thumbnail bg-transparent border-0 p-0' />
                <img src={QZone3} alt="" className=' img-thumbnail bg-transparent border-0 p-0' />
            </div>
        </div>
    );
};

export default QZone;