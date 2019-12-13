import React, { Component, ChangeEvent, KeyboardEvent } from 'react';
import cx from 'classnames';
import './SearchBar.scss';
import { MdSearch } from 'react-icons/md';

interface Props {
  onSearch(keyword: string): void;
}

interface State {
  value: string;
  focus: boolean;
}

class SearchBar extends Component<Props, State> {
  input = React.createRef<HTMLInputElement>();
  state = {
    value: '',
    focus: false,
  };

  onFocus = () => {
    this.setState({
      focus: true,
    });
  };

  onBlur = () => {
    this.setState({
      focus: false,
    });
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value,
    });
  };

  onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.props.onSearch(this.state.value);
    }
  };

  render() {
    return (
      <div className={cx('SearchBar', { focus: this.state.focus })}>
        <div className="gray-rect">
          <MdSearch />
          <input
            value={this.state.value}
            ref={this.input}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
