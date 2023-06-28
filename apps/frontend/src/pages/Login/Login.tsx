import { useNavigate } from 'react-router-dom';
import GoogleIcon from '~/assets/google_logo.svg';

import { LoginButton } from '@local/ui-kit';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-2xl px-8 py-4 m-a bg-neutral-800 c-white md:(px-18 py-14)">
      <p className="text-(center lg) font-600 m-0 mb-4">Login</p>
      <LoginButton
        dataTestId="sign_in_google"
        onClick={() => {
          // signInWithGoogle
          return navigate('/');
        }}
      >
        <img className="w-6 md:(w-8)" src={GoogleIcon} />
        SIGN IN WITH GOOGLE
      </LoginButton>
    </div>
  );
}

export default Login;
