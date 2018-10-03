module.exports = {
  extend: 'apostrophe-widgets',
  contextual: true,
  label: 'Ec Table',
  addFields: [
    {
      name: 'table_border_color',
      type: 'select',
      required: false,
      label: 'Select Highlight Color',
      choices: [
        {
          label: 'Color 0 (No Color)',
          value: '0'
        },
        {
          label: 'Color 1 (Yellow)',
          value: '1'
        },
        {
          label: 'Color 2 (Red)',
          value: '2'
        },
        {
          label: 'Color 3 (Maroon)',
          value: '3'
        },
        {
          label: 'Color 4 (Blue)',
          value: '4'
        }
      ]
    },
    {
      name: 'table_bg_color',
      type: 'select',
      required: false,
      label: 'Select backgorund Color',
      choices: [
        {
          label: 'Color 0 (No Color)',
          value: '0'
        },
        {
          label: 'Color 1 (White)',
          value: '1'
        },
        {
          label: 'Color 2 (Off-white)',
          value: '1'
        }
      ]
    },
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
    self.pushAsset('stylesheet','variables');
  }
};
