const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
var db
const url = "mongodb+srv://thisisanemailaddressbeepboop:kIDoMvB8BKctOtyB@cluster0.it9dctl.mongodb.net/?retryWrites=true&w=majority"
const dbName = "RPDR";

app.listen(9000), () => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if(error) {
            throw error;
        }
        db = client.db(dbName);
        console.log("Connected to `" + dbName + "`!");
    });
};
app.use(express.static('public'))

const queens = {
  
  // season 1,
      'bebe zahara benet': {
          'dragName': 'BeBe Zahara Benet',
          'seasons':[ 1 ],
          'age': 28,
          'outcomes':[ 'Winner' ]
      },
      'nina flowers': {
          'dragName': 'Nina Flowers',
          'seasons':[ 1 ],
          'age': 34,
          'outcomes':[ 'Runner-up' ]
      },
      'rebecca glasscock': {
          'dragName': 'Rebecca Glasscock',
          'seasons':[ 1 ],
          'age': 26,
          'outcomes':[ '3rd' ]
      },
      'shannel': {
          'dragName': 'Shannel',
          'seasons':[ 1 ],
          'age': 29,
          'outcomes':[ '4th' ]
      },
      'ongina': {
          'dragName': 'Ongina',
          'seasons':[ 1 ],
          'age': 26,
          'outcomes':[ '5th' ]
      },
      'jade sotomayor': {
          'dragName': 'Jade Sotomayor',
          'seasons':[ 1 ],
          'age': 25,
          'outcomes':[ '6th' ]
      },
      'akashia': {
          'dragName': 'Akashia',
          'seasons':[ 1 ],
          'age': 24,
          'outcomes':[ '7th' ]
      },
      'tammie brown': {
          'dragName': 'Tammie Brown',
          'seasons':[ 1 ],
          'age': 29,
          'outcomes':[ '8th' ]
      },
      'victoria "porkchop" parker': {
          'dragName': 'Victoria "Porkchop" Parker',
          'seasons':[ 1 ],
          'age': 39,
          'outcomes':[ '9th' ]
      },
  // seasons 2 
      'tyra sanchez': {
          'dragName': 'Tyra Sanchez',
          'seasons':[ 2 ],
          'age': 21,
          'outcomes':[ 'Winner' ]
      },
      'raven': {
          'dragName': 'Raven',
          'seasons':[ 2 ],
          'age': 30,
          'outcomes':[ 'Runner-up' ]
      },
      'jujubee': {
          'dragName': 'Jujubee',
          'seasons':[ 2 ],
          'age': 25,
          'outcomes':[ '3rd' ]
      },
      'tatianna': {
          'dragName': 'Tatianna',
          'seasons':[ 2 ],
          'age': 21,
          'outcomes':[ '4th' ]
      },
      'pandora boxx': {
          'dragName': 'Pandora Boxx',
          'seasons':[ 2 ],
          'age': 37,
          'outcomes':[ '5th (Miss Congeniality)' ]
      },
      'jessica wild': {
          'dragName': 'Jessica Wild',
          'seasons':[ 2 ],
          'age': 29,
          'outcomes':[ '6th' ]
      },
      'sahara davenport': {
          'dragName': 'Sahara Davenport',
          'seasons':[ 2 ],
          'age': 25,
          'outcomes':[ '7th' ]
      },
      'morgan mcmichaels': {
          'dragName': 'Morgan McMichaels',
          'seasons':[ 2 ],
          'age': 28,
          'outcomes':[ '8th' ]
      },
      'sonique': {
          'dragName': 'Sonique',
          'seasons':[ 2 ],
          'age': 26,
          'outcomes':[ '9th' ]
      },
      'mystique summers madison': {
          'dragName': 'Mystique Summers Madison',
          'seasons':[ 2 ],
          'age': 25,
          'outcomes':[ '10th' ]
      },
      'nicole paige brooks': {
          'dragName': 'Nicole Paige Brooks',
          'seasons':[ 2 ],
          'age': 36,
          'outcomes':[ '11th' ]
      },
      // 'shangela laquifa wadley': {
      //     'dragName': 'Mystique Summers Madison',
      //     'seasons':[ 2 ],
      //     'age': 28,
      //     'outcomes':[ '12th' ]
      // },
  // seasons 3
      'raja': {
          'dragName': 'Raja',
          'seasons':[ 3 ],
          'age': 36,
          'outcomes':[ 'Winner' ]
      },
      'manila luzon': {
          'dragName': 'Manila Luzon',
          'seasons':[ 3 ],
          'age': 28,
          'outcomes':[ 'Runner-up' ]
      },
      'alexis mateo': {
          'dragName': 'Alexis Mateo',
          'seasons':[ 3 ],
          'age': 30,
          'outcomes':[ '3rd' ]
      },
      'yara sofia': {
          'dragName': 'Yara Sofia',
          'seasons':[ 3 ],
          'age': 26,
          'outcomes':[ '4th (Miss Congeniality)' ]
      },
      'carmen carrera': {
          'dragName': 'Carmen Carrera',
          'seasons':[ 3 ],
          'age': 25,
          'outcomes':[ '5th' ]
      },
      // 'shangela': {
      //     'dragName': 'Shangela',
      //     'seasons':[ 3 ],
      //     'age': 29,
      //     'outcomes':[ '6th' ]
      // },
      'delta work': {
          'dragName': 'Delta Work',
          'seasons':[ 3 ],
          'age': 34,
          'outcomes':[ '7th' ]
      },
      'stacy layne matthews': {
          'dragName': 'Stacy Layne Matthews',
          'seasons':[ 3 ],
          'age': 25,
          'outcomes':[ '8th' ]
      },
      'mariah': {
          'dragName': 'Mariah',
          'seasons':[ 3 ],
          'age': 29,
          'outcomes':[ '9th' ]
      },
      'india ferrah': {
          'dragName': 'India Ferrah',
          'seasons':[ 3 ],
          'age': 23,
          'outcomes':[ '10th' ]
      },
      'mimi imfurst': {
          'dragName': 'Mimi Imfurst',
          'seasons':[ 3 ],
          'age': 27,
          'outcomes':[ '11th' ]
      },
      'phoenix': {
          'dragName': 'Phoenix',
          'seasons':[ 3 ],
          'age': 29,
          'outcomes':[ '12th' ]
      },
      'venus d-lite': {
          'dragName': 'Venus D-Lite',
          'seasons':[ 3 ],
          'age': 26,
          'outcomes':[ '13th' ]
      },
  // seasons 4 ],
      'sharon needles': {
        'dragName': 'Sharon Needles',
        'seasons':[ 4 ],
        'age': 29,
        'outcomes':[ 'Winner' ]
      },
      'chad michaels': {
        'dragName': 'Chad Michaels',
        'seasons':[ 4 ],
        'age': 40,
        'outcomes':[ 'Runner-up' ]
      },
      'phi phi o’hara': {
          'dragName': 'Phi Phi O’Hara',
          'seasons':[ 4 ],
          'age': 25,
          'outcomes':[ 'Runner-up' ]
        },
      'latrice royale': {
        'dragName': 'Latrice Royale',
        'seasons':[ 4 ],
        'age': 39,
        'outcomes':[ '4th (Miss Congeniality)' ]
      },
      'kenya michaels': {
          'dragName': 'Kenya Michaels',
          'seasons':[ 4 ],
          'age': 21,
          'outcomes':[ '5th' ]
        },
      'dida ritz': {
        'dragName': 'Dida Ritz',
        'seasons':[ 4 ],
        'age': 25,
        'outcomes':[ '6th' ]
      },
      'willam': {
          'dragName': 'Willam',
          'seasons':[ 4 ],
          'age': 29,
          'outcomes':[ '7th (Disqualified [Conjugal Visits])' ]
        },
      'milan': {
        'dragName': 'Milan',
        'seasons':[ 4 ],
        'age': 36,
        'outcomes':[ '9th' ]
      },
      'madame laqueer': {
        'dragName': 'Madame LaQueer',
        'seasons':[ 4 ],
        'age': 29,
        'outcomes':[ '10th' ]
      },
      'the princess': {
        'dragName': 'The Princess',
        'seasons':[ 4 ],
        'age': 31,
        'outcomes':[ '11th' ]
      },
      'lashauwn beyond': {
        'dragName': 'Lashauwn Beyond',
        'seasons':[ 4 ],
        'age': 21,
        'outcomes':[ '12th' ]
      },
      'alisa summers': {
        'dragName': 'Alisa Summers',
        'seasons':[ 4 ],
        'age': 23,
        'outcomes':[ '13th' ]
      },
  // seasons 5 ],
      'jinkx monsoon': {
          'dragName': 'Jinkx Monsoon',
          'seasons':[ 5 ],
          'age': 25,
          'outcomes':[ 'Winner' ]
        },
        'alaska thunderfuck': {
          'dragName': 'Alaska Thunderfuck',
          'seasons':[ 5 ],
          'age': 27,
          'outcomes':[ 'Runner-up' ]
        },
        'roxxxy andrews': {
          'dragName': 'Roxxxy Andrews',
          'seasons':[ 5 ],
          'age': 28,
          'outcomes':[ 'Runner-Up' ]
        },
        'detox': {
          'dragName': 'Detox',
          'seasons':[ 5 ],
          'age': 27,
          'outcomes':[ '4th' ]
        },
        'coco montrese': {
          'dragName': 'Coco Montrese',
          'seasons':[ 5 ],
          'age': 37,
          'outcomes':[ '5th' ]
        },
        'alyssa edwards': {
          'dragName': 'Alyssa Edwards',
          'seasons':[ 5 ],
          'age': 32,
          'outcomes':[ '6th' ]
        },
        'ivy winters': {
          'dragName': 'Ivy Winters',
          'seasons':[ 5 ],
          'age': 26,
          'outcomes':[ '7th (Miss Congeniality)'  ]
        },
        'jade jolie': {
          'dragName': 'Jade Jolie',
          'seasons':[ 5 ],
          'age': 25,
          'outcomes':[ '8th' ]
        },
        'lineysha sparx': {
          'dragName': 'Lineysha Sparx',
          'seasons':[ 5 ],
          'age': 24,
          'outcomes':[ '9th' ]
        },
        'honey mahogany': {
          'dragName': 'Honey Mahogany',
          'seasons':[ 5 ],
          'age': 29,
          'outcomes':[ '10th/11th (Double Elimination)' ]
        },
        'vivienne pinay': {
          'dragName': 'Vivienne Pinay',
          'seasons':[ 5 ],
          'age': 26,
          'outcomes':[ '10th/11th (Double Elimination)' ]
        },
        'monica beverly hillz': {
          'dragName': 'Monica Beverly Hillz',
          'seasons':[ 5 ],
          'age': 27,
          'outcomes':[ '12th' ]
        },
        'serena chacha': {
          'dragName': 'Serena ChaCha',
          'seasons':[ 5 ],
          'age': 21,
          'outcomes':[ '13th' ]
        },
        'penny tration': {
          'dragName': 'Penny Tration',
          'seasons':[ 5 ],
          'age': 39,
          'outcomes':[ '14th' ]
        },
  // seasons 6
      'bianca del rio': {
        'dragName': 'Bianca Del Rio',
        'seasons':[ 6 ],
        'age': 38,
        'outcomes':[ 'Winner' ]
      },
      'adore delano': {
        'dragName': 'Adore Delano',
        'seasons':[ 6 ],
        'age': 23,
        'outcomes':[ 'Runner-up' ]
      },
      'courtney act': {
        'dragName': 'Courtney Act',
        'seasons':[ 6 ],
        'age': 33,
        'outcomes':[ 'Runner-up' ]
      },
      'darienne lake': {
        'dragName': 'Darienne Lake',
        'seasons':[ 6 ],
        'age': 41,
        'outcomes':[ '4th' ]
      },
      'ben dela creme': {
        'dragName': 'BenDeLaCreme',
        'seasons':[ 6 ],
        'age': 31,
        'outcomes':[ '5th (Miss Congeniality)' ]
      },
      'joslyn fox': {
        'dragName': 'Joslyn Fox',
        'seasons':[ 6 ],
        'age': 26,
        'outcomes':[ '6th' ]
      },
      'trinity k. bonet': {
        'dragName': 'Trinity K. Bonet',
        'seasons':[ 6 ],
        'age': 22,
        'outcomes':[ '7th' ]
      },
      'laganja estranja': {
          'dragName': 'Laganja Estranja',
          'seasons':[ 6 ],
          'age': 24,
          'outcomes':[ '8th' ]
      },
      'milk': {
        'dragName': 'Milk',
        'seasons':[ 6 ],
        'age': 25,
        'outcomes':[ '9th' ]
      },
      'gia gunn': {
        'dragName': 'Gia Gunn',
        'seasons':[ 6 ],
        'age': 22,
        'outcomes':[ '10th' ]
      },
      'april carrion': {
        'dragName': 'April Carrión',
        'seasons':[ 6 ],
        'age': 23,
        'outcomes':[ '11th' ]
      },
      'vivacious': {
        'dragName': 'Vivacious',
        'seasons':[ 6 ],
        'age': 40,
        'outcomes':[ '12th' ]
      },
      'magnolia crawford': {
        'dragName': 'Magnolia Crawford',
        'seasons':[ 6 ],
        'age': 28,
        'outcomes':[ '13th' ]
      },
      'kelly mantle': {
          'dragName': 'Kelly Mantle',
          'seasons':[ 6 ],
          'age': 37,
          'outcomes':[ '14th' ]
      },
  // seasons 7 ],
    'violet chachki': {
      'dragName': 'Violet Chachki',
      'seasons': [ 7 ],
      'realName': 'Jason Dardo',
      'age': 22,
      'hometown': 'Atlanta, Georgia',
      'outcomes': [ 'Winner' ],
    },
    'ginger minj': {
      'dragName': 'Ginger Minj',
      'seasons': [ 7 ],
      'realName': 'Joshua Eads-Brown',
      'age': 29,
      'hometown': 'Orlando, Florida',
      'outcomes': [ 'Runner-up' ],
    },
    'pearl': {
      'dragName': 'Pearl',
      'seasons': [ 7 ],
      'realName': 'Matthew Lent',
      'age': 23,
      'hometown': 'Brooklyn, New York',
      'outcomes': [ 'Runner-up' ],
    },
    'kennedy davenport': {
      'dragName': 'Kennedy Davenport',
      'seasons': [ 7 ],
      'realName': 'Reuben Asberry Jr.',
      'age': 33,
      'hometown': 'Dallas, Texas',
      'outcomes': [ '4th' ],
    },
    'katya': {
      'dragName': 'Katya',
      'seasons': [ 7 ],
      'realName': 'Brian McCook',
      'age': 32,
      'hometown': 'Boston, Massachusetts',
      'outcomes': [ '5th (Miss Congeniality)' ],
    },
    'trixie mattel': {
      'dragName': 'Trixie Mattel',
      'seasons': [ 7 ],
      'realName': 'Brian Firkus',
      'age': 24,
      'hometown': 'Milwaukee, Wisconsin',
      'outcomes': [ '6th (Originally 11th but returned Episode 8)' ],
    },
    'miss fame': {
      'dragName': 'Miss Fame',
      'seasons': [ 7 ],
      'realName': 'Kurtis Dam-Mikkelsen',
      'age': 29,
      'hometown': 'New York City, New York',
      'outcomes': [ '7th' ],
    },
    'jaidynn diore fierce': {
      'dragName': 'Jaidynn Diore Fierce',
      'seasons': [ 7 ],
      'realName': 'Christopher Caldwell',
      'age': 25,
      'hometown': 'Nashville, Tennessee',
      'outcomes': [ '8th' ],
    },
    'max': {
      'dragName': 'Max',
      'seasons': [ 7 ],
      'realName': 'Maxwell Heller',
      'age': 22,
      'hometown': 'Hudson, Wisconsin',
      'outcomes': [ '9th' ],
    },
    'kandy ho': {
      'dragName': 'Kandy Ho',
      'seasons': [ 7 ],
      'realName': 'Franklin Arbot',
      'age': 28,
      'hometown': 'Cayey, Puerto Rico',
      'outcomes': [ '10th' ],
    },
    'mrs. kasha davis': {
      'dragName': 'Mrs. Kasha Davis',
      'seasons': [ 7 ],
      'age': 43,
      'hometown': 'Rochester, New York',
      'outcomes': [ '11th' ],
    },
    'jasmine masters': {
      'dragName': 'Jasmine Masters',
      'seasons': [ 7 ],
      'age': 37,
      'hometown': 'Los Angeles, California',
      'outcomes': [ '12th' ],
    },
    'sasha belle': {
      'dragName': 'Sasha Belle',
      'seasons': [ 7 ],
      'realName': 'Jared Breakenridge',
      'age': 28,
      'hometown': 'Iowa City, IA',
      'outcomes': [ '13th' ],
    },
    'tempest dujour': {
      'dragName': 'Tempest DuJour',
      'seasons': [ 7 ],
      'realName': 'Patrick Holt',
      'age': 47,
      'hometown': 'Tucson, Arizona',
      'outcomes': [ '14th' ],
    },
  // season 8
    'bob the drag queen': {
      'dragName': 'Bob The Drag Queen',
      'seasons':[ 8, ],
      'age': 29,
      'outcomes': [ 'Winner' ]
    },
    'kim chi': {
      'dragName': 'Kim Chi',
      'seasons':[ 8, ],
      'age': 27,
      'outcomes': [ 'Runner-up' ]
    },
    'naomi smalls': {
      'dragName': 'Naomi Smalls',
      'seasons':[ 8, ],
      'age': 21,
      'outcomes': [ 'Runner-up' ]
    },
    'chi chi devayne': {
      'dragName': 'Chi Chi DeVayne',
      'seasons':[ 8, ],
      'age': 29,
      'outcomes': [ '4th' ]
    },
    'derrick barry': {
      'dragName': 'Derrick Barry',
      'seasons':[ 8, ],
      'age': 32,
      'outcomes': [ '5th' ]
    },
    'thorgy thor': {
      'dragName': 'Thorgy Thor',
      'seasons':[ 8, ],
      'age': 31,
      'outcomes': [ '6th' ]
    },
    'robbie turner': {
      'dragName': 'Robbie Turner',
      'seasons':[ 8, ],
      'age': 33,
      'outcomes': [ '7th' ]
    },
    'acid betty': {
      'dragName': 'Acid Betty',
      'seasons':[ 8, ],
      'age': 38,
      'outcomes': [ '8th' ]
    },
    'naysha lopez': {
      'dragName': 'Naysha Lopez',
      'seasons':[ 8, ],
      'age': 31,
      'outcomes': [ '9th (Originally 12th but returned Episode 3)' ]
    },
    // 'cynthia lee fontaine': {
    //   'dragName': 'Cynthia Lee Fontaine',
    //   'seasons':[ 8, ],
    //   'age': 34,
    //   'outcomes': [ '10th (Miss Congeniality)' ]
    // },
    'laila mcqueen': {
      'dragName': 'Laila McQueen',
      'seasons':[ 8, ],
      'age': 22,
      'outcomes': [ '11th/12th (Double Elimination)' ]
    },
    'dax exclamationpoint': {
      'dragName': 'Dax ExclamationPoint',
      'seasons':[ 8, ],
      'age': 31,
      'outcomes': [ '11th/12th (Double Elimination)' ]
    },
  // seasons 9[  ],
    'sasha velour': {
      'dragName': 'Sasha Velour',
      'seasons':[ 9, ],
      'age': 29,
      'outcomes': ['Winner']
    },
    'peppermint': {
      'dragName': 'Peppermint',
      'seasons':[ 9, ],
      'age': 37,
      'outcomes': ['Runner-up']
    },
    'shea coulee': {
      'dragName': 'Shea Coulee',
      'seasons':[ 9, ],
      'age': 27,
      'outcomes': ['3rd']
    },
    'trinity taylor': {
      'dragName': 'Trinity Taylor',
      'seasons':[ 9, ],
      'age': 31,
      'outcomes': ['4th']
    },
    'alexis michelle': {
      'dragName': 'Alexis Michelle',
      'seasons':[ 9, ],
      'age': 33,
      'outcomes': [ '5th' ]
    },
    'nina bo’nina brown': {
      'dragName': 'Nina Bo’nina Brown',
      'seasons':[ 9, ],
      'age': 34,
      'outcomes': ['6th']
    },
    'valentina': {
      'dragName': 'Valentina',
      'seasons':[ 9, ],
      'age': 25,
      'outcomes': ['7th (Miss Congeniality)']
    },
    'farrah moan': {
      'dragName': 'Farrah Moan',
      'seasons':[ 9, ],
      'age': 23,
      'outcomes': ['8th']
    },
    'aja': {
      'dragName': 'Aja',
      'seasons':[ 9, ],
      'age': 22,
      'outcomes': ['9th']
    },
    // 'cynthia lee fontaine': {
    //   'dragName': 'Cynthia Lee Fontaine',
    //   'seasons':[ 9, ],
    //   'age': 35,
    //   'outcomes': ['10th']
    // },
    //   'eureka o’hara': {
    //   'dragName': 'Eureka O’Hara',
    //   'seasons':[ 9, ],
    //   'age': 26,
    //   'outcomes': ['11th (Departed Due to Injury)']
    // },
    'charlie hides': {
      'dragName': 'Charlie Hides',
      'seasons':[ 9, ],
      'age': 52,
      'outcomes': ['12th']
    },
    'kimora blac': {
      'dragName': 'Kimora Blac',
      'seasons':[ 9, ],
      'age': 28,
      'outcomes': ['13th']
    },
    'jaymes mansfield': {
      'dragName': 'Jaymes Mansfield',
      'seasons':[ 9, ],
      'age': 26,
      'outcomes': ['14th']
    },
  // season 10
    'aquaria': {
      'dragName': 'Aquaria',
      'seasons':[ 10, ],
      'age': 21,
      'outcomes': ['Winner']
    },
    // 'eureka o’hara': {
    //   'dragName': 'Eureka O’Hara',
    //   'seasons':[ 10, ],
    //   'age': 27,
    //   'outcomes': ['Runner-up']
    // },
    'kameron michaels': {
      'dragName': 'Kameron Michaels',
      'seasons':[ 10, ],
      'age': 31,
      'outcomes': ['Runner-up']
    },
    'asia o’hara': {
      'dragName': 'Asia O’Hara',
      'seasons':[ 10, ],
      'age': 35,
      'outcomes': ['4th']
    },
    'miz cracker': {
      'dragName': 'Miz Cracker',
      'seasons':[ 10, ],
      'age': 33,
      'outcomes': ['5th']
    },
    'monet x change': {
      'dragName': 'Monét X Change',
      'seasons':[ 10, ],
      'age': 27,
      'outcomes': ['6th (Miss Congeniality)']
    },
    'the vixen': {
      'dragName': 'The Vixen',
      'seasons':[ 10, ],
      'age': 26,
      'outcomes': ['7th']
    },
    'mo heart': {
      'dragName': 'Mo Heart',
      'seasons':[ 10, ],
      'age': 31,
      'outcomes': ['8th']
    },
    'blair st. clair': {
      'dragName': 'Blair St. Clair',
      'seasons':[ 10, ],
      'age': 22,
      'outcomes': ['9th']
    },
    'mayhem miller': {
      'dragName': 'Mayhem Miller',
      'seasons':[ 10, ],
      'age': 35,
      'outcomes': ['10th']
    },
    'dusty ray bottoms': {
      'dragName': 'Dusty Ray Bottoms',
      'seasons':[ 10, ],
      'age': 29,
      'outcomes': ['11th']
    },
    'yuhua hamasaki': {
      'dragName': 'Yuhua Hamasaki',
      'seasons':[ 10, ],
      'age': 27,
      'outcomes': ['12th']
    },
    'kalorie karbdashian-williams': {
      'dragName': 'Kalorie Karbdashian-Williams',
      'seasons':[ 10, ],
      'age': 27,
      'outcomes': ['13th']
    },
  //   'vanessa vanjie mateo': {
  //     'dragName': 'Vanessa Vanjie Mateo',
  //     'seasons':[ 10, ],
  //     'age': 26,
  //     'outcomes': ['14th']
  // },
  // seasons 1[1 ],
    'yvie oddly': {
      'dragName': 'Yvie Oddly',
      'seasons':[ 11, ],
      'age': 24,
      'hometown': 'Denver, Colorado',
      'outcomes': ['Winner']
    },
    'brooke lynn hytes': {
      'dragName': 'Brooke Lynn Hytes',
      'seasons':[ 11, ],
      'age': 32,
      'hometown': 'Nashville, TN',
      'outcomes': ['Runner-up']
    },
    'a’keria davenport': {
      'dragName': 'A’keria Chanel Davenport',
      'seasons':[ 11, ],
      'age': 30,
      'hometown': 'Dallas, Texas',
      'outcomes': ['3rd']
    },
    'silky nutmeg ganache': {
      'dragName': 'Silky Nutmeg Ganache',
      'seasons':[ 11, ],
      'age': 28,
      'hometown': 'Chicago, Illinois',
      'outcomes': ['4th'],
    },
    // 'vanessa vanjie mateo': {
    //   'dragName': 'Vanessa Vanjie Mateo',
    //   'seasons':[ 11, ],
    //   'age': 26,
    //   'hometown': 'Tampa, Flordia',
    //   'outcomes': ['5th']
    // },
    'nina west': {
      'dragName': 'Nina West',
      'seasons':[ 11, ],
      'age': 39,
      'hometown': 'Columbus, Ohio',
      'outcomes': ['6th (Miss Congeniality)']
    },
    'shuga cain': {
      'dragName': 'Shuga Cain',
      'seasons':[ 11, ],
      'age': 40,
      'hometown': 'New York City, New York',
      'outcomes': ['7th']
    },
    'plastique tiara': {
      'dragName': 'Plastique Tiara',
      'seasons':[ 11, ],
      'age': 21,
      'hometown': 'Dallas, Texas',
      'outcomes': ['8th']
    },
    'ra’jah o’hara': {
      'dragName': 'Ra’Jah O’Hara',
      'seasons':[ 11, ],
      'age': 33,
      'hometown': 'Dallas, Texas',
      'outcomes': ['9th']
    },
    'scarlet envy': {
      'dragName': 'Scarlet Envy',
      'seasons':[ 11, ],
      'age': 26,
      'hometown': 'Brooklyn, New York',
      'outcomes': ['10th']
    },
    'ariel versace': {
      'dragName': 'Ariel Versace',
      'seasons':[ 11, ],
      'age': 26,
      'hometown': 'Cherry Hill, New Jersey',
      'outcomes': ['11th']
    },
    'mercedes iman diamond': {
      'dragName': 'Mercedes Iman Diamond',
      'seasons':[ 11, ],
      'age': 31,
      'hometown': 'Minneapolis, MN',
      'outcomes': ['12th']
    },
    'honey davenport': {
      'dragName': 'Honey Davenport',
      'seasons':[ 11, ],
      'age': 32,
      'hometown': 'New York City, NY',
      'outcomes': ['13th']
    },
    'kahanna montrese': {
      'dragName': 'Kahanna Montrese',
      'seasons':[ 11, ],
      'age': 25,
      'hometown': 'Las Vegas, Nevada',
      'outcomes': ['14th']
    },
    'soju': {
      'dragName': 'Soju',
      'seasons':[ 11, ],
      'age': 27,
      'hometown': 'Chicago, Illinois',
      'outcomes': ['15th']
    },
  //seasons 1[2 ],
    'jaida essence hall': {
      'dragName': 'Jaida Essence Hall',
      'seasons':[ 12, ],
      'age': 32,
      'hometown': 'Milwaukee, WI',
      'outcomes': ['Winner']
    },
    'crystal methyd': {
      'dragName': 'Crystal Methyd',
      'seasons':[ 12, ],
      'age': 28,
      'hometown': 'Springfield, MO',
      'outcomes': ['Runner-up']
    },
    'gigi goode': {
      'dragName': 'Gigi Goode',
      'seasons':[ 12, ],
      'age': 21,
      'hometown': 'Los Angeles, California',
      'outcomes': ['Runner-up']
    },
    'sherry pie': {
      'dragName': 'Sherry Pie',
      'seasons':[ 12, ],
      'age': 27,
      'hometown': 'New York City, New York',
      'outcomes': ['Disqualified [Sexual Misconduct] ']
    },
    'jackie cox': {
      'dragName': 'Jackie Cox',
      'seasons':[ 12, ],
      'age': 34,
      'hometown': 'New York City, New York',
      'outcomes': ['5th']
    },
    'heidi n closet': {
      'dragName': 'Heidi N Closet',
      'seasons':[ 12, ],
      'age': 24,
      'hometown': 'Ramseur, North Carlina',
      'outcomes': ['6th (Miss Congeniality)']
    },
    'widow von’du': {
      'dragName': 'Widow Von’Du',
      'seasons':[ 12, ],
      'age': 30,
      'hometown': 'Kansas City, MO',
      'outcomes': ['7th']
    },
    'jan': {
      'dragName': 'Jan',
      'seasons':[ 12, ],
      'age': 26,
      'hometown': 'New York City, New York',
      'outcomes': ['8th']
    },
    'brita': {
      'dragName': 'Brita',
      'seasons':[ 12, ],
      'age': 34,
      'hometown': 'New York City, New York',
      'outcomes': ['9th']
    },
    'aiden zhane': {
      'dragName': 'Aiden Zhane',
      'seasons':[ 12, ],
      'age': 29,
      'hometown': 'Acworth, Georgia',
      'outcomes': ['10th']
    },
    'nicky doll': {
      'dragName': 'Nicky Doll',
      'seasons':[ 12, ],
      'age': 28,
      'hometown': 'New York City, New York',
      'outcomes': ['11th']
    },
    'rock m. sakura': {
      'dragName': 'Rock M. Sakura',
      'seasons':[ 12, ],
      'age': 28,
      'hometown': 'San Francisco, California',
      'outcomes': ['12th']
    },
    'dahlia sin': {
      'dragName': 'Dahlia Sin',
      'seasons':[ 12, ],
      'age': 28,
      'hometown': 'Los Angeles, California',
      'outcomes': ['13th']
    },
  // seasons 1[3 ],
    'symone': {
      'dragName': 'Symone',
      'seasons':[ 13, ],
      'age': 25,
      'hometown': 'Los Angeles, California',
      'outcomes': ['Winner']
    },
    'kandy muse': {
      'dragName': 'Kandy Muse',
      'seasons':[ 13, ],
      'age': 25,
      'hometown': 'New York City, New York',
      'outcomes': ['Runner-Up']
    },
    'gottmik': {
      'dragName': 'Gottmik',
      'seasons':[ 13, ],
      'age': 23,
      'hometown': 'Los Angeles, California',
      'outcomes': ['3th']
    },
    'rose': {
      'dragName': 'Rosé',
      'seasons':[ 13, ],
      'age': 34,
      'hometown': 'New York City, New York',
      'outcomes': ['4th']
    },
    'olivia lux': {
      'dragName': 'Olivia Lux',
      'seasons':[ 13, ],
      'age': 26,
      'hometown': 'New York City, New York',
      'outcomes': ['5th']
    },
    'utica queen': {
      'dragName': 'Utica Queen',
      'seasons':[ 13, ],
      'age': 25,
      'hometown': 'Minneapolis, MN',
      'outcomes': ['6th']
    },
      'tina burner': {
      'dragName': 'Tina Burner',
      'seasons':[ 13, ],
      'age': 40,
      'hometown': 'New York City, New York',
      'outcomes': ['7th']
      },
    'denali': {
      'dragName': 'Denali',
      'seasons':[ 13, ],
      'age': 28,
      'hometown': 'Chicago, Illinois',
      'outcomes': ['8th']
    },
    'elliott with 2 ts': {
      'dragName': 'Elliott with 2 Ts',
      'seasons':[ 13, ],
      'age': 26,
      'hometown': 'Las Vegas, Nevada',
      'outcomes': ['7th']
    },
    'lala ri': {
      'dragName': 'Lala Ri',
      'seasons':[ 13, ],
      'age': 30,
      'hometown': 'Atlanta, Georgia',
      'outcomes': ['10th (Miss Congeniality & Golden Boot)']
    },
    'tamisha iman': {
      'dragName': 'Tamisha Iman',
      'seasons':[ 13, ],
      'age': 49,
      'hometown': 'Atlanta, Georgia',
      'outcomes': ['11th']
    },
    'joey jay': {
      'dragName': 'Joey Jay',
      'seasons':[ 13, ],
      'age': 30,
      'hometown': 'Phoenix, Arizona',
      'outcomes': ['12th']
    },
    'kahmora hall': {
      'dragName': 'Kahmora Hall',
      'seasons':[ 13, ],
      'age': 28,
      'hometown': 'Chicago, Illinois',
      'outcomes': ['13th']
    },
  // seasons 1[4 ],
    'willow pill': {
      'dragName': 'Willow Pill',
      'seasons':[ 14, ],
      'age': 26,
      'hometown': 'Denver, CO',
      'outcomes': ['Winner']
      },
      'lady camden': {
      'dragName': 'Lady Camden',
      'seasons':[ 14, ],
      'age': 31,
      'hometown': 'Sacramento, California',
      'outcomes': ['Runner-Up']
      },
      'angeria paris vanmicheals': {
      'dragName': 'Angeria Paris VanMichaels',
      'seasons':[ 14, ],
      'age': 27,
      'hometown': 'Atlanta, Georgia',
      'outcomes': ['Top 5']
      },
      'bosco': {
      'dragName': 'Bosco',
      'seasons':[ 14, ],
      'age': 28,
      'hometown': 'Seattle, Washington',
      'outcomes': ['Top 5']
      },
      'daya betty': {
      'dragName': 'Daya Betty',
      'seasons':[ 14, ],
      'age': 27,
      'hometown': 'Seattle, WA',
      'outcomes': ['Top 5 (Originally 13th but returned Episode 3)']
      },
      'deja skye': {
      'dragName': 'DeJa Skye',
      'seasons':[ 14, ],
      'age': 31,
      'hometown': 'Fesno, California',
      'outcomes': ['6th/7th (Double Elimination)']
      },
      'jorgeous': {
      'dragName': 'Jorgeous',
      'seasons':[ 14, ],
      'age': 21,
      'hometown': 'Nashville, TN',
      'outcomes': ['6th/7th (Double Elimination)']
      },
      'jasmine kennedie': {
      'dragName': 'Jasmine Kennedie',
      'seasons':[ 14, ],
      'age': 22,
      'hometown': 'New York City, New York',
      'outcomes': ['8th']
      },
      'kerri colby': {
      'dragName': 'Kerri Colby',
      'seasons':[ 14, ],
      'age': 24,
      'hometown': 'Los Angeles, California',
      'outcomes': ['9th']
      },
      'maddy morphosis': {
      'dragName': 'Maddy Morphosis',
      'seasons':[ 14, ],
      'age': 26,
      'hometown': 'Fayetteville, AR',
      'outcomes': ['10th (Golden Boot)']
      },
      'orion story': {
      'dragName': 'Orion Story',
      'seasons':[ 14, ],
      'age': 30,
      'hometown': 'Dallas, TX',
      'outcomes': ['11th (Originally 14th but returned Episode 3)']
      },
      'kornbread "the snack" jete': {
      'dragName': 'Kornbread "The Snack" Jete',
      'seasons':[ 14, ],
      'age': 28,
      'hometown': 'Birmingham, AL',
      'outcomes': ['12th (Miss Congeniality, Departed Due to Injury)']
      },
      'alyssa hunter': {
      'dragName': 'Alyssa Hunter',
      'seasons':[ 14, ],
      'age': 26,
      'hometown': 'Cataño, Puerto Rico',
      'outcomes': ['13th']
      },
      'june jambalaya': {
      'dragName': 'June Jambalaya',
      'seasons':[ 14, ],
      'age': 29,
      'hometown': 'Los Angeles, California',
      'outcomes': ['14th']
      },
  // seasons 1[5 ],
      'sasha colby': {
      'dragName': 'Sasha Colby',
      'seasons':[ 15, ],
      'age': 37,
      'hometown': 'Los Angeles, CA',
      'outcomes': ['Winner']
      },
      'anetra': {
      'dragName': 'Anetra',
      'seasons':[ 15, ],
      'age': 24,
      'hometown': 'Las Vegas, Nevada',
      'outcomes': ['Runner-Up']
      },
      'luxx noir london': {
      'dragName': 'Luxx Noir London',
      'seasons':[ 15, ],
      'age': 22,
      'hometown': 'East Orange, New Jersey',
      'outcomes': ['Top 4']
      },
      'mistress isabelle brooks': {
      'dragName': 'Mistress Isabelle Brooks',
      'seasons':[ 15, ],
      'age': 24,
      'hometown': 'Houston, Texas',
      'outcomes': ['Top 4']
      },
      'loosey laduca': {
      'dragName': 'Loosey LaDuca',
      'seasons':[ 15, ],
      'age': 32,
      'hometown': 'Ansonia, CT',
      'outcomes': ['5th']
      },
      'salina estitties': {
      'dragName': 'Salina Estitties',
      'seasons':[ 15, ],
      'age': 31,
      'hometown': 'Albuquerque, NM',
      'outcomes': ['6th (Golden Boot)']
      },
      'marcia marcia marcia': {
      'dragName': 'Marcia Marcia Marcia',
      'seasons':[ 15, ],
      'age': 25,
      'hometown': 'New York City, New York',
      'outcomes': ['7th']
      },
      'malaysia babydoll foxx': {
      'dragName': 'Malaysia Babydoll Foxx',
      'seasons':[ 15, ],
      'age': 32,
      'hometown': 'Miami, Florida',
      'outcomes': ['8th (Miss Congeniality)']
      },
      'spice': {
      'dragName': 'Spice',
      'seasons':[ 15, ],
      'age': 23,
      'hometown': 'Los Angeles, California',
      'outcomes': ['9th']
      },
      'jax': {
      'dragName': 'Jax',
      'seasons':[ 15, ],
      'age': 25,
      'hometown': 'Queens, New York',
      'outcomes': ['10th']
      },
      'aura mayari': {
      'dragName': 'Aura Mayari',
      'seasons':[ 15, ],
      'age': 30,
      'hometown': 'Nashville, TN',
      'outcomes': ['11th']
      },
      'robin fierce': {
      'dragName': 'Robin Fierce',
      'seasons':[ 15, ],
      'age': 26,
      'hometown': 'Hartford, CT',
      'outcomes': ['12th']
      },
      'amethyst': {
      'dragName': 'Amethyst',
      'seasons':[ 15, ],
      'age': 27,
      'hometown': 'West Hartford, CT',
      'outcomes': ['13th']
      },
      'sugar': {
      'dragName': 'Sugar',
      'seasons':[ 15, ],
      'age': 25,
      'hometown': 'Los Angeles, California',
      'outcomes': ['14th']
      },
      'princess poppy': {
      'dragName': 'Princess Poppy',
      'seasons':[ 15, ],
      'age': 26,
      'hometown': 'San Francisco, California',
      'outcomes': ['15th']
      },
    'irene dubois': {
      'dragName': 'Irene Dubois',
      'seasons':[ 15, ],
      'age': 29,
      'hometown': 'Seattle, Washington',
      'outcomes': ['16th']
      },
      // repeats 
      'shangela laquifa wadley': {
          'dragName': 'Shangela Laquifa Wadley',
          'seasons':[ 2 , 3 ],
          'age': 28,
          'outcomes':[ '12th' , '6th']
      },
      'eureka o’hara': {
        'dragName': 'Eureka O’Hara',
        'seasons':[ 9, 10 ],
        'age': 26,
        'outcomes': ['11th (Departed Due to Injury)', 'Runner-up']
      },
      'cynthia lee fontaine': {
        'dragName': 'Cynthia Lee Fontaine',
        'seasons':[ 8, 9, ],
        'age': 34,
        'outcomes': [ '10th (Miss Congeniality)', '10th']
      },
      'vanessa vanjie mateo': {
        'dragName': 'Vanessa Vanjie Mateo',
        'seasons':[ 10, 11 ],
        'age': 26,
        'outcomes': ['14th', '5th']
      },
//judges
      'rupaul charles': {
        'dragName': 'RuPaul Charles',
        'seasons':[ ],
        'age': '',
        'outcomes': []
      },
      'michelle visage': {
        'dragName': 'Michelle Visage',
        'seasons':[ ],
        'age': '',
        'outcomes': []
      },
    
    }

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('queens').find().sort({fans:-1}).toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {queens: result})
  })
})

