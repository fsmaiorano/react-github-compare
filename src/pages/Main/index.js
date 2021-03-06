import React, { Component } from 'react';
import moment from 'moment';

import api from '../../services/api';
import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import CompareList from './../../components/CompareList/index';

class Main extends Component {
  state = {
    isLoading: false,
    repositories: [],
    repositoryInput: '',
    repositoryError: false,
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ isLoading: true });

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
      });
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">{this.state.isLoading ? <i className="fa fa-spinner fa-pulse" /> : 'OK' }</button>
        </Form>
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}

export default Main;
