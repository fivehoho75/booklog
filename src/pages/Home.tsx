import React, { Component } from 'react';
import PageTemplate from 'components/templates/PageTemplate';
import Base from 'containers/base/Base';
import { RouteComponentProps } from 'react-router';
import { BaseActions } from 'store/actionCreators';

interface Props {
  mode: string;
}

class Home extends Component<RouteComponentProps<Props>> {
  constructor(props: RouteComponentProps<Props>) {
    super(props);

    if (this.props.match.params.mode) {
      BaseActions.exitLanding();
    }
  }
  render() {
    return (
      <PageTemplate>
        Landing 자리
        <Base />
      </PageTemplate>
    );
  }
}

export default Home;
