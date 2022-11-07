const nodeLabelStyle = {
  color: '#fff',
  position: 'left',
  verticalAlign: 'middle',
  align: 'right',
  fontSize: 16,
  backgroundColor: '#ce6f6f',
  padding: [8, 12, 8, 12],
  borderRadius: 5,
  formatter: '{b} --> {c}%',
};

export const data = {
  name: 'user_login',
  id: 1,
  label: {
    color: '#fff',
    backgroundColor: '#25ba1d',
    padding: [8, 12, 8, 12],
    borderRadius: 5,
    fontSize: 16,
  },
  children: [
    {
      name: 'transaction_failed',
      id: 4126,
      label: nodeLabelStyle,
      value: 3,
      children: [
        {
          name: 'purchase_item_x',
          id: 4116,
          label: nodeLabelStyle,
          value: 1.7,
        },
        {
          name: 'convert_currency',
          id: 4116,
          label: nodeLabelStyle,
          value: 4.1,
        },
      ],
    },
    {
      name: 'user_error_treshold',
      id: 4136,
      label: nodeLabelStyle,
      value: 5.4,
      children: [
        {
          name: 'add_card',
          id: 1616,
          label: nodeLabelStyle,
          value: 15,
        },
      ],
    },
    {
      name: 'fraud_deactivation',
      id: 4146,
      label: nodeLabelStyle,
      value: 1.5,
    },
  ],
};

export const data2 = {
  name: 'user_login2',
  id: 2,
  label: {
    color: '#fff',
    backgroundColor: '#25ba1d',
    padding: [8, 12, 8, 12],
    borderRadius: 5,
    fontSize: 16,
  },
  children: [
    {
      name: 'transaction_failed2',
      id: 4126,
      label: nodeLabelStyle,
      value: 3,
      children: [
        {
          name: 'purchase_item_x',
          id: 4116,
          label: nodeLabelStyle,
          value: 1.7,
        },
        {
          name: 'convert_currency',
          id: 4116,
          label: nodeLabelStyle,
          value: 4.1,
        },
      ],
    },
    {
      name: 'user_error_treshold2',
      id: 4136,
      label: nodeLabelStyle,
      value: 5.4,
      children: [
        {
          name: 'add_card',
          id: 1616,
          label: nodeLabelStyle,
          value: 15,
        },
      ],
    },
    {
      name: 'fraud_deactivation2',
      id: 4146,
      label: nodeLabelStyle,
      value: 1.5,
    },
  ],
};

export const pieceData = {
  name: 'user_login',
  label: {
    color: '#fff',
    backgroundColor: '#25ba1d',
    padding: [8, 12, 8, 12],
    borderRadius: 5,
    fontSize: 16,
  },
  children: [
    {
      name: 'user_error_treshold',
      id: 4136,
      label: nodeLabelStyle,
      value: 5.4,
      children: [
        {
          name: 'add_card',
          id: 1616,
          label: nodeLabelStyle,
          value: 15,
        },
      ],
    },
  ],
};
