import { useEffect } from 'react';
import { navigate } from 'gatsby';

const Index = () => {
  useEffect(() => {
    navigate('/cinema-archive');
  }, []);
  return null;
};

export default Index;