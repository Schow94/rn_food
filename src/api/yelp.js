import axios from 'axios';

// Exporting axios for code reuse
export default axios.create({
  baseURL: `https://api.yelp.com/v3/businesses`,
  headers: {
    Authorization:
      'Bearer Li5lf6uc6T_PcnX4CSB1TAE9piKJ6OQ-Cgth2uk3qvJ03br_EZgUX1R8oEv_EXnZ5yqwrXMhgKX6sUb1V4ppXtpNNe8e0hA2vtWAKsO1RnhARMAsSr6XLdiL1F11XXYx',
  },
});
