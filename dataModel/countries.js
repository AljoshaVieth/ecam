/*
	List of countries, with:
		- Conversion factor
		- Protein consumption
		- Bod per day (IPCC TABLE 6.4)
*/

var Countries={
"Algeria":      {  conv_kwh_co2:0.664209260,  prot_con:31.390,  bod_pday:37, },
"Angola":       {  conv_kwh_co2:0.037950113,  prot_con:15.695,  bod_pday:37, },
"Argentina":    {  conv_kwh_co2:0.391932833,  prot_con:34.310,  bod_pday:40, },
"Australia":    {  conv_kwh_co2:0.991757127,  prot_con:38.690,  bod_pday:60, },
"Austria":      {  conv_kwh_co2:0.176796609,  prot_con:39.055,  bod_pday:60, },
"Bangladesh":   {  conv_kwh_co2:0.637143230,  prot_con:17.885,  bod_pday:40, },
"Belgium":      {  conv_kwh_co2:0.224767376,  prot_con:35.405,  bod_pday:60, },
"Benin":        {  conv_kwh_co2:0.700678676,  prot_con:21.535,  bod_pday:37, },
"Bolivia (Plurinational State of)":      { conv_kwh_co2:0.534996875, prot_con:20.440, bod_pday:40, },
"Botswana":     {  conv_kwh_co2:1.825675055,  prot_con:23.360,  bod_pday:37, },
"Brazil":       {  conv_kwh_co2:0.092643638,  prot_con:30.660,  bod_pday:50, },
"Burkina Faso":                          { conv_kwh_co2:0.693000000, prot_con:29.200, bod_pday:37, },
"Cameroon":     {  conv_kwh_co2:0.216568535,  prot_con:21.170,  bod_pday:37, },
"Canada":       {  conv_kwh_co2:0.179763325,  prot_con:38.325,  bod_pday:60, },
"Chile":        {  conv_kwh_co2:0.408614261,  prot_con:32.120,  bod_pday:40, },
"China":        {  conv_kwh_co2:0.974624913,  prot_con:32.485,  bod_pday:40, },
"Colombia":     {  conv_kwh_co2:0.111425218,  prot_con:23.725,  bod_pday:40, },
"Congo":        {  conv_kwh_co2:0.120109978,  prot_con:19.345,  bod_pday:37, },
"Costa Rica":                            { conv_kwh_co2:0.063756361, prot_con:27.010, bod_pday:40, },
"Cuba":         {  conv_kwh_co2:0.938086187,  prot_con:29.200,  bod_pday:40, },
"Côte d'Ivoire":                         { conv_kwh_co2:0.501179338, prot_con:18.250, bod_pday:37, },
"Democratic People's Republic of Korea": { conv_kwh_co2:0.494658925, prot_con:21.170, bod_pday:40, },
"Denmark":      {  conv_kwh_co2:0.374745583,  prot_con:40.515,  bod_pday:62, },
"Dominican Republic":                    { conv_kwh_co2:0.641741728, prot_con:18.980, bod_pday:40, },
"Ecuador":      {  conv_kwh_co2:0.269613843,  prot_con:20.805,  bod_pday:40, },
"Egypt":        {  conv_kwh_co2:0.500886095,  prot_con:33.215,  bod_pday:34, },
"El Salvador":                           { conv_kwh_co2:0.256072792, prot_con:25.915, bod_pday:40, },
"Eritrea":      {  conv_kwh_co2:0.677991638,  prot_con:17.155,  bod_pday:37, },
"Ethiopia":     {  conv_kwh_co2:0.118948451,  prot_con:20.440,  bod_pday:37, },
"Finland":      {  conv_kwh_co2:0.225457295,  prot_con:39.055,  bod_pday:60, },
"France":       {  conv_kwh_co2:0.070927465,  prot_con:41.245,  bod_pday:60, },
"Gabon":        {  conv_kwh_co2:0.425188882,  prot_con:29.565,  bod_pday:37, },
"Germany":      {  conv_kwh_co2:0.672220452,  prot_con:36.135,  bod_pday:60, },
"Ghana":        {  conv_kwh_co2:0.214767509,  prot_con:21.535,  bod_pday:37, },
"Greece":       {  conv_kwh_co2:1.921092777,  prot_con:43.070,  bod_pday:57, },
"Guatemala":    {  conv_kwh_co2:0.341534936,  prot_con:20.805,  bod_pday:40, },
"Honduras":     {  conv_kwh_co2:0.415487352,  prot_con:24.455,  bod_pday:40, },
"India":        {  conv_kwh_co2:1.333174843,  prot_con:20.440,  bod_pday:34, },
"Indonesia":    {  conv_kwh_co2:0.684693977,  prot_con:20.440,  bod_pday:40, },
"Iran (Islamic Republic of)":            { conv_kwh_co2:0.631113877, prot_con:30.660, bod_pday:40, },
"Ireland":      {  conv_kwh_co2:0.521193132,  prot_con:40.150,  bod_pday:60, },
"Italy":        {  conv_kwh_co2:0.410898038,  prot_con:40.880,  bod_pday:60, },
"Japan":        {  conv_kwh_co2:0.443356848,  prot_con:33.580,  bod_pday:42, },
"Jordan":       {  conv_kwh_co2:0.643924449,  prot_con:27.740,  bod_pday:40, },
"Kenya":        {  conv_kwh_co2:0.332297783,  prot_con:21.170,  bod_pday:37, },
"Kuwait":       {  conv_kwh_co2:0.637316929,  prot_con:33.945,  bod_pday:40, },
"Lebanon":      {  conv_kwh_co2:0.694755686,  prot_con:30.660,  bod_pday:40, },
"Luxembourg":   {  conv_kwh_co2:0.276002537,  prot_con:44.895,  bod_pday:60, },
"Malaysia":     {  conv_kwh_co2:0.748842440,  prot_con:28.835,  bod_pday:40, },
"Mexico":       {  conv_kwh_co2:0.452483345,  prot_con:33.580,  bod_pday:40, },
"Mongolia":     {  conv_kwh_co2:2.310868705,  prot_con:26.280,  bod_pday:40, },
"Morocco":      {  conv_kwh_co2:0.731211458,  prot_con:32.485,  bod_pday:37, },
"Mozambique":   {  conv_kwh_co2:0.000445032,  prot_con:13.870,  bod_pday:37, },
"Namibia":      {  conv_kwh_co2:0.489803834,  prot_con:24.455,  bod_pday:37, },
"Nepal":        {  conv_kwh_co2:0.003041790,  prot_con:21.900,  bod_pday:40, },
"Netherlands":  {  conv_kwh_co2:0.413302564,  prot_con:38.325,  bod_pday:60, },
"New Zealand":                           { conv_kwh_co2:0.197695588, prot_con:34.310, bod_pday:60, },
"Nicaragua":    {  conv_kwh_co2:0.472119274,  prot_con:22.630,  bod_pday:40, },
"Nigeria":      {  conv_kwh_co2:0.439631360,  prot_con:22.630,  bod_pday:37, },
"Norway":       {  conv_kwh_co2:0.002240278,  prot_con:39.055,  bod_pday:60, },
"Pakistan":     {  conv_kwh_co2:0.473378547,  prot_con:20.805,  bod_pday:40, },
"Panama":       {  conv_kwh_co2:0.276797888,  prot_con:25.915,  bod_pday:40, },
"Peru":         {  conv_kwh_co2:0.237721212,  prot_con:24.455,  bod_pday:40, },
"Philippines":  {  conv_kwh_co2:0.526733850,  prot_con:21.535,  bod_pday:40, },
"Poland":       {  conv_kwh_co2:1.196125502,  prot_con:36.865,  bod_pday:60, },
"Portugal":     {  conv_kwh_co2:0.400151316,  prot_con:41.610,  bod_pday:60, },
"Republic of Korea":                     { conv_kwh_co2:0.504377662, prot_con:32.120, bod_pday:40, },
"Russian Federation":                    { conv_kwh_co2:0.513180381, prot_con:35.405, bod_pday:60, },
"Saudi Arabia":                          { conv_kwh_co2:0.795591395, prot_con:31.755, bod_pday:40, },
"Senegal":      {  conv_kwh_co2:0.598259400,  prot_con:21.535,  bod_pday:37, },
"South Africa":                          { conv_kwh_co2:1.069026617, prot_con:29.565, bod_pday:37, },
"Spain":        {  conv_kwh_co2:0.342875090,  prot_con:39.420,  bod_pday:60, },
"Sri Lanka":                             { conv_kwh_co2:0.417247633, prot_con:20.075, bod_pday:40, },
"Sudan":        {  conv_kwh_co2:0.614906086,  prot_con:26.645,  bod_pday:37, },
"Sweden":       {  conv_kwh_co2:0.023033883,  prot_con:39.055,  bod_pday:75, },
"Switzerland":  {  conv_kwh_co2:0.003177437,  prot_con:33.580,  bod_pday:60, },
"Syrian Arab Republic":                  { conv_kwh_co2:0.639109712, prot_con:29.200, bod_pday:40, },
"Thailand":     {  conv_kwh_co2:0.626742612,  prot_con:20.805,  bod_pday:40, },
"Togo":         {  conv_kwh_co2:0.207239024,  prot_con:17.885,  bod_pday:37, },
"Tunisia":      {  conv_kwh_co2:0.572169413,  prot_con:33.945,  bod_pday:37, },
"Turkey":       {  conv_kwh_co2:0.865664547,  prot_con:36.135,  bod_pday:38, },
"United Arab Emirates":                  { conv_kwh_co2:0.938297499, prot_con:37.960, bod_pday:40, },
"United Kingdom":                        { conv_kwh_co2:0.508501975, prot_con:37.960, bod_pday:60, },
"United Republic of Tanzania":           { conv_kwh_co2:0.266757050, prot_con:18.250, bod_pday:37, },
"United States of America":              { conv_kwh_co2:0.547096737, prot_con:41.610, bod_pday:85, },
"Uruguay":      {  conv_kwh_co2:0.303713979,  prot_con:29.200,  bod_pday:40, },
"Venezuela (Bolivarian Republic of)":    { conv_kwh_co2:0.208069719, prot_con:25.915, bod_pday:40, },
"Vietnam":      {  conv_kwh_co2:0.466848028,  prot_con:26.280,  bod_pday:40, },
"Yemen":        {  conv_kwh_co2:0.644106104,  prot_con:19.710,  bod_pday:40, },
"Zambia":       {  conv_kwh_co2:0.003197305,  prot_con:17.520,  bod_pday:37, },
"Zimbabwe":     {  conv_kwh_co2:0.600377947,  prot_con:20.075,  bod_pday:37, },

};

/*
1: BRANDER, M. SOOD A. WYLIE, C. HAUGHTON, A. LOVELL, J., 2011,Technical Paper Electricity-specific emission factors for grid electricity, Ecometrica,
2: FAO Statistics Division, 2010, Food Balance Sheets
3: IPCC, 2006, Guidelines for National Greenhouse Gas Inventories Volume 5 Waste
*/
