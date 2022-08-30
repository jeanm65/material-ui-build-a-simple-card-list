1- to display cards, we can use the Surface category of mui: we can use the components: CARD or PAPER, we use PAPER here;
2- About Layout, we can use the Layout category of mui: BOX and CONTAINER are the most basic layout component,we use Container here;
3- The CONTAINER centers your content horizontally. It's the most basic layout element.
4- One type of layout is the GRID component, we often use it;
5- as Components, they can get props like spacing, etc; WE CAN ALSO USE INLINE STYLE LIKE IN CSS with the props "sx";
6- the number of x-column that can be supported by Grid is 12 (xs={3} can give 4 cards on the same line)
5- We as well use a data display category of mui which is the compoenent TYPOGRAPHY  (to write text) 
6- we also installed mui-icons, to get access to the AccessTime icons;
7- we also use the input category of mui, to display rating (appear as stars), we use the RATING component of mui.
8- With the theme providers, we can customize our own styles;
9- we use the createTheme to customize our styles, then import the themeProvider from mui. Wrap the component we want to customize inside this themeProvider and pass the createTheme as a prop in.