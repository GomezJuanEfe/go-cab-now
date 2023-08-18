import './Reschedule.scss';
import { useContext } from 'react';
import CabSearchModal from '../CabSearchModal';
import { DashboardContext } from '../../store/DashboardContext';

const Reschedule = () => {
  const handleSubmit = () => {
  };
  const { showReschedule } = useContext(DashboardContext);
  console.log(showReschedule);
  return (
    <div>
      <CabSearchModal
        showButton
        show={showReschedule}
      >
        <div>
          <button
            onSubmit={handleSubmit}
            className="btn__profile_reschedule"
            type="submit"
          >
            Reschedule
          </button>
        </div>
      </CabSearchModal>
    </div>

  );
};

export default Reschedule;
