import React from 'react';
import moment from 'moment';

import PaperMain from '../components/PaperMain';
import TableView from '../components/TableView';
import { getMethod } from '../api/apiMethods';
import { zones as zonesAPI } from '../api/endPoint';
import loader from '../utils/loader';

const columns = [
  { name: 'Zone Name', key: 'zoneName' },
  { name: 'Description', key: 'description' },
  { name: 'Type', key: 'applianceType' },
  {
    name: 'Created On',
    key: 'createdTime',
    Cell: ({ value }) => moment.utc(value).format('MMM DD, YYYY'),
  },
  {
    name: 'Updated On',
    key: 'updatedTime',
    Cell: ({ value }) => moment.utc(value).format('MMM DD, YYYY'),
  },
];

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
    return (
      <PaperMain>
        <TableView columns={columns} rows={zones} />
      </PaperMain>
    );
  }
}

export default Zones;
