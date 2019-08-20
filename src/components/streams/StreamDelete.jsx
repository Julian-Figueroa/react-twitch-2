import React, { Fragment, Component } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { deleteStream, fetchStream } from '../../store/actions';

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderActions() {
    return (
      <Fragment>
        <button onClick={this.onSubmit} className='ui approve button'>
          Delete
        </button>
        <button
          onClick={() => history.push('/')}
          className='ui button negative'
        >
          Cancel
        </button>
      </Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this Stream?';
    }
    return `Are you sure you want to delete this Stream with title: ${
      this.props.stream.title
    } `;
  }

  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title='Delete Stream'
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { deleteStream, fetchStream }
)(StreamDelete);
