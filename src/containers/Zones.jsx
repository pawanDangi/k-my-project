import React from 'react';

import PaperMain from '../components/PaperMain';
import { getMethod } from '../api/apiMethods';
import { zones as zonesAPI } from '../api/endPoint';
import loader from '../utils/loader';

class Zones extends React.Component {
  state = {
    zones: [],
  };

  componentDidMount() {
    this.getZones();
  }

  getZones = async queryString => {
    const endPoint = queryString ? `${zonesAPI}&${queryString}` : zonesAPI;
    loader(true);
    const res = await getMethod(endPoint);
    if (!res.message) {
      const { zoneDetails } = res;
      this.setState({ zones: zoneDetails || [] });
    }
    setTimeout(() => {
      loader(false);
    }, 500);
  };

  render() {
    const { zones } = this.state;
    console.log(zones);
    return <PaperMain>hello</PaperMain>;
  }
}

export default Zones;
