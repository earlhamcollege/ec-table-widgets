module.exports = {
  extend: 'apostrophe-widgets',
  contextual: true,
  label: 'Ec Table',
  addFields: [
    {
      name: 'table_title',
      type: 'string',
      label: 'Title'
    },
    {
      name: 'row_array',
      type: 'array',
      label: 'Table Info',
      schema: [
        {
          name: 'table_row',
          type: 'string',
          label: 'Table row (delimit with &)',
          required: false
        }
      ]
    }
  ],
  construct: function (self, options) {
    self.pushAsset('stylesheet','ec-table');
  }
};
