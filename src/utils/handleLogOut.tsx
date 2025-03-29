import { useNavigate } from 'react-router-dom';

export const useHandleLogOut = () => {
   const navigate = useNavigate();
   
   return () => {
      localStorage.removeItem('authToken');
      navigate('/auth/login');  
   };
};