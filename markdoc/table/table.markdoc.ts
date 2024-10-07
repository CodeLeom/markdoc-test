import { Table } from '../../components'

export const table = {
  render: Table,
  children: ['thead', 'tbody', 'tr', 'th', 'td'],
  attributes: {
    bordered: {
      type: Boolean,
      default: true,
    },
  },
};