# Front End Engineer Technical Assessment

This is a a single page React application coded in Typescript that displays a table of financial instruments:

![grid](https://github.com/RoyGriffiths/financial-grid/assets/33910329/22b27cde-09a0-4a69-ac71-7e8338c7214d)

## How To Run The Application

**Prerequities**:

This project uses npm and assumes that this is already available on your machine.  
If you do not have this available, please follow instructions at: https://nodejs.org/en/learn/getting-started/how-to-install-nodejs  

**Steps**:  

**1.** Clone the repo by clicking on <> Code at the top of this page and select your choice of clone method.
   - Note that this will take a few minutes as the node_modules and dist build folders have been added for compatibility within JPMC.
   
**2.** Open up a terminal and cd into the root directory of the file. 
   - As the project already contains the node_modules and build files, there is no need to run any package installs. 

**3.** If you wish to run a local development vesion of the app, run the following:
   
```
npm run dev
```

This sets up a development environment with features like automatic code reloading at http://localhost:5173/. 

**4.** If you wish to run a production ready version, run the following:
   - As before, since the node_modules and build folders have been included from the start, there is no need to run any builds.

```
npm run preview
```

This will boot up a local static web server that serves the files from dist at http://localhost:4173.  

## Testing Data

Currently, the application takes the src/stubs/test-data.json file and uses that as input to the grid.  
If you wish to use a separate file, please replace this file's contents with your own. 

Please note the input data is filtered and removes any rows that:
  - Does not contain any of the "ticker", "price", or "assetClass" values.  
  - The "assetClass" value is not any of "Commodities", "Equities", or "Credit".  
  - The cell values are not of the expected types, ie string for "ticker" and "assetClass", number for "price".  

Any row with additional attributes are included in the data, however those attributes are ignored.  

## Functionality

1. **Ability to sort each of the columns by clicking the column header:**
   - For the "Asset Class" column: Sorts in the order of "Commodities, "Equities", then "Credit" when in ascending order.
   - For the "Price" column: Able to sort by both ascending and descending size order.
   - For the "Ticker" column: Able to sort by both ascending and descending alphabetical order.
     
2. **Colour coded rows:**  
  - Commodities = White, Equities = Blue, Credit = Green.  

<img src="https://github.com/RoyGriffiths/financial-grid/assets/33910329/dd4cb85a-93ae-451a-adf3-b00496384e0b" width="600" height="400">  

3. **Column filtering:**  
  - By hovering over the column header, you can select the filter button to launch a new UI that allows you to create a filter:  
<img src="https://github.com/RoyGriffiths/financial-grid/assets/33910329/bc9737ef-95ec-4e7d-bee8-1264194fc651" width="700" height="180">  

<img src="https://github.com/RoyGriffiths/financial-grid/assets/33910329/5a1d9fd8-24c0-491c-8b03-1860850dbb01"  width="400" height="320">    

<img src="https://github.com/RoyGriffiths/financial-grid/assets/33910329/293987a7-f555-4dfd-a442-be64c73ff85c"  width="280" height="320">    
  
4. **Column reordering:**  
   - By dragging the column headers, you can swap columns around or even remove the column entirely:  
  
<img src="https://github.com/RoyGriffiths/financial-grid/assets/33910329/b6ead400-d57e-4a3b-9e76-89f2f8fac292"  width="700" height="200">    

  
5. **Multi-column sorting:**
   - By pressing the ctrl key at the same time as clicking a column header, you can sort multiple columns at the same time:
   - In the below example, we first sort by Asset Classin ascending order, then by Price in descending order. 
    
<img src="https://github.com/RoyGriffiths/financial-grid/assets/33910329/6d9179c9-dd46-49b1-8292-bf7c99c67ac2"  width="600" height="400">  


## Future Potential Enhancements:

Due to the implimentation, there is a lot of potential for the grid to be improved upon, here are a few:

1. **Output a CSV file of the data displayed on the grid.**
   - Due to the implementation of AG Grid, we can leverage functions to output the data directly into a CSV file with the addition of a button.
   - We currently have filtering of data before it is displayed. We could have an additional button to output "error-rows.csv" for debugging purposes for example.
2. **Allow for custom filter settings for each column.**
   - Currently, the column filters are the same for each column. In a future enhancement, we could add a filter for the Asset Class column to only be able to select 3 values for example.
3. **Optional formating on the price data column.**
   - You could format the price number so that it shortens it. For example instead of 30000, you could display 30K. This behaviour is seen on some DPD widgets.
4. **Add new grid types.**
   - In a React fashion, the components have been divided in a way such that you can reuse the Grid component for more grid types.
