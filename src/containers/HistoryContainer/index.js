import React, { Component } from "react";
import History from "../../components/History";
import { connect } from "react-redux";
import { scanHistory } from "../../actions";

class HistoryContainer extends Component {

  componentDidMount() {
    let organizerId = this.props.auth.data.accountId;
    this.props.scanHistory(organizerId, 1, true);
  }

  onLoadMore() {
    if (this.props.history.pagination){
      let organizerId = this.props.auth.data.accountId;
      let { next, page } = this.props.history.pagination;
      if (next){
        this.props.scanHistory(organizerId, page + 1, false);
      }
    }
  }

  onRefresh() {
    let organizerId = this.props.auth.data.accountId;
    this.props.scanHistory(organizerId, 1, true);
  }

  render() {
    return (
      <History
        data={this.props.history.data}
        isRefreshing={this.props.history.isLoading}
        onLoadMore={() => this.onLoadMore()}
        onRefresh={() => this.onRefresh()}
        navigation={this.props.navigation}/>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  history: state.history
});

const mapDispatchToProps = dispatch => ({
  scanHistory: (organizer_id, page, isReset) => dispatch(scanHistory(organizer_id, page, isReset))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryContainer);

