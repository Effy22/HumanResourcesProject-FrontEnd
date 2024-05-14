import { useDispatch, useSelector } from 'react-redux';
import { fetchFindAllMyLeaves } from '../../../store/feautures/leaveEmployeeSlice';

function FindAllMyLeave(){
    const dispatch = useDispatch();
    const findAllMyLeaves = useSelector(state => state.leave.findAllMyLeaves);

    return(
        <>
            <div className="rowT">
        <table className="leave-table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Leave Type</th>
            </tr>
          </thead>
          <tbody>
            {findAllMyLeaves && findAllMyLeaves.map((data, index) => (
              <tr key={index}>
                <th scope="row">{data.id}</th>
                <td>{data.startDate}</td>
                <td>{data.endDate}</td>
                <td>{data.leaveType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
        
    );  
}

export default FindAllMyLeave;
