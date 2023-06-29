import { useDispatch, useSelector } from 'react-redux';
import { authLogoutRequest } from '~/store/auth/authActions';
import { selectAuthAdditionalUserInfo } from '~/store/auth/authSelectors';

import { BackButton } from '@local/ui-kit';

function Home() {
  const dispatch = useDispatch();
  const additionalUserInfo = useSelector(selectAuthAdditionalUserInfo);

  return (
    <div className="w-full max-w-1100px mx-a px-4 flex-1">
      <BackButton onClick={() => dispatch(authLogoutRequest())}>Logout</BackButton>
      <div className="mt-20">
        <p className="c-white text-center">welcome {additionalUserInfo?.profile.name}.</p>
      </div>
    </div>
  );
}

export default Home;
