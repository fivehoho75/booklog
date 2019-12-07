import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import BaseTemplate from 'components/templates/BaseTemplate';
import { Switch, Route, withRouter } from 'react-router-dom';
import { BookLog, Book } from 'pages';
import { StoreState } from 'store';
import BaseHeaderContainer from './BaseHeaderContainer';
import BaseSidebarContainer from './BaseSidebarContainer';

interface Props extends RouteComponentProps<any> {
  landing: boolean;
}

export class Base extends Component<Props> {
  render() {
    if (this.props.landing) {
      return null;
    }
    return (
      <BaseTemplate sidebar={<BaseSidebarContainer />}>
        <BaseHeaderContainer />
        <Switch>
          <Route exact path="/(|log)" component={BookLog} />
          <Route path="/book" component={Book} />
        </Switch>
      </BaseTemplate>
    );
  }
}

export default withRouter(
  connect(
    ({ base }: StoreState) => ({
      landing: base.landing,
    }),
    () => ({})
  )(Base)
);
