// place files you want to import through the `$lib` alias in this folder.
export const spotConfig = {
    "#kunigiskes": {
        name: "Kunigiškės",
        coords: "55.961,21.067",
    },
    "#svencele": {
        name: "Svencelė",
        coords: "55.495,21.228",
    },
    "#plateliai": {
        name: "Plateliai",
        coords: "56.049,21.859",
    },
    "#sventoji": {
        name: "Šventoji",
        coords: "56.031,21.066",
    },
    "#smiltyne": {
        name: "Smiltynė",
        coords: "55.719,21.090",
    },
    "#pavilosta": {
        name: "Pavilosta",
        coords: "56.889,21.188",
    },    
}

export type Spot = keyof typeof spotConfig;

export const setForecast = async(maybeSpot:string) => {
    const days = await loadForecast(maybeSpot);
    forecast.set(days);
}

export const loadForecast = async (maybeSpot: string) => {
    if(!(maybeSpot in spotConfig)) {
        console.log("invalid spot", maybeSpot)
        return [] as Iterable<Day>;
    }
    const spot = maybeSpot as Spot;

    const coords = spotConfig[spot].coords;
    const res = await fetch(`https://www.yr.no/api/v0/locations/${coords}/forecast`);
    const json = await res.json();

    const days = new Map<number, Day>();
    
    json.shortIntervals.forEach((interval: any) => {
        const dt = new Date(interval.start);
        const day = days.get(dt.getDate())
        if (!day) {
            days.set(dt.getDate(), {
                dateStr: dt.toLocaleDateString("lt-LT", { weekday: "long", day: "numeric", month: "long" }),
                items: [intervalToLine(interval)]
            });
        }
        else {
            day.items.push(intervalToLine(interval));
        }
    });

    return days.values();
}

export type Day = {
    dateStr: string,
    items: Line[]
}

export type Line = ReturnType<typeof intervalToLine>;

const intervalToLine = (interval: any) => {
    const dt = new Date(interval.start);
    const time = dt.getHours().toString().padStart(2, "0") + ":00";
    const symbol = symbolCodes[interval.symbolCode.next1Hour as SymbolCode];

    return {
        time: time,
        temperature: interval.temperature.value,
        wind: interval.wind.speed,
        direction: interval.wind.direction,
        gusts: interval.wind.gust,
        symbolUrl: `https://www.yr.no/assets/images/weather-symbols/light-mode/default/svg/${symbol}.svg`,
        all: JSON.stringify(interval)
    }
}

type SymbolCode = keyof typeof symbolCodes;
const symbolCodes = {
    clearsky_day: "01d",
    clearsky_night: "01n",
    clearsky_polartwilight: "01m",
    fair_day: "02d",
    fair_night: "02n",
    fair_polartwilight: "02m",
    partlycloudy_day: "03d",
    partlycloudy_night: "03n",
    partlycloudy_polartwilight: "03m",
    cloudy: "04",
    rainshowers_day: "05d",
    rainshowers_night: "05n",
    rainshowers_polartwilight: "05m",
    rainshowersandthunder_day: "06d",
    rainshowersandthunder_night: "06n",
    rainshowersandthunder_polartwilight: "06m",
    sleetshowers_day: "07d",
    sleetshowers_night: "07n",
    sleetshowers_polartwilight: "07m",
    snowshowers_day: "08d",
    snowshowers_night: "08n",
    snowshowers_polartwilight: "08m",
    rain: "09",
    heavyrain: "10",
    heavyrainandthunder: "11",
    sleet: "12",
    snow: "13",
    snowandthunder: "14",
    fog: "15",
    sleetshowersandthunder_day: "20d",
    sleetshowersandthunder_night: "20n",
    sleetshowersandthunder_polartwilight: "20m",
    snowshowersandthunder_day: "21d",
    snowshowersandthunder_night: "21n",
    snowshowersandthunder_polartwilight: "21m",
    rainandthunder: "22",
    sleetandthunder: "23",
    lightrainshowersandthunder_day: "24d",
    lightrainshowersandthunder_night: "24n",
    lightrainshowersandthunder_polartwilight: "24m",
    heavyrainshowersandthunder_day: "25d",
    heavyrainshowersandthunder_night: "25n",
    heavyrainshowersandthunder_polartwilight: "25m",
    lightssleetshowersandthunder_day: "26d",
    lightssleetshowersandthunder_night: "26n",
    lightssleetshowersandthunder_polartwilight: "26m",
    heavysleetshowersandthunder_day: "27d",
    heavysleetshowersandthunder_night: "27n",
    heavysleetshowersandthunder_polartwilight: "27m",
    lightssnowshowersandthunder_day: "28d",
    lightssnowshowersandthunder_night: "28n",
    lightssnowshowersandthunder_polartwilight: "28m",
    heavysnowshowersandthunder_day: "29d",
    heavysnowshowersandthunder_night: "29n",
    heavysnowshowersandthunder_polartwilight: "29m",
    lightrainandthunder: "30",
    lightsleetandthunder: "31",
    heavysleetandthunder: "32",
    lightsnowandthunder: "33",
    heavysnowandthunder: "34",
    lightrainshowers_day: "40d",
    lightrainshowers_night: "40n",
    lightrainshowers_polartwilight: "40m",
    heavyrainshowers_day: "41d",
    heavyrainshowers_night: "41n",
    heavyrainshowers_polartwilight: "41m",
    lightsleetshowers_day: "42d",
    lightsleetshowers_night: "42n",
    lightsleetshowers_polartwilight: "42m",
    heavysleetshowers_day: "43d",
    heavysleetshowers_night: "43n",
    heavysleetshowers_polartwilight: "43m",
    lightsnowshowers_day: "44d",
    lightsnowshowers_night: "44n",
    lightsnowshowers_polartwilight: "44m",
    heavysnowshowers_day: "45d",
    heavysnowshowers_night: "45n",
    heavysnowshowers_polartwilight: "45m",
    lightrain: "46",
    lightsleet: "47",
    heavysleet: "48",
    lightsnow: "49",
    heavysnow: "50"
}