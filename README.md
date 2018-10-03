# TABLE WIDGET
An [Apostrophe CMS](http://apostrophecms.org/) module to provide a configurable table for text content. 



## Install
From within your apostrophe project `npm install --save ec-table-widgets`

Include widget in app.js:

```
  modules: {
    'ec-quote-widgets': {},
    // ... other modules
}
```
## Configuration
### Colors
In css/variables.less, colors are assigned to variable names like this:
```
@table-color3: #861f41;
@table-color4: #6dc6e8;
```
These hex values can be edited without impacting the functionality. These values are used to configure the background and border colors of the table.

## Screenshots
![Alt text](https://i.postimg.cc/wvyN1WzW/Screenshot_from_2018-10-03_14-28-48.png)
