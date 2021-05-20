import React, {useEffect} from "react";
import { useHistory } from 'react-router-dom';
import {Routes} from "../routes";

export default () => {
  let history = useHistory();

  useEffect(() => {
    history.push(Routes.Signin.path);
  }, [history]);

  return (
    <>
    </>
  );
};