app.get('/api/:name',(request,response)=>{
  const queenName = request.params.name.toLowerCase()

  if( queens[queenName] ){
      response.json(queens[queenName])
  }
  else{
      function searchQueens(queenName) {
          const maybes = [];
          for (const queen in queens) {
            if (queen.includes(queenName)) {
              maybes.push(queens[queen]);
            }
          }
          return maybes[0];
        }
      response.json(searchQueens(queenName))
  }
  
})
app.get('/api/season/:seasonNum', (request, response) => {
const season = +request.params.seasonNum;
const queensInSeason = Object.values(queens).filter(queen => queen.seasons.includes(season));
response.json(queensInSeason)
})

app.post('/queens/', (req, res) => {
  let myQueen = req.body.queenSaid
  function searchQueens(queenName) {
    const maybes = [];
    for (const queen in queens) {
      if (queen.includes(queenName)) {
        maybes.push(queens[queen]);
      }
    }
    return maybes[0];
  }
  let truQueen = searchQueens(myQueen)
  // console.log(truQueen.dragName, 'truQueen')
  console.log(myQueen,'myQueen')
  console.log(truQueen, 'tru')
  let foundQueen = false;
  // && queen == truQueen.dragName.toLowerCase() lower there
  for (const queen in queens){
    if (truQueen != undefined && req.body.queenQuote.length > 7 && queen == truQueen.dragName.toLowerCase()){
      db.collection('queens').insertOne({queenSaid: truQueen.dragName, queenQuote:req.body.queenQuote, fans: 0}, (err, result) => {
        console.log('saved to database')
        res.redirect('/')
      })
      foundQueen = true;
      break;
    }
  }
  if (!foundQueen) {
    console.log('not a queen', myQueen)
    res.redirect('/')
  }
})

// app.put('/vote/up/', (req, res) => {
//   db.collection('queens')
//   .findOneAndUpdate({queenSaid: req.body.queenSaid}, {
//     $inc: {
//       fans: 1
//     }
//   }, {
//     upsert: false,
//     returnOriginal: false
//   }, (err, result) => {
//     if (err) return res.send(err)
//     res.send(result)
//   })
// })

// app.put('/vote/down/', (req, res) => {
//   db.collection('queens')
//   .findOneAndUpdate({queenSaid: req.body.queenSaid}, {
//     $inc: {
//       fans: -1
//     }
//   }, {
//     upsert: false,
//     returnOriginal: false
//   }, (err, result) => {
//     if (err) return res.send(err)
//     res.send(result)
//   })
// })


