import { useState } from "react";
import "./Country.css"

const Country = ({country}) => {
    const {name, flags, capital, region, area, population} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {

        // ay ! not cinho dile visited variable ar man ulta kore dibe

        setVisited(!visited)
    }
    return (
        <div className="country">
          <h3>{name.common}</h3> 
          <img src={flags.png} alt="" /> 
          <p>{capital}</p>
          <p>{region}</p>
          <p>{area}</p>
          <p>{population}</p>
          <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
          {visited ? "I have visited Country":"I want to visit"}
        </div>
    );
};

export default Country;


// {
//     "name": {
//         "common": "Nicaragua",
//         "official": "Republic of Nicaragua",
//         "nativeName": {
//             "spa": {
//                 "official": "República de Nicaragua",
//                 "common": "Nicaragua"
//             }
//         }
//     },
//     "tld": [
//         ".ni"
//     ],
//     "cca2": "NI",
//     "ccn3": "558",
//     "cca3": "NIC",
//     "cioc": "NCA",
//     "independent": true,
//     "status": "officially-assigned",
//     "unMember": true,
//     "currencies": {
//         "NIO": {
//             "name": "Nicaraguan córdoba",
//             "symbol": "C$"
//         }
//     },
//     "idd": {
//         "root": "+5",
//         "suffixes": [
//             "05"
//         ]
//     },
//     "capital": [
//         "Managua"
//     ],
//     "altSpellings": [
//         "NI",
//         "Republic of Nicaragua",
//         "República de Nicaragua"
//     ],
//     "region": "Americas",
//     "subregion": "Central America",
//     "languages": {
//         "spa": "Spanish"
//     },
//     "translations": {
//         "ara": {
//             "official": "جمهورية نيكاراغوا",
//             "common": "نيكاراغوا"
//         },
//         "bre": {
//             "official": "Republik Nicaragua",
//             "common": "Nicaragua"
//         },
//         "ces": {
//             "official": "Republika Nikaragua",
//             "common": "Nikaragua"
//         },
//         "cym": {
//             "official": "Republic of Nicaragua",
//             "common": "Nicaragua"
//         },
//         "deu": {
//             "official": "Republik Nicaragua",
//             "common": "Nicaragua"
//         },
//         "est": {
//             "official": "Nicaragua Vabariik",
//             "common": "Nicaragua"
//         },
//         "fin": {
//             "official": "Nicaraguan tasavalta",
//             "common": "Nicaragua"
//         },
//         "fra": {
//             "official": "République du Nicaragua",
//             "common": "Nicaragua"
//         },
//         "hrv": {
//             "official": "Republika Nikaragva",
//             "common": "Nikaragva"
//         },
//         "hun": {
//             "official": "Nicaraguai Köztársaság",
//             "common": "Nicaragua"
//         },
//         "ita": {
//             "official": "Repubblica del Nicaragua",
//             "common": "Nicaragua"
//         },
//         "jpn": {
//             "official": "ニカラグア共和国",
//             "common": "ニカラグア"
//         },
//         "kor": {
//             "official": "니카라과 공화국",
//             "common": "니카라과"
//         },
//         "nld": {
//             "official": "Republiek Nicaragua",
//             "common": "Nicaragua"
//         },
//         "per": {
//             "official": "جمهوری نیکاراگوئه",
//             "common": "نیکاراگوئه"
//         },
//         "pol": {
//             "official": "Republika Nikaragui",
//             "common": "Nikaragua"
//         },
//         "por": {
//             "official": "República da Nicarágua",
//             "common": "Nicarágua"
//         },
//         "rus": {
//             "official": "Республика Никарагуа",
//             "common": "Никарагуа"
//         },
//         "slk": {
//             "official": "Nikaragujská republika",
//             "common": "Nikaragua"
//         },
//         "spa": {
//             "official": "República de Nicaragua",
//             "common": "Nicaragua"
//         },
//         "srp": {
//             "official": "Република Никарагва",
//             "common": "Никарагва"
//         },
//         "swe": {
//             "official": "Republiken Nicaragua",
//             "common": "Nicaragua"
//         },
//         "tur": {
//             "official": "Nikaragua Cumhuriyeti",
//             "common": "Nikaragua"
//         },
//         "urd": {
//             "official": "جمہوریہ نکاراگوا",
//             "common": "نکاراگوا"
//         },
//         "zho": {
//             "official": "尼加拉瓜共和国",
//             "common": "尼加拉瓜"
//         }
//     },
//     "latlng": [
//         13,
//         -85
//     ],
//     "landlocked": false,
//     "borders": [
//         "CRI",
//         "HND"
//     ],
//     "area": 130373,
//     "demonyms": {
//         "eng": {
//             "f": "Nicaraguan",
//             "m": "Nicaraguan"
//         },
//         "fra": {
//             "f": "Nicaraguayenne",
//             "m": "Nicaraguayen"
//         }
//     },
//     "flag": "🇳🇮",
//     "maps": {
//         "googleMaps": "https://goo.gl/maps/P77LaEVkKJKXneRC6",
//         "openStreetMaps": "https://www.openstreetmap.org/relation/287666"
//     },
//     "population": 6624554,
//     "gini": {
//         "2014": 46.2
//     },
//     "fifa": "NCA",
//     "car": {
//         "signs": [
//             "NIC"
//         ],
//         "side": "right"
//     },
//     "timezones": [
//         "UTC-06:00"
//     ],
//     "continents": [
//         "North America"
//     ],
//     "flags": {
//         "png": "https://flagcdn.com/w320/ni.png",
//         "svg": "https://flagcdn.com/ni.svg",
//         "alt": "The flag of Nicaragua is composed of three equal horizontal bands of blue, white and blue, with the national coat of arms centered in the white band."
//     },
//     "coatOfArms": {
//         "png": "https://mainfacts.com/media/images/coats_of_arms/ni.png",
//         "svg": "https://mainfacts.com/media/images/coats_of_arms/ni.svg"
//     },
//     "startOfWeek": "monday",
//     "capitalInfo": {
//         "latlng": [
//             12.13,
//             -86.25
//         ]
//     },
//     "postalCode": {
//         "format": "###-###-#",
//         "regex": "^(\\d{7})$"
//     }
// }