---
layout: component
category: components
industry: travel
title: Airports Services
icon: gear
vendor: codbex
author: nedelcho.delchev
repository: https://github.com/promart-io/vendorx-airports/tree/master/vendorx_airports
version: 1.0
license: https://www.eclipse.org/legal/epl-v10.html
tags:
- component
- travel
- services
- master
- library
brief: Contains the RESTful services and simple web based user interface about airports - name, codes, coordinates, etc. available at openflights.org
git: https://github.com/promart-io/vendorx-airports/tree/master/vendorx_airports.git
location: /components/2018/06/04/travel_vendorx_airports.html
---

{{ page.title }}
---

### Description

As of January 2012, the OpenFlights Airports Database contains 6977 airports spanning the globe, as shown in the map above. Each entry contains the following information:

	Airport ID			Unique OpenFlights identifier for this airport.
	Name				Name of airport. May or may not contain the City name.
	City				Main city served by airport. May be spelled differently from Name.
	Country				Country or territory where airport is located.
	IATA/FAA			3-letter FAA code, for airports located in Country "United States of America". 3-letter IATA code, for all other airports. Blank if not assigned.
	ICAO				4-letter ICAO code. Blank if not assigned.
	Latitude			Decimal degrees, usually to six significant digits. Negative is South, positive is North.
	Longitude			Decimal degrees, usually to six significant digits. Negative is West, positive is East.
	Altitude			In feet.
	Timezone			Hours offset from UTC. Fractional hours are expressed as decimals, eg. India is 5.5.
	DST				Daylight savings time. One of E (Europe), A (US/Canada), S (South America), O (Australia), Z (New Zealand), N (None) or U (Unknown). See also: Help: Time
	Tz 				Database time zone	Timezone in "tz" (Olson) format, eg. "America/Los_Angeles".

The data is ISO 8859-1 (Latin-1) encoded, with no special characters.
Note: Rules for daylight savings time change from year to year and from country to country. The current data is an approximation for 2009, built on a country level. Most airports in DST-less regions in countries that generally observe DST (eg. AL, HI in the USA, NT, QL in Australia, parts of Canada) are marked incorrectly.

Sample entries:

	507,"Heathrow","London","United Kingdom","LHR","EGLL",51.4775,-0.461389,83,0,"E","Europe/London"
	26,"Kugaaruk","Pelly Bay","Canada","YBB","CYBB",68.534444,-89.808056,56,-7,"A","America/Edmonton"
	3127,"Pokhara","Pokhara","Nepal","PKR","VNPK",28.200881,83.982056,2712,5.75,"N","Asia/Katmandu"


<div class="btn-toolbar pull-left">
	<a class="btn btn-info" href="http://openflights.org/data.html">OpenFlights</a>
</div>

<br><br>
