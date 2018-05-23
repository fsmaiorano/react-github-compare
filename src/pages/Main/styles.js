import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 60px;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  max-width: 400px;
  margin-top: 20px;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;

    border: ${props => (props.withError ? '2px solid #F00' : 0)};
  }

  button {
    width: 80px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b0;
    color: #fff;
    border: 0;
    font-size: 20x;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #52d89f;
    }
  }
`;
