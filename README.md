## TABLE WIDGET
An [Apostrophe CMS](http://apostrophecms.org/) module to provide a configurable table for text content, complete with size and color options.



### GETTING STARTED
#### Prerequisites
In order to use this module, you should have:
- NPM
- ApostropheCMS
#### Installing
From within your apostrophe project directory, run
 `npm install --save ec-table-widgets`

Include widget in projects' app.js file:

```
  modules: {
    'ec-table-widgets': {},
    // ... other modules
}
```
### Configuration
#### Colors
In css/variables.less, colors are assigned to variable names like this:
```
@table-color3: #861f41;
@table-color4: #6dc6e8;
```
These hex values can be edited without impacting the functionality. These values are used to configure the background and border colors of the table.

#### Size
The widget offers, by default, three size options: small, medium and large. These correspond to the tables width relative to the parent element, where 'small' is 25% of the parent, medium is 50% of the parent, and large is 100% of the parent width.

#### Delimiter
The character used to separate items in a row may be customized (by default '&'), so make sure the delimiter symbol does not conflict with your text content.
### Screenshots
![Alt text](https://i.postimg.cc/wvyN1WzW/Screenshot_from_2018-10-03_14-28-48.png)

### License
This project is licensed under the MIT License - see the LICENSE.md file for details.
