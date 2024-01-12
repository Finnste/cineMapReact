import { useEffect } from 'react';
import { navigate } from 'gatsby';

const Index = () => {
  useEffect(() => {
    navigate('/cinema-index');
  }, []);
  return null;
};

export default Index;