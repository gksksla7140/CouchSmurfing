import React from 'react';
import Header from '../general/header';
import { withRouter } from 'react-router';
import HostIndexContainer from '../hosts/host_index_container';
import CityMapContainer from '../general/city_map_container';


class CityView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  componentDidMount(){
    this.props.fetchCity(this.props.params.cityId)
    this.props.fetchHosts(this.props.params.cityId)
  }



  render() {

    const imageStyle = {
      background: `linear-gradient(rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)),
      url(${this.props.city.banner_url})`,
      width: "100%",
      backgroundSize: "cover",
      height: "400px"
    }

    return (
      <div id="city-view" className="user-main-view">
        <Header user={this.state.user} />
        <div id='city-view-content' className='city-view-content'>
          <div id="city-splash" className="splash-wrapper" style={imageStyle}>
              <div className='back-link' onClick={() => this.props.router.goBack()}>
                <i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
                Back
              </div>
              <h1>{this.props.city.name}</h1>
          </div>
          <div className='city-description'>{this.props.city.description}</div>
          <div className='hosts-index'>
            <HostIndexContainer />

          </div>
          <CityMapContainer />
        </div>

      </div>
    );
  }
}

export default withRouter(CityView);