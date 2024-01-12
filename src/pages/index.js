import * as React from "react";
import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default () => {
  useEffect(() => {
    navigate('/cinema-index');
  }, []);
  return null;
};