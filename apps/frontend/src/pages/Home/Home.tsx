import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { BackButton } from '@local/ui-kit';

import { selectAuthAdditionalUserInfo } from '../../store/auth/authSelectors';

function Home() {
  const navigate = useNavigate();
  const additionalUserInfo = useSelector(selectAuthAdditionalUserInfo);

  return (
    <div className="w-full max-w-1100px mx-a px-4 flex-1">
      <BackButton onClick={() => navigate('/login')}>Logout</BackButton>
      <div className="mt-20">
        <p className="c-white text-center">welcome {additionalUserInfo?.profile.name}.</p>
      </div>
    </div>
  );
}

export default Home;
