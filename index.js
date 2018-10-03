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
      name: 'table_delimiter',
      type: 'string',
      max: 1,
      label: 'Seperator for table items',
      def: '&'
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
    },
    {
      name: 'table_width',
      type: 'select',
      required: false,
      label: 'Select quote width',
      choices: [
        {
          label: 'No width constraint',
          value: '0'
        },
        {
          label: 'Small',
          value: '1'
        },
        {
          label: 'Medium',
          value: '2'
        },
        {
          label: 'Large',
          value: '3'
        }
      ]
    }
  ],
  construct: function (self, options) {
    self.pushAsset('stylesheet','ec-table');
  }
};
