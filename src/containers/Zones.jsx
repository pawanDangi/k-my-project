import React from 'react';
import moment from 'moment';

import { find } from 'lodash';
import PaperMain from '../components/PaperMain';
import TableView from '../components/TableView';
import ZonesHeader from '../components/zones/ZonesHeader';
import ZoneForm from '../components/zones/ZoneForm';
import ActionItems from '../components/ActionItems';
import {
  getMethod,
  postMethod,
  putMethod,
  deleteMethod,
} from '../api/apiMethods';
import {
  zones as zonesAPI,
  createZone,
  updateZone,
  deleteZone,
} from '../api/endPoint';
import loader from '../utils/loader';
import snackbar from '../utils/snackbar';
import alert from '../utils/alert';
import searchTimeout from '../utils/search-timeout';

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
    type: 'create',
    zone: {},
    openForm: false,
  };

  componentDidMount() {
    this.getZones();
  }

  getZones = async queryString => {
    const endPoint = queryString ? `${zonesAPI}&${queryString}` : zonesAPI;
    if (!queryString) {
      loader(true);
    }
    const res = await getMethod(endPoint);
    if (!res.message) {
      const { zoneDetails } = res;
      this.setState({ zones: zoneDetails || [] });
    }
    setTimeout(() => {
      loader(false);
    }, 500);
  };

  action = ({ type, ...rest }) => {
    if (type === 'create') {
      this.setState({ openForm: true });
    }
    if (type === 'edit') {
      const { zones } = this.state;
      const zone = find(zones, z => z.id === rest.id);
      this.setState({ zone, type });
      this.setState({ openForm: true });
    }
  };

  onSearch = searchText => {
    searchTimeout(() => {
      this.getZones(`q=${searchText}`);
    });
  };

  formCancel = () => this.setState({ openForm: false, zone: null, type: null });

  formSave = async data => {
    loader(true);
    let res;
    this.setState({ zone: data });
    if (!data.id) {
      res = await postMethod(createZone, data);
    }
    if (data.id) {
      this.setState({ zone: data });
      res = await putMethod(updateZone, data);
    }
    if (res && res.errorMessage) {
      snackbar({ variant: 'error', message: res.errorMessage });
    } else {
      this.getZones();
      this.formCancel();
      snackbar({
        variant: 'success',
        message: data.id
          ? 'Zone details have been updated.'
          : 'Zone is created.',
      });
    }
  };

  zoneDelete = id => {
    alert({
      open: true,
      title: 'Confirmation?',
      text: 'Are you sure, you want to delete the Zone?',
      handleSuccess: async () => {
        loader(true);
        const res = await deleteMethod(deleteZone.replace('{{zoneId}}', id));
        if (res.errorMessage) {
          snackbar({ variant: 'error', message: res.errorMessage });
        } else {
          this.formCancel();
          this.getZones();
          snackbar({ variant: 'success', message: 'Zone has been deleted.' });
        }
        loader(false);
      },
    });
  };

  RowAction = ({ id }) => (
    <ActionItems
      id={id}
      action={type => {
        this.action({ type, id });
      }}
    />
  );

  render() {
    const { zones, type, zone, openForm } = this.state;
    return (
      <PaperMain>
        <ZonesHeader
          action={this.action}
          count={zones.length}
          onSearch={this.onSearch}
        />
        <TableView columns={columns} rows={zones} action={this.RowAction} />
        <ZoneForm
          type={type}
          zoneDetails={zone}
          open={openForm}
          onCancel={this.formCancel}
          onSave={this.formSave}
          onDelete={this.zoneDelete}
        />
      </PaperMain>
    );
  }
}

export default Zones;
