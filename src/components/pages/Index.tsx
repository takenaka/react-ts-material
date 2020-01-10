import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'stores';
import userSlice, { setRandomName } from 'stores/user';
import { Button, Typography } from '@material-ui/core';

export default () => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.user.name);

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      dispatch(userSlice.actions.setName(e.target.value));
    }
  };

  const onClearClicked = () => {
    dispatch(userSlice.actions.clearName());
  };

  const onRandomClicked = async () => {
    dispatch(setRandomName());
  };

  return (
    <App>
      <Typography variant="h1" component="h1">
        Index
      </Typography>

      <h2>{name}</h2>

      <input value={name} type="text" onChange={onTextChange} />

      <StyleButton color="primary">hello</StyleButton>
      <button onClick={onClearClicked}>clear</button>
      <button onClick={onRandomClicked}>random</button>
    </App>
  );
};

const App = styled.div``;

const StyleButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: ${props => props.theme.palette.primary.main};
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;
